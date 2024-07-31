// MapCenter.jsx
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

function MapCenter({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
    }
  }, [position, map]);

  return null;
}

export default MapCenter;
