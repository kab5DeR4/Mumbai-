// Mumbai Locations Database
const mumbaiLocations = [
    { name: "Chhatrapati Shivaji Maharaj Terminus (CST)", lat: 18.9398, lng: 72.8355, zone: "South", type: "station" },
    { name: "Gateway of India", lat: 18.9220, lng: 72.8347, zone: "South", type: "landmark" },
    { name: "Marine Drive", lat: 18.9432, lng: 72.8236, zone: "South", type: "landmark" },
    { name: "Bandra Worli Sea Link", lat: 19.0330, lng: 72.8165, zone: "West", type: "landmark" },
    { name: "Juhu Beach", lat: 19.0990, lng: 72.8265, zone: "West", type: "landmark" },
    { name: "Andheri Station", lat: 19.1197, lng: 72.8464, zone: "West", type: "station" },
    { name: "Bandra Station", lat: 19.0544, lng: 72.8406, zone: "West", type: "station" },
    { name: "Dadar Station", lat: 19.0176, lng: 72.8431, zone: "Central", type: "station" },
    { name: "Kurla Station", lat: 19.0659, lng: 72.8797, "zone": "Central", type: "station" },
    { name: "Thane Station", lat: 19.1871, lng: 72.9786, "zone": "Central", type: "station" },
    { name: "Navi Mumbai (Vashi)", lat: 19.0330, lng: 73.0297, zone: "Navi Mumbai", type: "station" },
    { name: "Colaba", lat: 18.9067, lng: 72.8147, zone: "South", type: "area" },
    { name: "Churchgate", lat: 18.9322, lng: 72.8264, zone: "South", type: "station" },
    { name: "Fort", lat: 18.9339, lng: 72.8350, zone: "South", type: "area" },
    { name: "Nariman Point", lat: 18.9253, lng: 72.8243, zone: "South", type: "area" },
    { name: "Worli", lat: 19.0134, lng: 72.8149, zone: "South", type: "area" },
    { name: "Lower Parel", lat: 18.9988, lng: 72.8301, zone: "Central", type: "station" },
    { name: "Prabhadevi", lat: 19.0147, lng: 72.8295, zone: "Central", type: "station" },
    { name: "Mahalaxmi", lat: 18.9826, lng: 72.8226, zone: "South", type: "station" },
    { name: "Mumbai Central", lat: 18.9685, lng: 72.8195, zone: "Central", type: "station" },
    { name: "Grant Road", lat: 18.9636, lng: 72.8159, zone: "South", type: "station" },
    { name: "Charni Road", lat: 18.9539, lng: 72.8195, zone: "South", type: "station" },
    { name: "Vile Parle", lat: 19.0992, lng: 72.8438, zone: "West", type: "station" },
    { name: "Santacruz", lat: 19.0822, lng: 72.8411, zone: "West", type: "station" },
    { name: "Khar", lat: 19.0707, lng: 72.8376, zone: "West", type: "station" },
    { name: "Borivali", lat: 19.2304, lng: 72.8571, zone: "North", type: "station" },
    { name: "Kandivali", lat: 19.2072, lng: 72.8505, zone: "North", type: "station" },
    { name: "Malad", lat: 19.1860, lng: 72.8487, zone: "North", type: "station" },
    { name: "Goregaon", lat: 19.1663, lng: 72.8489, zone: "North", type: "station" },
    { name: "Jogeshwari", lat: 19.1358, lng: 72.8493, zone: "North", type: "station" },
    { name: "Powai", lat: 19.1176, lng: 72.9060, zone: "North", type: "area" },
    { name: "Ghatkopar", lat: 19.0866, lng: 72.9081, zone: "Central", type: "station" },
    { name: "Vikhroli", lat: 19.1135, lng: 72.9254, zone: "Central", type: "station" },
    { name: "Mulund", lat: 19.1726, lng: 72.9565, zone: "Central", type: "station" },
    { name: "BKC (Bandra Kurla Complex)", lat: 19.0640, lng: 72.8697, zone: "West", type: "area" },
    { name: "Chembur", lat: 19.0633, lng: 72.8997, zone: "East", type: "station" },
    { name: "Wadala", lat: 19.0167, lng: 72.8584, zone: "Central", type: "station" },
    { name: "Sion", lat: 19.0433, lng: 72.8632, zone: "Central", type: "station" },
    { name: "Matunga", lat: 19.0259, lng: 72.8521, zone: "Central", type: "station" },
    { name: "Mahim", lat: 19.0377, lng: 72.8399, zone: "Central", type: "station" }
];

