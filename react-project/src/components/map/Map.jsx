import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Temp from './Temp';
import Autosuggest from 'react-autosuggest';
import MapCenter from './MapCenter'; // Import the new MapCenter component
import "./Map.css";

// Optional: Fix default icon issues for Leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
});

function ClickHandler({ addMarker }) {
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
        const city = response.data.features[0].properties.city;
        const country = response.data.features[0].properties.country;
        console.log(city);
        console.log(country);
        const mapLocation = `${city}, ${country}`;
        addMarker({ latlng: e.latlng, location: mapLocation, description: '' }); // Add description field
      } catch (error) {
        console.error('Error fetching location name:', error);
        console.log('Error fetching location name');
      }
    }
  });
}

function Map() {
  const [markerPositions, setMarkerPositions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null); // State for the selected position
  

  const addMarker = (marker) => {
    setMarkerPositions(prevPositions => [...prevPositions, marker]);
    setSelectedPosition(marker.latlng); // Update the selected position when a new marker is added
  };

  const updateMarkerDescription = (index, description) => {
    setMarkerPositions(prevPositions => 
      prevPositions.map((marker, i) => 
        i === index ? { ...marker, description } : marker
      )
    );
  };

  useEffect(() => {
    console.log('Marker Positions:', markerPositions);
  }, [markerPositions]);

  const handleSearch = async () => {
    const apiKey = '6b8d47b612af42cb87b8d4eb9196c220';
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchQuery)}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      console.log(response.data.features[0]);
      const result = response.data.features[0];
      const lat = result.properties.lat;
      const lon = result.properties.lon;

      const city = result.properties.city;
      const country = result.properties.country;
      const mapLocation = `${city}, ${country}`;
      console.log(city);
      console.log(country);
      console.log(lat);
      console.log(lon);
      addMarker({ latlng: { lat, lng: lon }, location: mapLocation, description: '' }); // Add description field
    } catch (error) {
      console.error('Error fetching geocode:', error);
    }
  };

  const getSuggestions = async (value) => {
    const apiKey = '6b8d47b612af42cb87b8d4eb9196c220';
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(value)}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      return response.data.features.map(feature => ({
        name: feature.properties.formatted,
        lat: feature.properties.lat,
        lon: feature.properties.lon,
        city: feature.properties.city,
        country: feature.properties.country
      }));
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return [];
    }
  };

  const onSuggestionsFetchRequested = async ({ value }) => {
    const suggestions = await getSuggestions(value);
    setSuggestions(suggestions);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.name}
    </div>
  );

  const onSuggestionSelected = (event, { suggestion }) => {
    setSearchQuery(suggestion.name);
  };

  const inputProps = {
    placeholder: "Search for a location",
    value: searchQuery,
    onChange: (e, { newValue }) => setSearchQuery(newValue)
  };

  return (
    <div>
      
      <div className="search-bar ">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          inputProps={inputProps}
          theme={{
            container: 'autosuggest__container',
            input: 'autosuggest__input',
            suggestionsContainer: 'autosuggest__suggestions-container',
            suggestion: 'autosuggest__suggestion',
            suggestionHighlighted: 'autosuggest__suggestion--highlighted'
          }}
        />
        <button onClick={handleSearch} style={{width:"300px"}}><b>Search</b></button>
      </div>
      
      <MapContainer className='mapContainer' center={[51.505, -0.09]} zoom={13} style={{ height: '80vh', width: '50%' }}>
        <TileLayer className='mapImage'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ClickHandler addMarker={addMarker} />
        {selectedPosition && <MapCenter position={selectedPosition} />} {/* Use the MapCenter component to update the map view */}
        {markerPositions.map((marker, index) => (
          <Marker key={index} position={marker.latlng}>
            <Popup>
              <div>
                {/* <p>{marker.location}</p> */}
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Temp markerPositions={markerPositions} setMarkerPositions={setMarkerPositions} updateMarkerDescription={updateMarkerDescription} />
    </div>
  );
}

export default Map;





















