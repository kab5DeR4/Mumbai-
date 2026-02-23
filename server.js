const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// CRITICAL FIX: { index: false } allows us to serve login.html on the root path '/'
app.use(express.static(path.join(__dirname), { index: false }));

// ---------------------------------------------------------
// 1. DATABASE CONNECTION
// ---------------------------------------------------------
const DB_PATH = path.join(__dirname, 'locations.json');
let mumbaiLocations = [];

try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    mumbaiLocations = JSON.parse(data);
    console.log(`✅ Database Loaded: ${mumbaiLocations.length} locations`);
} catch (err) {
    console.error("❌ Database Error: Could not read locations.json", err);
    mumbaiLocations = [];
}

// ---------------------------------------------------------
// 2. AUTHENTICATION & REGISTRATION HANDLER
// ---------------------------------------------------------
app.post('/api/login', (req, res) => {
    const { username, password, mode } = req.body;

    // 1. Validate Input
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Missing Credentials' });
    }

    // 2. Log to Terminal (So you can see it working)
    console.log('\n=========================================');
    if (mode === 'register') {
        console.log('📝 NEW USER REGISTRATION');
    } else {
        console.log('🔒 SYSTEM ACCESS REQUEST');
    }
    console.log(`👤 ID       : ${username}`);
    console.log(`🔑 KEY      : ${password}`);
    console.log('=========================================\n');

    // 3. Send Success Response
    // (Since this is a simple file-based project, we approve all requests)
    if (mode === 'register') {
        res.status(200).json({ success: true, message: 'Registration Complete' });
    } else {
        res.status(200).json({ success: true, message: 'Access Granted' });
    }
});

// ---------------------------------------------------------
// 3. API ENDPOINTS
// ---------------------------------------------------------

const fareRates = {
    train: { baseRate: 5, perKm: 0.6, tortuosity: 1.2 },
    bus: { baseRate: 10, perKm: 2, minFare: 10, maxFare: 60, tortuosity: 1.4 },
    metro: { baseRate: 20, perKm: 3, minFare: 20, maxFare: 80, tortuosity: 1.3 },
    auto: { baseRate: 23, perKm: 15.5, tortuosity: 1.5 },
    taxi: { baseRate: 28, perKm: 18.5, tortuosity: 1.5 }
};

app.get('/api/locations', (req, res) => {
    res.json({ success: true, data: mumbaiLocations });
});

app.get('/api/locations/search', (req, res) => {
    const query = req.query.q?.toLowerCase() || '';
    if (query.length < 2) return res.json({ success: true, data: [] });
    const results = mumbaiLocations.filter(loc => loc.name.toLowerCase().includes(query));
    res.json({ success: true, data: results });
});

app.post('/api/calculate-fare', (req, res) => {
    const { origin, destination, modes } = req.body;
    const originLoc = mumbaiLocations.find(l => l.name === origin);
    const destLoc = mumbaiLocations.find(l => l.name === destination);
    
    if (!originLoc || !destLoc) return res.status(404).json({ success: false, error: 'Location not found' });
    
    const rawDistance = calculateDistance(originLoc.lat, originLoc.lng, destLoc.lat, destLoc.lng);
    const zone = `${originLoc.zone}-${destLoc.zone}`;
    
    const fares = modes.map(mode => {
        if (mode === 'auto' && (originLoc.zone === 'South' || destLoc.zone === 'South')) {
            return { mode, error: "Banned in South Mumbai" };
        }
        const result = calculateFareForMode(mode, rawDistance);
        const speeds = { train: 45, metro: 60, bus: 20, auto: 25, taxi: 30 };
        const time = Math.round((result.distance / (speeds[mode] || 30)) * 60);

        return { mode, fare: result.fare, distance: result.distance.toFixed(1), estimatedTime: time, zone };
    });
    
    res.json({ success: true, data: { origin: originLoc.name, destination: destLoc.name, rawDistance: rawDistance.toFixed(2), zone, fares } });
});

app.get('/api/news', (req, res) => {
    const news = [
        "Mumbai Local: Mega Block on Central Line this Sunday.",
        "Coastal Road reduces travel time by 45%.",
        "Traffic Alert: Heavy congestion near Toll Plaza."
    ];
    res.json({ success: true, data: { news: news[Math.floor(Math.random() * news.length)] } });
});

// ---------------------------------------------------------
// 4. ENTRY POINT
// ---------------------------------------------------------
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Helpers
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI/180);
    const dLng = (lng2 - lng1) * (Math.PI/180);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1*(Math.PI/180)) * Math.cos(lat2*(Math.PI/180)) * Math.sin(dLng/2) * Math.sin(dLng/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function calculateFareForMode(mode, distance) {
    const config = fareRates[mode];
    const realDist = distance * config.tortuosity;
    let fare = 0;
    if (mode === 'train') {
        fare = realDist < 5 ? 5 : realDist < 20 ? 10 : 20;
    } else if (mode === 'bus' || mode === 'metro') {
        fare = Math.max(config.minFare, Math.min(config.maxFare, config.baseRate + (realDist * config.perKm)));
    } else {
        fare = Math.max(config.baseRate, config.baseRate + ((realDist - 1.5) * config.perKm));
    }
    return { fare: Math.round(fare), distance: realDist };
}

app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║      MUMBAI ROUTE FINDER - SYSTEM ONLINE             ║
    ║                                                       ║
    ║      ⚠️  CRITICAL: DO NOT USE LIVE SERVER (5500)     ║
    ║      👉  OPEN THIS URL: http://localhost:${PORT}        ║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝
    `);
});