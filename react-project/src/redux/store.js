import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './mapSlice';
import weatherReducer from './weatherSlice';

const store = configureStore({
  reducer: {
    map: mapReducer,
    weather: weatherReducer,
  },
});

export default store;