// UPDATED: City Highlights with Correct Images
const cityHighlights = [
    {
        name: "Gateway of India",
        location: "Colaba",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800"
    },
    {
        name: "Marine Drive",
        location: "South Mumbai",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Chhatrapati Shivaji Maharaj Terminus",
        location: "CST",
        image: "q.jpg"
    },
    {
        name: "Bandra Worli Sea Link",
        location: "Worli",
        image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&q=80&w=800"
    }
];

// Transport Fare Configuration
const fareRates = {
    train: {
        baseRate: 5,
        perKm: 0.6,
        icon: "🚆",
        tortuosity: 1.2
    },
    bus: {
        baseRate: 10,
        perKm: 2,
        icon: "🚌",
        minFare: 10,
        maxFare: 60,
        tortuosity: 1.4
    },
    metro: {
        baseRate: 20,
        perKm: 3,
        icon: "🚇",
        minFare: 20,
        maxFare: 80,
        tortuosity: 1.3
    },
    auto: {
        baseRate: 23,
        perKm: 15.5,
        icon: "🛺",
        tortuosity: 1.5
    },
    taxi: {
        baseRate: 28,
        perKm: 18.5,
        icon: "🚖",
        tortuosity: 1.5
    }
};

// DOM Elements
const originInput = document.getElementById('origin-input');
const destinationInput = document.getElementById('destination-input');
const originDropdown = document.getElementById('origin-dropdown');
const destinationDropdown = document.getElementById('destination-dropdown');
const swapBtn = document.getElementById('swap-btn');
const calculateBtn = document.getElementById('calculate-btn');
const resultsArea = document.getElementById('results-area');
const fareCardsContainer = document.getElementById('fare-cards-container');
const totalDistanceLabel = document.getElementById('total-distance-label');
const travelZoneLabel = document.getElementById('travel-zone-label');
const highlightContent = document.getElementById('highlight-content');
const cityGallery = document.getElementById('city-gallery');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

let selectedOrigin = null;
let selectedDestination = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeAutocomplete();
    initializeTransportModes();
    loadCityHighlights();
    loadMumbaiNews();
    initializeMobileMenu();
    initMap();
});

// Mobile Menu
function initializeMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenu.style.display = mobileMenu.classList.contains('active') ? 'flex' : 'none';
    });

    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenu.style.display = 'none';
        });
    });
}

// Autocomplete functionality
function initializeAutocomplete() {
    originInput.addEventListener('input', (e) => {
        handleAutocomplete(e.target.value, originDropdown, 'origin');
    });

    destinationInput.addEventListener('input', (e) => {
        handleAutocomplete(e.target.value, destinationDropdown, 'destination');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            originDropdown.classList.remove('active');
            destinationDropdown.classList.remove('active');
        }
    });
}

function handleAutocomplete(query, dropdown, type) {
    if (!query || query.length < 2) {
        dropdown.classList.remove('active');
        return;
    }

    const matches = mumbaiLocations.filter(loc => 
        loc.name.toLowerCase().includes(query.toLowerCase())
    );

    if (matches.length === 0) {
        dropdown.classList.remove('active');
        return;
    }

    dropdown.innerHTML = matches.map((loc, i) => {
        const realIndex = mumbaiLocations.indexOf(loc);
        return `
        <div class="dropdown-item" data-index="${realIndex}">
            ${loc.name} <span style="color: #6b7280; font-size: 0.875rem;">(${loc.zone})</span>
        </div>
        `;
    }).join('');

    dropdown.classList.add('active');

    dropdown.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = item.dataset.index;
            const location = mumbaiLocations[index];
            
            if (type === 'origin') {
                originInput.value = location.name;
                selectedOrigin = location;
            } else {
                destinationInput.value = location.name;
                selectedDestination = location;
            }
            dropdown.classList.remove('active');
        });
    });
}

// Swap locations
swapBtn.addEventListener('click', () => {
    const tempValue = originInput.value;
    const tempSelected = selectedOrigin;
    
    originInput.value = destinationInput.value;
    selectedOrigin = selectedDestination;
    
    destinationInput.value = tempValue;
    selectedDestination = tempSelected;
});

