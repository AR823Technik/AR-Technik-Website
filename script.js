
mapboxgl.accessToken = 'pk.eyJ1IjoiYXItdGVjaG5pazgyNCIsImEiOiJjbHphYjIzZTUwYnllMmtzODdudzAzZ2N4In0.8SV2M17oFu9siQvqzMUTAg';

var map = new mapboxgl.Map({
    container: 'crisisMap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 20], // Startposition [Längengrad, Breitengrad]
    zoom: 1.5
});

// Statische Daten für Krisenherde
var crisisData = [
    {
        description: 'Drought in East Africa',
        longitude: 40.0,
        latitude: 1.5
    },
    {
        description: 'Conflict in the Middle East',
        longitude: 45.0,
        latitude: 33.0
    },
    {
        description: 'Flooding in South Asia',
        longitude: 85.0,
        latitude: 27.0
    },
    {
        description: 'Wildfires in Australia',
        longitude: 133.0,
        latitude: -25.0
    }
];

// Markierungen auf der Karte hinzufügen
crisisData.forEach(crisis => {
    new mapboxgl.Marker()
        .setLngLat([crisis.longitude, crisis.latitude])
        .setPopup(new mapboxgl.Popup().setText(crisis.description)) // Pop-up hinzufügen
        .addTo(map);
});
