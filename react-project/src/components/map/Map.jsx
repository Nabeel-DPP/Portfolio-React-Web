import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Temp from './Temp';
import "./Map.css";


// Optional: Fix default icon issues for Leaflet
import L, { map } from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
});

function ClickHandler({ addMarker }) 
{

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      console.log('Map clicked at:', e.latlng);

      // Fetch the city name using Geopify Geocoding API
      const apiKey = '6b8d47b612af42cb87b8d4eb9196c220';
      const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`;

      try {
        const response = await axios.get(url);
        
        console.log(response.data.features);
        const city=response.data.features[0].properties.city;
        const country=response.data.features[0].properties.country;
        console.log(city);
        console.log(country);
        const mapLocation= `${city}, ${country}`;
        addMarker({ latlng: e.latlng, location: mapLocation});
      } catch (error) {
        console.error('Error fetching location name:', error);
        console.log('Error fetching location name');
      }
    }
  });

}


function Map() {
  const [markerPositions, setMarkerPositions] = useState([]);

  const addMarker = (marker) => {
    setMarkerPositions(prevPositions => [...prevPositions, marker]);
  };
  useEffect(() => {
    console.log('Marker Positions:', markerPositions);
  }, [markerPositions]);

  return (
    <div className='map-box'>
    <MapContainer  center={[51.505, -0.09]} zoom={13} style={{ height: '80vh', width: '100%' }}>
      <TileLayer className='mapImage'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ClickHandler addMarker={addMarker} />
      {markerPositions.map((marker, index) => (
        <Marker key={index} position={marker.latlng}>
          <Popup>
            Your Pin Location is {marker.location}
          </Popup>
         </Marker>
      ))}
     
    </MapContainer>
    
    <Temp  markerPositions={markerPositions} setMarkerPositions={setMarkerPositions}/>
   
    </div>

  );
}

export default Map;
