var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var marker = L.marker([40.681286, -73.997404]).addTo(map);
marker.bindPopup("David's house").openPopup();
