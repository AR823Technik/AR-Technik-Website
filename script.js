
mapboxgl.accessToken = 'your_mapbox_access_token';

var map = new mapboxgl.Map({
    container: 'crisisMap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 20], // Startposition [Längengrad, Breitengrad]
    zoom: 1.5
});

// Funktion zum Abrufen von Krisendaten von einer API
async function fetchCrisisData() {
    try {
        // Beispiel-API-Endpunkt für Krisendaten
        let response = await fetch('https://api.example.com/crisis-data');
        let data = await response.json();
        
        // Markierungen auf der Karte hinzufügen
        data.crises.forEach(crisis => {
            new mapboxgl.Marker()
                .setLngLat([crisis.longitude, crisis.latitude])
                .setPopup(new mapboxgl.Popup().setText(crisis.description)) // Pop-up hinzufügen
                .addTo(map);
        });
    } catch (error) {
        console.error('Error fetching crisis data:', error);
    }
}

// Daten abrufen und Karte aktualisieren
fetchCrisisData();
