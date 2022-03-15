import { configureStore } from "@reduxjs/toolkit";
import mapReducer from './mapSlice';
import wifiReducer from './wifiSlice.js';

export default configureStore({
    reducer: {
        map: mapReducer,
        wifi: wifiReducer,
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: false,
    })
});