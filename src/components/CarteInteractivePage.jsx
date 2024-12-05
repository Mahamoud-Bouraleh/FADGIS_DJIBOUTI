import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CarteInteractivePage.css';


const CarteInteractivePage = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [selectedLayer, setSelectedLayer] = useState('OpenStreetMap');
  const [installations, setInstallations] = useState([
    { id: 1, name: 'Installation A', lat: 11.6233, lng: 43.0262, status: 'Active' },
    { id: 2, name: 'Installation B', lat: 11.6300, lng: 43.0200, status: 'Under Maintenance' },
  ]);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([11.5848, 43.1448], 13);
      const layers = getLayers();
      layers[selectedLayer].addTo(mapRef.current);

      installations.forEach(installation => {
        const marker = L.marker([installation.lat, installation.lng]).addTo(mapRef.current);
        marker.bindPopup(`<b>${installation.name}</b><br>Status: ${installation.status}`);
        marker.on('click', () => handleMarkerClick(installation));
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [installations]);

  const getLayers = () => ({
    'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }),
    'Satellite': L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      attribution: '&copy; Google',
    }),
    'Traffic': L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}', {
      attribution: '&copy; Google',
    }),
  });

  const handleLayerChange = (layerName) => {
    setSelectedLayer(layerName);
    if (mapRef.current) {
      mapRef.current.eachLayer(layer => mapRef.current.removeLayer(layer));
      const layers = getLayers();
      layers[layerName].addTo(mapRef.current);
    }
  };

  const handleMarkerClick = (installation) => {
    alert(`Selected installation: ${installation.name}`);
  };

  return (
    <div className="carte-interactive-page">
      <header className="page-header">
        <h1>Carte des Installations</h1>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher une installation" className="search-input" />
          <button className="search-button">Rechercher</button>
        </div>
      </header>

      <div className="map-container" ref={mapContainerRef} id="map"></div>

      <div className="filter-panel">
        <h3>Filtres</h3>
        <select>
          <option>Type d'installation</option>
          <option>camp</option>
          <option> zone securite </option>
          <option> zone  mission </option>
        
        </select>
        <select>
          <option>Statut</option>
          <option>Actif</option>
          <option>En maintenance</option>
        </select>
        <h3>Couches</h3>
        <div className="layer-toggle">
          <label>
            <input type="radio" name="layer" onChange={() => handleLayerChange('OpenStreetMap')} checked={selectedLayer === 'OpenStreetMap'} />
            OpenStreetMap
          </label>
          <label>
            <input type="radio" name="layer" onChange={() => handleLayerChange('Satellite')} checked={selectedLayer === 'Satellite'} />
            Satellite
          </label>
          <label>
            <input type="radio" name="layer" onChange={() => handleLayerChange('Traffic')} checked={selectedLayer === 'Traffic'} />
            Trafic Routier
          </label>
        </div>
      </div>

      <div className="info-panel">
        <h3>Informations sur les Installations</h3>
        <ul>
          {installations.map((inst) => (
            <li key={inst.id} onClick={() => handleMarkerClick(inst)}>
              {inst.name} - {inst.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarteInteractivePage;
