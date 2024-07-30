
import React, { useState, useEffect } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './SearchBox.css';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: 1,
};

export default function SearchBox(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);



  useEffect(() => {
    if (searchText.length > 2 && !selectedPlace) {
      const params = {
        q: searchText,
        format: "json",
        addressdetails: 1,
        polygon_geojson: 0,
      };
      const queryString = new URLSearchParams(params).toString();
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log("check", requestOptions);
          console.log("check1",JSON.parse(result));
          setListPlace(JSON.parse(result));
        })
        .catch((err) => console.log("err: ", err));
    } else {
      setListPlace([]);
    }

    console.log("set3",searchText);
    console.log("set2",selectPosition);
    console.log("set1",selectedPlace?.lat);
  }, [searchText, selectedPlace]);

  return (
    <div className="search-box">
      <div className="search-box-input-container">
        <div className="search-box-input">
          <OutlinedInput
            className="cityInput"
            value={searchText}
            placeholder="Enter the Name of Location"
            onChange={(event) => {
              setSearchText(event.target.value);
              setSelectedPlace(null);
            }}
          />
        </div>
        <div className="search-box-button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              if (selectedPlace) {
                setSelectPosition(selectedPlace);
              }
            }}
          >
            Search
          </Button>
        </div>
      </div>
      {listPlace.length > 0 && (
        <div className="search-box-list">
          <List component="nav" aria-label="main mailbox folders">
            {listPlace.map((item) => {
              return (
                <div key={item?.place_id}>
                  <ListItem  onClick={() => {
                      setSearchText(item.display_name);
                      setSelectedPlace(item);
                      setListPlace([]);  // Clear the list after selection
                    }}
                  >  
                  
                    <ListItemIcon className="search-box-list-item-icon">
                      <img
                        src="/src/components/task/marker.png"
                        alt="Placeholder"
                      />
                    </ListItemIcon>
                    <ListItemText  primary={item?.display_name} />
                    
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      )}
    </div>
  );
}