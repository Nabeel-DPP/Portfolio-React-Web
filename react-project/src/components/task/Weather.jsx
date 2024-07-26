//Updated Weather File
import React, { useState  } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import "./Weather.css";
function Weather(  ) {
  const [selectPosition, setSelectPosition] = useState(null);
  const [weather ,setWeather]=useState(null);
  const API_url="https://api.openweathermap.org/data/2.5/weather";
  
  const Lat= selectPosition?.lat;
  const Lon =selectPosition?.lon;
  const API_key="7b7a1fd1a2393baefd0f715e43619233";
    
  let getWeather= async ()=>
  { 
    try {
      const response = await fetch(`${API_url}?lat=${Lat}&lon=${Lon}&appid=${API_key}`);
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
   

  }
  let handleSubmit = (e)=>
  {
    e.preventDefault();
    getWeather();
  }
 
    return (
      <div>
    <div className="app-container">
    

      
      <div className="app-maps-container">
        <Maps selectPosition={selectPosition} />
        
      </div>
      
      <div className="app-searchbox-container">
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
      </div>
      
    </div>
  
    <div className="cords mb-5">
      <form onSubmit={handleSubmit} className="cordsVal">
      
      <TextField id="outlined-basic" value={Math.floor(selectPosition?.lat)} label="Latitude"  variant="outlined" />
      
     
     <TextField id="outlined-basic" value={Math.floor(selectPosition?.lon)} label="Longitude" variant="outlined" />
     
     
      <Button variant="contained"
            color="primary" type="submit">Find Weather</Button>
     
    </form>
    </div>
    {weather && 
    <Card sx={{ maxWidth: 345 }} className="weatherCard">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/src/components/task/temp.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {weather.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {Math.floor(weather.main.temp - 273) }&deg;C
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {weather.weather[0].description}
        </Typography>
      </CardContent>
      
    </Card>
    }
    </div>
  );
}

export default Weather;