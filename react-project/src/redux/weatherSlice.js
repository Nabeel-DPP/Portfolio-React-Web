import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: {},
  popUp: {},
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setPopUp(state, action) {
      const { index, value } = action.payload;
      state.popUp[index] = value;
    },
    setWeatherData(state, action) {
      const { index, data } = action.payload;
      state.weatherData[index] = data;
    },
    deleteMarkerWeather(state, action) {
      const index = action.payload;
      delete state.weatherData[index];
      delete state.popUp[index];
    },
  },
});

export const {setPopUp, setWeatherData, deleteMarkerWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
