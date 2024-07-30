import { useState } from "react";
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function Temp({ markerPositions, setMarkerPositions }) {


  const [weatherData, setWeatherData] = useState({});

  
  
  
  const getWeather = async (index, lat, lng) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat,
          lon: lng,
          appid: '7b7a1fd1a2393baefd0f715e43619233', // Replace with your OpenWeather API key
          units: 'metric'
        }
      });
      setWeatherData(prevData => ({ ...prevData, [index]: response.data }));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getWeatherForAll = async () => {
    const allWeatherData = {};
    try {
      for (let i = 0; i < markerPositions.length; i++) {
        const { latlng } = markerPositions[i];
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat: latlng.lat,
            lon: latlng.lng,
            appid: '7b7a1fd1a2393baefd0f715e43619233', // Replace with your OpenWeather API key
            units: 'metric'
          }
        });
        allWeatherData[i] = response.data;
      }
      setWeatherData(allWeatherData);
    } catch (error) {
      console.error('Error fetching weather data for all locations:', error);
    }
  };

  const handleDelete = (index) => {
    setMarkerPositions(prevPositions => prevPositions.filter((_, i) => i !== index));
    setWeatherData(prevData => {
      const newData = { ...prevData };
      delete newData[index];
      return newData;
    });
  };

  return (
    <div>
        {markerPositions.length>0 && (<h2 style={{marginLeft:"42px"}}>Mark Locations List</h2>)}
      
      <ul>
        {markerPositions.map((marker, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <Card sx={{ maxWidth: 600 }}  >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {marker.location}
                </Typography>
              </CardContent>
              <CardActions>
                <TextField id="outlined-basic" label="Latitude"  value={marker.latlng.lat} variant="outlined" />
                <TextField id="outlined-basic" label="Longitude" value={marker.latlng.lng} variant="outlined" />
                <Button style={{ width:"200px" }}
                  type="button"
                  variant="contained"
                  onClick={() => getWeather(index, marker.latlng.lat, marker.latlng.lng)}
                >
                  Get Weather
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon />
                </Button>
              </CardActions>
            </Card>

            {weatherData[index] && (
              <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {weatherData[index].main.temp}°C
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {weatherData[index].name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {weatherData[index].weather[0].description}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </li>
        ))}
      </ul>
      {markerPositions.length > 0 && (
        <Button className="mb-5"
          variant="contained"
          onClick={getWeatherForAll}
          style={{ marginTop: '20px',marginLeft: '42px' }}
        >
          Get Weather for All
        </Button>
      )}
    </div>
  );
}

export default Temp;

