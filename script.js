
mapboxgl.accessToken = 'pk.eyJ1IjoiYXItdGVjaG5pazgyNCIsImEiOiJjbHphYjIzZTUwYnllMmtzODdudzAzZ2N4In0.8SV2M17oFu9siQvqzMUTAg';

var map = new mapboxgl.Map({
    container: 'crisisMap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [20, 10], // Startposition [Längengrad, Breitengrad]
    zoom: 2
});

var conflictData = [{'country': 'Syria', 'description': 'Ongoing civil war with various factions involved.', 'latitude': 34.802075, 'longitude': 38.996815}, {'country': 'Yemen', 'description': 'Humanitarian crisis due to ongoing conflict.', 'latitude': 15.552727, 'longitude': 48.516388}, {'country': 'Ukraine', 'description': 'Conflict in eastern regions, ongoing since 2014.', 'latitude': 48.379433, 'longitude': 31.16558}, {'country': 'Ethiopia', 'description': 'Internal conflict in the Tigray region.', 'latitude': 9.145, 'longitude': 40.489673}, {'country': 'Myanmar', 'description': 'Conflict following military coup in 2021.', 'latitude': 21.916221, 'longitude': 95.955974}];

// Markierungen auf der Karte hinzufügen
conflictData.forEach(conflict => {
    new mapboxgl.Marker()
        .setLngLat([conflict.longitude, conflict.latitude])
        .setPopup(new mapboxgl.Popup().setText(`${conflict.country}: ${conflict.description}`)) // Pop-up hinzufügen
        .addTo(map);
});
