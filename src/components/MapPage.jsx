import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';

const MapPage = () => {
  const mapRef = useRef(null); // Use a ref to store the map instance
  const [latitude, setLatitude] = useState(11.584828553200781);
  const [longitude, setLongitude] = useState(43.144853123786596);
  const [selectedLayer, setSelectedLayer] = useState('OpenStreetMap');

  useEffect(() => {
    // Initialize the map only once
    if (mapRef.current === null) {
      mapRef.current = L.map('map').setView([latitude, longitude], 13);

      // Define base layers
      const layers = {
        'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }),
        'OpenTopoMap': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors, SRTM',
        }),
        'Google Maps Hybrid': L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
          attribution: '&copy; Google',
        }),
        'cartoDB': L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap contributors & CartoDB',
        }),
        'Google Maps Traffic': L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
          attribution: '&copy; Google',
        }),
      };

      // Add the initial layer to the map
      layers[selectedLayer].addTo(mapRef.current);
    }

    // Clean up the map on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, selectedLayer]); // Dependencies

  const handleLayerChange = (layerName) => {
    setSelectedLayer(layerName);
    mapRef.current.eachLayer((layer) => {
      mapRef.current.removeLayer(layer);
    });

    const layers = {
      'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
      'OpenTopoMap': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors, SRTM',
      }),
      'Google Maps Hybrid': L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        attribution: '&copy; Google',
      }),
      'cartoDB': L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors & CartoDB',
      }),
      'Google Maps Traffic': L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        attribution: '&copy; Google',
      }),
    };

    layers[layerName].addTo(mapRef.current);
  };

  return (
    <div className="map-page">
      <div className="header">
        <h1>Carte des Etablissements</h1>
        <div className="search-container">
          <input type="text" placeholder="Rechercher un nom" className="search-input" />
          <button className="search-button">Rechercher</button>
        </div>
      </div>

      <div className="controls-container">
        <div className="dropdown">
          <label>Choisir un établissement</label>
          <select>
            <option>-- Choisir un établissement --</option>
            <option>Établissement 1</option>
            <option>Établissement 2</option>
            <option>Établissement 3</option>
          </select>
        </div>

        <div className="layer-controls">
          <h3>Layers</h3>
          <div>
            <input type="radio" name="layer" value="OpenStreetMap" checked={selectedLayer === 'OpenStreetMap'} onChange={() => handleLayerChange('OpenStreetMap')} /> OpenStreetMap
          </div>
          <div>
            <input type="radio" name="layer" value="OpenTopoMap" checked={selectedLayer === 'OpenTopoMap'} onChange={() => handleLayerChange('OpenTopoMap')} /> OpenTopoMap
          </div>
          <div>
            <input type="radio" name="layer" value="Google Maps Hybrid" checked={selectedLayer === 'Google Maps Hybrid'} onChange={() => handleLayerChange('Google Maps Hybrid')} /> Google Maps Hybrid
          </div>
          <div>
            <input type="radio" name="layer" value="cartoDB" checked={selectedLayer === 'cartoDB'} onChange={() => handleLayerChange('cartoDB')} /> CartoDB
          </div>
          <div>
            <input type="radio" name="layer" value="Google Maps Traffic" checked={selectedLayer === 'Google Maps Traffic'} onChange={() => handleLayerChange('Google Maps Traffic')} /> Google Maps Traffic
          </div>
          <button className="add-route-button">Ajouter Trajet</button>
          <button className="location-button">Afficher mon emplacement</button>
          <div className="view-buttons">
            <button>2D</button>
            <button>3D</button>
          </div>
          <div className="legend">
            <h4>Legend</h4>
            <p>Latitude: {latitude.toFixed(6)} °</p>
            <p>Longitude: {longitude.toFixed(6)} °</p>
          </div>
        </div>
      </div>

      <div id="map" className="map-container"></div>
    </div>
  );
};

export default MapPage;