// Transport Mode Selection
function initializeTransportModes() {
    const modeCards = document.querySelectorAll('.mode-card');
    
    modeCards.forEach(card => {
        const checkbox = card.querySelector('.mode-checkbox');
        
        if (checkbox.checked) {
            card.classList.add('selected');
        }
        
        card.addEventListener('click', (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            card.classList.toggle('selected', checkbox.checked);
        });
    });
}

// Calculate Routes
calculateBtn.addEventListener('click', () => {
    if (!selectedOrigin || !selectedDestination) {
        alert('Please select both origin and destination from the list.');
        return;
    }

    const selectedModes = Array.from(document.querySelectorAll('.mode-checkbox:checked'))
        .map(cb => cb.value);

    if (selectedModes.length === 0) {
        alert('Please select at least one transport mode');
        return;
    }

    // Straight line distance
    const rawDistance = calculateDistance(selectedOrigin, selectedDestination);
    const zoneCombo = `${selectedOrigin.zone}-${selectedDestination.zone}`;
    
    displayResults(rawDistance, zoneCombo, selectedModes, selectedOrigin, selectedDestination);
});

// Haversine Formula
function calculateDistance(loc1, loc2) {
    const R = 6371;
    const dLat = toRad(loc2.lat - loc1.lat);
    const dLng = toRad(loc2.lng - loc1.lng);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(loc1.lat)) * Math.cos(toRad(loc2.lat)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(degrees) {
    return degrees * (Math.PI / 180);
}

// Check if route is valid for mode (Realistic logic)
function isRouteValid(mode, rawDistance, origin, dest) {
    // 1. AUTO BAN: Autos are not allowed in South Mumbai (Colaba, Fort, Marine Drive, etc.)
    // If either point is in South, and mode is auto -> invalid.
    if (mode === 'auto') {
        if (origin.zone === 'South' || dest.zone === 'South') {
            return { valid: false, reason: "Banned in SoBo" };
        }
    }

    // 2. Train Logic: Not for very short distances
    if (mode === 'train') {
        if (rawDistance < 1) {
            return { valid: false, reason: "Walkable distance" };
        }
    }

    return { valid: true };
}

// Calculate fare with realistic adjustments
function calculateFare(mode, rawDistance) {
    const config = fareRates[mode];
    // Apply tortuosity (roads are winding, rails are straighter)
    const realisticDistance = rawDistance * (config.tortuosity || 1.2);
    
    let fare = 0;
    
    if (mode === 'train') {
        // Simple slab pricing for trains
        if (realisticDistance < 5) fare = 5;
        else if (realisticDistance < 10) fare = 10;
        else if (realisticDistance < 20) fare = 15;
        else if (realisticDistance < 50) fare = 20;
        else fare = 35; // Express/Long haul within city
    } else if (mode === 'bus') {
        fare = Math.max(config.minFare, Math.min(config.maxFare, config.baseRate + (realisticDistance * config.perKm)));
    } else if (mode === 'metro') {
        fare = Math.max(config.minFare, Math.min(config.maxFare, config.baseRate + (realisticDistance * config.perKm)));
    } else {
        // Taxi/Auto meter
        fare = config.baseRate + ((realisticDistance - 1.5) * config.perKm); // Subtract first 1.5km included in base
        if (fare < config.baseRate) fare = config.baseRate;
    }
    
    return {
        price: Math.round(fare),
        dist: realisticDistance
    };
}

// Display results
function displayResults(rawDistance, zone, modes, origin, dest) {
    // Show straight line distance in stats
    totalDistanceLabel.textContent = `${rawDistance.toFixed(2)} km`;
    travelZoneLabel.textContent = zone;
    
    fareCardsContainer.innerHTML = '';
    
    let hasResults = false;

    modes.forEach(mode => {
        // CHECK REALISM
        const check = isRouteValid(mode, rawDistance, origin, dest);
        
        if (!check.valid) {
            // Optional: Render a disabled card or skip
            // For now, let's render a "Not Available" card
            const config = fareRates[mode];
            const card = document.createElement('div');
            card.className = 'fare-card disabled'; // Add CSS for this if needed
            card.style.opacity = "0.6";
            card.innerHTML = `
                <div class="fare-card-header">
                    <div class="fare-mode">
                        <span>${config.icon}</span>
                        <span>${mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
                    </div>
                    <div class="fare-price" style="font-size: 1rem; color: red;">UNAVAILABLE</div>
                </div>
                <div class="fare-details">
                    <div class="fare-detail-item" style="grid-column: span 2; color: #ef4444;">
                        ${check.reason}
                    </div>
                </div>
            `;
            fareCardsContainer.appendChild(card);
            return;
        }

        hasResults = true;
        const result = calculateFare(mode, rawDistance);
        const fare = result.price;
        const dist = result.dist;
        const config = fareRates[mode];
        
        // Speed Factors (km/h estimate): Train: 40, Bus: 20, Metro: 50, Auto: 25, Taxi: 30
        let speed = 30;
        if(mode === 'train') speed = 40;
        if(mode === 'metro') speed = 50;
        if(mode === 'bus') speed = 20;
        if(mode === 'auto') speed = 25;
        
        const timeInHours = dist / speed;
        const estimatedTime = Math.round(timeInHours * 60); // minutes
        
        const card = document.createElement('div');
        card.className = 'fare-card';
        card.innerHTML = `
            <div class="fare-card-header">
                <div class="fare-mode">
                    <span>${config.icon}</span>
                    <span>${mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
                </div>
                <div class="fare-price">₹${fare}</div>
            </div>
            <div class="fare-details">
                <div class="fare-detail-item">
                    <span class="detail-label">Route Dist.</span>
                    <span class="detail-value">${dist.toFixed(1)} km</span>
                </div>
                <div class="fare-detail-item">
                    <span class="detail-label">Est. Time</span>
                    <span class="detail-value">${estimatedTime} min</span>
                </div>
                <div class="fare-detail-item">
                    <span class="detail-label">Traffic Factor</span>
                    <span class="detail-value">${config.tortuosity}x</span>
                </div>
                <div class="fare-detail-item">
                     <a href="booking.html?mode=${mode}&price=${fare}&from=${encodeURIComponent(origin.name)}&to=${encodeURIComponent(dest.name)}" 
                        class="book-btn">
                        BOOK TICKET &rarr;
                     </a>
                </div>
            </div>
        `;
        
        fareCardsContainer.appendChild(card);
    });
    
    resultsArea.style.display = 'block';
    setTimeout(() => {
        resultsArea.classList.add('active');
    }, 100);
    
    resultsArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Load City Highlights
function loadCityHighlights() {
    cityGallery.innerHTML = cityHighlights.map(place => `
        <div class="gallery-card" onclick="setDestination('${place.name}')">
            <img src="${place.image}" alt="${place.name}" class="gallery-image">
            <div class="gallery-content">
                <h4 class="gallery-name">${place.name}</h4>
                <p class="gallery-location">${place.location}</p>
            </div>
        </div>
    `).join('');
}

window.setDestination = function(placeName) {
    const location = mumbaiLocations.find(loc => loc.name.includes(placeName));
    if (location) {
        destinationInput.value = location.name;
        selectedDestination = location;
        document.getElementById('finder').scrollIntoView({ behavior: 'smooth' });
    }
}

// Load Mumbai News
function loadMumbaiNews() {
    const newsItems = [
        "Mumbai Local trains: Mega block on Central Line this Sunday.",
        "Coastal Road project reduces travel time from Worli to Marine Drive by 40%.",
        "New AC Double Decker buses added to BKC-Bandra route.",
        "Traffic Alert: Slow movement at Western Express Highway near Goregaon.",
        "Metro Line 2A and 7 operational: Connects Andheri West to Dahisar."
    ];
    
    const randomNews = newsItems[Math.floor(Math.random() * newsItems.length)];
    
    highlightContent.innerHTML = `<p class="loading-text">${randomNews}</p>`;
}

function initMap() {
    const mapElement = document.getElementById("mumbaiMap");
    
    if (typeof L !== 'undefined' && mapElement) {
        const map = L.map('mumbaiMap').setView([19.0760, 72.8777], 11);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        mumbaiLocations.forEach(m => {
            L.marker([m.lat, m.lng]).addTo(map).bindPopup(m.name);
        });

        setTimeout(() => {
            map.invalidateSize();
        }, 200);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});