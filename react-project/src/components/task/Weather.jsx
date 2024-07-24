// import React, { useState } from "react";
// import axios from "axios";

// import "/src/assets/styles/App.css";

// function Weather()
//  {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const API_key= "7b7a1fd1a2393baefd0f715e43619233"; 
//   const fetchWeatherData = async () => {
     
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
//       );
//       setWeatherData(response.data);
    
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//    <>
   
//    <section className="page-section" id="contact">
//             <div className="container">
                
//                 <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5">Find Today's Weather</h2>
                
//                 <div className="divider-custom">
//                     <div className="divider-custom-line"></div>
//                     <div className="divider-custom-icon"><i className="fa-solid fa-cloud-sun-rain"></i></div>
//                     <div className="divider-custom-line"></div>
//                 </div>
//                 <div className="row justify-content-center">
//                     <div className="col-lg-8 col-xl-7">
                        
//                         <form onSubmit={handleSubmit} id="contactForm" data-sb-form-api-token="API_TOKEN">
                            
//                             <div className="form-floating mb-3">
//                                 <input className="form-control" id="name" type="text" placeholder="Enter Your City Name" onChange={(event) => setCity(event.target.value)} value={city}  data-sb-validations="required" />
//                                 <label htmlfor="name">Enter City Name </label>
//                                 <div className="invalid-feedback" data-sb-feedback="name:required">City Name is required.</div>
//                             </div>
                            
                           
                            
                            
                            
                           
                           
//                             <button className="btn btn-primary btn-xl " id="submitButton" type="submit">Get Weather</button>
//                         </form>

//                         {weatherData && (
//         <div>
//           {console.log(weatherData)}
//           <h2>{weatherData.name}</h2>
//           <b>Temperature: {Math.floor(weatherData.main.temp-273)} &deg;C</b>
//           <div>Humidity: {weatherData.main.humidity}</div>
//           <div>Description:  {weatherData.weather[0].description}</div>
//         </div>
//       ) }

              

//                     </div>
//                 </div>
//             </div>
//         </section>
        
    
    
//     </>
//   );
// };

// export default Weather;


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from "axios";

// Fix for the default marker icon not being displayed
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const App = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [location, setLocation] = useState('');
  const [map, setMap] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "7b7a1fd1a2393baefd0f715e43619233";

  const handleSearch = async () => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
    );
    const data = await response.json();
    console.log('Search data:', data);

    if (data.length > 0) {
      const { lat, lon } = data[0];
      setLat(lat);
      setLon(lon);
      const newPosition = [parseFloat(lat), parseFloat(lon)];
      setPosition(newPosition);
      
      console.log('map:', map);
      if (map) {
        // Center the map and keep marker in center on position update
        console.log('Center map to:', newPosition);
        map.setView(newPosition, 13);
        // Use flyTo for smooth transition
      }
    } else {
      alert("Location not found");
    }
  };

  // Effect to center the map on initial render and position updates
  useEffect(() => {
    console.log('useEffect triggered:', { map, position });
    if (map && position.length > 0) {
      console.log('Centering map in useEffect:', position);
      map.flyTo(position, 13); // Use flyTo for smooth transition
    }
  }, [map, position]);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      setWeather(response.data);
      console.log('Weather data:', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <div className='locSearch'>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MapContainer
        center={position} // Initially set center to position state
        zoom={13}
        style={{ width: '100%', height: '400px' }}
        whenCreated={setMap}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </MapContainer>
      <form onSubmit={handleSubmit}>
        Latitude: <input type="number" value={lat} readOnly /> <br />
        Longitude: <input type="number" value={lon} readOnly />
        <br />
        <button type='submit'>Get Weather</button>
      </form>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <b>Temperature: {Math.floor(weather.main.temp - 273)} &deg;C</b>
          <div>Humidity: {weather.main.humidity}</div>
          <div>Description: {weather.weather[0].description}</div>
        </div>
      )}
    </div>
  );
};

export default App;
