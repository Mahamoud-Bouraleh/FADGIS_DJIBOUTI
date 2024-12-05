import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './PersonnTemp.css';

// Define a custom icon for personnel
const personIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png', // URL to a person icon
  iconSize: [30, 30], // Adjust the size as needed
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const PersonnTemp = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [personnel, setPersonnel] = useState([
    { id: 1, name: 'John Doe', lat: 11.5800, lng: 43.1450, status: 'On Duty', pathHistory: [] },
    { id: 2, name: 'Jane Smith', lat: 11.5900, lng: 43.1400, status: 'Off Duty', pathHistory: [] },
  ]);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([11.5848, 43.1448], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    // Function to update personnel markers and paths
    const updateMarkers = () => {
      personnel.forEach(person => {
        // Remove previous markers and polylines if they exist
        if (person.marker) {
          mapRef.current.removeLayer(person.marker);
        }
        if (person.polyline) {
          mapRef.current.removeLayer(person.polyline);
        }

        // Create or update the marker with the custom icon
        person.marker = L.marker([person.lat, person.lng], { icon: personIcon }).addTo(mapRef.current);
        person.marker.bindPopup(`<b>${person.name}</b><br>Status: ${person.status}`);

        // Update path history for each person
        const newPathHistory = [...person.pathHistory, [person.lat, person.lng]];
        person.pathHistory = newPathHistory.slice(-10); // Limit history length to the last 10 points

        // Draw polyline to show movement history
        person.polyline = L.polyline(person.pathHistory, { color: 'blue', weight: 2 }).addTo(mapRef.current);
      });
    };

    // Update markers and paths initially
    updateMarkers();

    // Simulate real-time updates by updating positions periodically
    const interval = setInterval(() => {
      setPersonnel((prevPersonnel) =>
        prevPersonnel.map((person) => {
          const newLat = person.lat + (Math.random() - 0.5) * 0.01;
          const newLng = person.lng + (Math.random() - 0.5) * 0.01;
          return { ...person, lat: newLat, lng: newLng };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      personnel.forEach(person => {
        // Update markers and paths whenever personnel data changes
        if (person.marker) {
          mapRef.current.removeLayer(person.marker);
        }
        if (person.polyline) {
          mapRef.current.removeLayer(person.polyline);
        }

        // Update marker with custom icon
        person.marker = L.marker([person.lat, person.lng], { icon: personIcon }).addTo(mapRef.current);
        person.marker.bindPopup(`<b>${person.name}</b><br>Status: ${person.status}`);

        // Update path history
        const newPathHistory = [...person.pathHistory, [person.lat, person.lng]];
        person.pathHistory = newPathHistory.slice(-10); // Limit to last 10 points

        // Draw polyline
        person.polyline = L.polyline(person.pathHistory, { color: 'blue', weight: 2 }).addTo(mapRef.current);
      });
    }
  }, [personnel]);

  return (
    <div className="personn-temp-page">
      <header className="page-header">
        <h1>Personnels en temps réel</h1>
      </header>

      <div className="map-container" ref={mapContainerRef} id="map"></div>

      <div className="info-panel">
        <h3>Informations sur le Personnel</h3>
        <ul>
          {personnel.map(person => (
            <li key={person.id}>
              {person.name} - Status: {person.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonnTemp;
