//Updated Weather File
import React, { useState  } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";

import "./Weather.css";
function Weather(  ) {
  const [selectPosition, setSelectPosition] = useState(null);
  
  
    return (
    <div className="app-container">
    

      
      <div className="app-maps-container">
        <Maps selectPosition={selectPosition} />
        
      </div>
      <div className="app-searchbox-container">
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
      </div>
    </div>
  );
}

export default Weather;
