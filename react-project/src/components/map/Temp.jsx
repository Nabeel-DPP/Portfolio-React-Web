
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import RoomIcon from '@mui/icons-material/Room';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setWeatherData,setPopUp, deleteMarkerWeather } from '../../redux/weatherSlice';

import {  updateMarkerDescription, deleteMarker } from '../../redux/mapSlice';
import "./Temp.css";

function Temp({ markerPositions }) {
  const dispatch = useDispatch();
  const { weatherData, popUp } = useSelector(state => state.weather);

  const handleGetWeather = async (index, lat, lng) => {
    const apiKey = '7b7a1fd1a2393baefd0f715e43619233';
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`);
    dispatch(setWeatherData({ index, data: response.data }));
  };

  const handleDelete = (index) => {
    dispatch(deleteMarker(index));
    dispatch(deleteMarkerWeather(index));
    dispatch(updateMarkerDescription({ index, description: '' }));
  };

  const handlePop = (index, event) => {
    dispatch(setPopUp({ index, value: event.target.value }));
  };

  const savePopUp = (index) => {
    const description = popUp[index];
    dispatch(updateMarkerDescription({ index, description }));
  };

  return (
    <div>
      {markerPositions.length > 0 && <h2 style={{ textAlign: "center" }}>Mark Locations List</h2>}
      

      <ul className="cardListParent">
        {markerPositions.map((marker, index) => (
          <li key={index} style={{ listStyle: "none" }} className="cardList">
            <Card className="infoCard mb-5 mt-5">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h3>{marker.location}</h3>
                  

                </Typography>
              </CardContent>
              <CardActions>
              {console.log ("From Tesx Box Longittude is : ",marker.latlng.lng)}
                <TextField id="outlined-basic" label="Latitude" value={marker.latlng.lat} variant="outlined" />
                <TextField id="outlined-basic" label="Longitude" value={marker.latlng.lng} variant="outlined" />
                <TextField id="outlined-basic" label="Pop-Up" value={popUp[index] || ''} onChange={(e) => handlePop(index, e)} variant="outlined" />
                <Button variant="contained" style={{ height: "55px" }} onClick={() => savePopUp(index)}>
                  <RoomIcon />
                </Button>
                <Button style={{ width: "200px", height: "55px" }} type="button" variant="contained" onClick={() => handleGetWeather(index, marker.latlng.lat, marker.latlng.lng)}>
                  <b> Get Weather</b>
                </Button>
                <Button variant="contained" style={{ height: "55px" }} color="error" onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </Button>
              </CardActions>
            </Card>

            {weatherData[index] && (
              <Card className="tempCard">
                <CardMedia sx={{ height: 140 }} image="/public/temp.jpg" title="Temperature Pic" />
                <CardContent className="tempCardInfo">
                  <Typography gutterBottom variant="h3" component="div">
                    {weatherData[index].main.temp}°C
                  </Typography>
                  <Typography gutterBottom variant="h4" component="div">
                    {weatherData[index].name}
                  </Typography>
                  <Typography variant="h5">
                    {weatherData[index].weather[0].description}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </li>
        ))}
      </ul>
      {markerPositions.length > 1 && (
        <Button className="mb-5 btnAll" variant="contained" onClick={() => markerPositions.forEach((marker, index) => handleGetWeather(index, marker.latlng.lat, marker.latlng.lng))}>
          Get Weather for All
        </Button>
      )}
    </div>
  );
}

export default Temp;
