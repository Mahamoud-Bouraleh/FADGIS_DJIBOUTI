import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ZoneControl.css';

const ZoneControl = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [zones, setZones] = useState([
    { id: 1, name: 'Zone A', coordinates: [11.6000, 43.1500], radius: 500 },
    { id: 2, name: 'Zone B', coordinates: [11.5800, 43.1600], radius: 300 },
    { id: 3, name: 'Zone C', coordinates: [11.5900, 43.1400], radius: 400 },
    // Additional zones can be added here
  ]);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([11.5848, 43.1448], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);

      // Draw each control zone as a circle with a popup
      zones.forEach(zone => {
        const circle = L.circle(zone.coordinates, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: zone.radius
        }).addTo(mapRef.current);

        circle.bindPopup(`<b>${zone.name}</b><br>Rayon: ${zone.radius} mètres`);
      });
    }
  }, [zones]);

  return (
    <div className="zone-control-page">
      <header className="page-header">
        <h1>Zones de contrôle</h1>
      </header>

      <div className="map-container" ref={mapContainerRef} id="map"></div>

      <div className="info-panel">
        <h3>Informations sur les Zones</h3>
        <ul>
          {zones.map(zone => (
            <li key={zone.id}>
              {zone.name} - Rayon: {zone.radius} mètres
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ZoneControl;
