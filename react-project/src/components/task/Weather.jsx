import React, { useState } from "react";
import axios from "axios";

import "/src/assets/styles/App.css";

function Weather()
 {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_key= "7b7a1fd1a2393baefd0f715e43619233"; 
  const fetchWeatherData = async () => {
     
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
      );
      setWeatherData(response.data);
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
   <>
   
   <section className="page-section" id="contact">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5">Find Today's Weather</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fa-solid fa-cloud-sun-rain"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        
                        <form onSubmit={handleSubmit} id="contactForm" data-sb-form-api-token="API_TOKEN">
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter Your City Name" onChange={(event) => setCity(event.target.value)} value={city}  data-sb-validations="required" />
                                <label htmlfor="name">Enter City Name </label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">City Name is required.</div>
                            </div>
                            
                           
                            
                            
                            
                           
                           
                            <button className="btn btn-primary btn-xl " id="submitButton" type="submit">Get Weather</button>
                        </form>

                        {weatherData && (
        <div>
          {console.log(weatherData)}
          <h2>{weatherData.name}</h2>
          <b>Temperature: {Math.floor(weatherData.main.temp-273)} &deg;C</b>
          <div>Humidity: {weatherData.main.humidity}</div>
          <div>Description:  {weatherData.weather[0].description}</div>
        </div>
      )}
                    </div>
                </div>
            </div>
        </section>
        
    
    
    </>
  );
};

export default Weather;
