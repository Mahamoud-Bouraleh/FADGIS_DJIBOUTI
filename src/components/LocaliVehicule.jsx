import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './LocaliVehicule.css';

// Define custom icons for different types of vehicles
const carIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/743/743920.png', // Car icon
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const truckIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1995/1995513.png', // Truck icon
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const motorcycleIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046314.png', // Motorcycle icon
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const LocaliVehicule = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [vehicles, setVehicles] = useState([
    { id: 1, immatriculation: 'DJ1234A', lat: 11.580380923342855, lng:  43.13958984091283, type: 'Car', pathHistory: [], passages: 5 },
    { id: 2, immatriculation: 'DJ5678B', lat: 11.559565835880587,  lng: 43.149898834795174, type: 'Truck', pathHistory: [], passages: 3 },
    { id: 3, immatriculation: 'DJ9101C', lat: 11.603993388920928,  lng: 43.15230065105441, type: 'Motorcycle', pathHistory: [], passages: 7 },
    // Add more vehicle data if needed
  ]);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([11.5848, 43.1448], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    const updateMarkers = () => {
      vehicles.forEach(vehicle => {
        // Remove existing markers and polylines if they exist
        if (vehicle.marker) {
          mapRef.current.removeLayer(vehicle.marker);
        }
        if (vehicle.polyline) {
          mapRef.current.removeLayer(vehicle.polyline);
        }

        // Select the icon based on the vehicle type
        let vehicleIcon;
        switch (vehicle.type) {
          case 'Car':
            vehicleIcon = carIcon;
            break;
          case 'Truck':
            vehicleIcon = truckIcon;
            break;
          case 'Motorcycle':
            vehicleIcon = motorcycleIcon;
            break;
          default:
            vehicleIcon = carIcon; // Default icon if type is unknown
        }

        // Create or update the marker with the appropriate icon
        vehicle.marker = L.marker([vehicle.lat, vehicle.lng], { icon: vehicleIcon }).addTo(mapRef.current);
        vehicle.marker.bindPopup(`<b>${vehicle.immatriculation}</b><br>Type: ${vehicle.type}<br>Passages: ${vehicle.passages}`);

        // Update path history for each vehicle
        const newPathHistory = [...vehicle.pathHistory, [vehicle.lat, vehicle.lng]];
        vehicle.pathHistory = newPathHistory.slice(-10); // Limit history to the last 10 points

        // Draw polyline to show movement history
        vehicle.polyline = L.polyline(vehicle.pathHistory, { color: 'blue', weight: 2 }).addTo(mapRef.current);
      });
    };

    updateMarkers();

    // Simulate real-time updates by refreshing positions periodically
    const interval = setInterval(() => {
      setVehicles((prevVehicles) =>
        prevVehicles.map(vehicle => ({
          ...vehicle,
          lat: vehicle.lat + (Math.random() - 0.5) * 0.01,
          lng: vehicle.lng + (Math.random() - 0.5) * 0.01
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      vehicles.forEach(vehicle => {
        // Update markers and paths whenever vehicles data changes
        if (vehicle.marker) {
          mapRef.current.removeLayer(vehicle.marker);
        }
        if (vehicle.polyline) {
          mapRef.current.removeLayer(vehicle.polyline);
        }

        // Select the icon based on vehicle type
        let vehicleIcon;
        switch (vehicle.type) {
          case 'Car':
            vehicleIcon = carIcon;
            break;
          case 'Truck':
            vehicleIcon = truckIcon;
            break;
          case 'Motorcycle':
            vehicleIcon = motorcycleIcon;
            break;
          default:
            vehicleIcon = carIcon;
        }

        // Update marker with the correct icon
        vehicle.marker = L.marker([vehicle.lat, vehicle.lng], { icon: vehicleIcon }).addTo(mapRef.current);
        vehicle.marker.bindPopup(`<b>${vehicle.immatriculation}</b><br>Type: ${vehicle.type}<br>Passages: ${vehicle.passages}`);

        // Update path history
        const newPathHistory = [...vehicle.pathHistory, [vehicle.lat, vehicle.lng]];
        vehicle.pathHistory = newPathHistory.slice(-10); // Limit to last 10 points

        // Draw polyline
        vehicle.polyline = L.polyline(vehicle.pathHistory, { color: 'blue', weight: 2 }).addTo(mapRef.current);
      });
    }
  }, [vehicles]);

  return (
    <div className="locali-vehicule-page">
      <header className="page-header">
        <h1>Localisation des Véhicules</h1>
      </header>

      <div className="map-container" ref={mapContainerRef} id="map"></div>

      <div className="info-panel">
        <h3>Informations sur les Véhicules</h3>
        <ul>
          {vehicles.map(vehicle => (
            <li key={vehicle.id}>
              {vehicle.immatriculation} - Type: {vehicle.type} - Passages: {vehicle.passages}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocaliVehicule;
