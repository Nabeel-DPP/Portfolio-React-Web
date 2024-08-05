import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapCenter from './MapCenter';
import { useDispatch, useSelector } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import Temp from './Temp';
import { setSearchQuery, setSelectedPosition, setSuggestions, addMarkerPosition } from '../../redux/mapSlice';
import "./Map.css";

// Optional: Fix default icon issues for Leaflet
import L, { latLng } from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
});

function ClickHandler() {
  const dispatch = useDispatch();
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng
      console.log("This is Click Result",lng);
      const apiKey = '6b8d47b612af42cb87b8d4eb9196c220';
      const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`);
      const location = `${response.data.features[0].properties.city}, ${response.data.features[0].properties.country}`;
      console.log("Location by Click is ",location);
      dispatch(addMarkerPosition({ latlng : {lat , lng}, location, description: '' }));
    }
  });
  return null;
}

function Map() {
  const dispatch = useDispatch();
  const { markerPositions, searchQuery, suggestions, selectedPosition } = useSelector(state => state.map);

  useEffect(() => {
    console.log('Marker Positions:', markerPositions);
  }, [markerPositions]);

  const handleSearch = async () => {
    const apiKey = '6b8d47b612af42cb87b8d4eb9196c220';
    const response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchQuery)}&apiKey=${apiKey}`);
    const result = response.data.features[0];
    console.log(result);
    
    const lat = result.properties.lat;
    const lng = result.properties.lon;
    const city = result.properties.city;
    const country = result.properties.country;
    const mapLocation = `${city}, ${country}`;
    dispatch(addMarkerPosition({ latlng: { lat, lng }, location: mapLocation, description: '' }));
  };

  const getSuggestions = async (value) => {
    const apiKey = '6b8d47b612af42cb87b8d4eb9196c220';
    const response = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(value)}&apiKey=${apiKey}`);
    return response.data.features.map(feature => ({
      name: feature.properties.formatted,
      lat: feature.properties.lat,
      lon: feature.properties.lon,
      city: feature.properties.city,
      country: feature.properties.country,
    }));
  };

  const onSuggestionsFetchRequested = async ({ value }) => {
    const suggestions = await getSuggestions(value);
    dispatch(setSuggestions(suggestions));
  };

  const onSuggestionsClearRequested = () => {
    dispatch(setSuggestions([]));
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div>{suggestion.name}</div>
  );

  // const onSuggestionSelected = (event, { suggestion }) => {
  //   dispatch(setSearchQuery(suggestion.name));
  //   dispatch(addMarkerPosition({ latlng: { lat: suggestion.lat, lon: suggestion.lon }, location: suggestion.name, description: '' }));
  // };

  const inputProps = {
    placeholder: "Search for a location",
    value: searchQuery,
    onChange: (e, { newValue }) => dispatch(setSearchQuery(newValue))
  };

  return (
    <div>
      <div className="search-bar">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          // onSuggestionSelected={onSuggestionSelected}
          inputProps={inputProps}
          theme={{
            container: 'autosuggest__container',
            input: 'autosuggest__input',
            suggestionsContainer: 'autosuggest__suggestions-container',
            suggestion: 'autosuggest__suggestion',
            suggestionHighlighted: 'autosuggest__suggestion--highlighted'
          }}
        />
        <button onClick={handleSearch} style={{ width: "300px" }}><b>Search</b></button>
      </div>

      <MapContainer className='mapContainer' center={[51.505, -0.09]} zoom={13} style={{ height: '80vh', width: '50%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickHandler />
        {selectedPosition && <MapCenter position={selectedPosition} />}
        {markerPositions.map((marker, index) => (
          <Marker key={index} position={marker.latlng}>
            <Popup>
              <div>
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Temp markerPositions={markerPositions} />
    </div>
  );
}

export default Map;
