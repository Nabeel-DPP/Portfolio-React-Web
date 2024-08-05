
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  markerPositions: [],
  searchQuery: '',
  suggestions: [],
  selectedPosition: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSelectedPosition(state, action) {
      state.selectedPosition = action.payload;
    },
    setSuggestions(state, action) {
      state.suggestions = action.payload;
    },
    addMarkerPosition(state, action) {
      console.log("add method Call");
      console.log(action.payload);
      // state.markerPositions.push(action.payload);

      state.markerPositions= [...state.markerPositions, action.payload];

      // Return the updated state
      
    
      console.log(state.markerPositions);
      state.selectedPosition = action.payload.latlng;
      console.log(state.selectedPosition);
    },
    updateMarkerDescription(state, action) {
      const { index, description } = action.payload;
      state.markerPositions[index].description = description;
    },
    deleteMarker(state, action) {
      state.markerPositions.splice(action.payload, 1);
    },
  },
});

export const {
  setSearchQuery,
  setSelectedPosition,
  setSuggestions,
  addMarkerPosition,
  
  updateMarkerDescription,
  deleteMarker,
} = mapSlice.actions;

export default mapSlice.reducer;
