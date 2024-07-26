import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


import L from "leaflet";
import './Maps.css';

const icon = L.icon({
  iconUrl:"/src/components/task/marker.png",
  iconSize: [35, 30],
});

const position = [51.505, -0.09];

function ResetCenterView(props) {
  const { selectPosition } = props;
  console.log("position",selectPosition);
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      console.log("abc",selectPosition.lat)
      console.log("abc",selectPosition.lon)
      map.flyTo(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);

  return null;
}

export default function Maps(props) {
  
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  
  return (
    
    <MapContainer
      center={position}
      zoom={8}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=sWbpnbtC7J7VAwX9y49j"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          It's Default Location
        </Popup>
      </Marker>
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            It's Your Selected Location
          </Popup>
        </Marker>
      )}
      
      <ResetCenterView selectPosition={selectPosition} />

    
    </MapContainer>
    
    

    
  );
}