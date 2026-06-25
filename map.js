// Location coordinates — cases.js mein sirf city name hai
// yahan har location ka lat/lng define hai
var locationCoords = {
    "Kenya":              { lat: -1.2921,  lng: 36.8219 },
    "Lyari, Karachi":     { lat: 24.8525,  lng: 67.0100 },
    "Karachi":            { lat: 24.8607,  lng: 67.0011 },
    "Sindh":              { lat: 25.8943,  lng: 68.5247 },
    "Balochistan":        { lat: 28.4907,  lng: 65.0958 },
    "Islamabad":          { lat: 33.6844,  lng: 73.0479 },
    "Pakistan":           { lat: 30.3753,  lng: 69.3451 },
    "Lahore":             { lat: 31.5497,  lng: 74.3436 },
    "Peshawar":           { lat: 34.0151,  lng: 71.5249 },
    "Quetta":             { lat: 30.1798,  lng: 66.9750 }
};

// Status se color map
var pinColor = {
    "CASE UNRESOLVED":         "#e24b4a",
    "UNDER INVESTIGATION":     "#f59e0b",
    "CASE SOLVED":             "#22c55e"
};

function initMap() {
    var map = L.map('map').setView([30.3753, 69.3451], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // cases.js ka 'cases' array directly use ho raha hai
    cases.forEach(function(c) {
        var coords = locationCoords[c.location];

        // Agar location ka coordinate nahi mila toh skip
        if (!coords) {
            console.warn('No coordinates for location: ' + c.location);
            return;
        }

        var color = pinColor[c.status] || "#e24b4a";

        var marker = L.circleMarker([coords.lat, coords.lng], {
            radius:      10,
            fillColor:   color,
            color:       '#ffffff',
            weight:      2,
            fillOpacity: 0.9
        });

        var popupHTML =
            '<div class="map-popup">' +
                '<div class="popup-city">' + c.location + '</div>' +
                '<div class="popup-case">CASE #' + String(c.id).padStart(3, '0') + '</div>' +
                '<div class="popup-name">' + c.name + '</div>' +
                '<div class="popup-charge">' + c.category + '</div>' +
                '<a class="popup-btn" href="case.html?id=' + c.id + '">View Case &rarr;</a>' +
            '</div>';

        marker.bindPopup(popupHTML);
        marker.addTo(map);
    });

    // Legend
    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function() {
        var div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML =
            '<div class="legend-item"><span class="legend-dot" style="background:#e24b4a"></span> Unresolved</div>' +
            '<div class="legend-item"><span class="legend-dot" style="background:#f59e0b"></span> Under Investigation</div>' +
            '<div class="legend-item"><span class="legend-dot" style="background:#22c55e"></span> Solved</div>';
        return div;
    };

    legend.addTo(map);
}

window.addEventListener('load', initMap);