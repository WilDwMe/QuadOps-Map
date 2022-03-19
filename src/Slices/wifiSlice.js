import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWifiPoints = createAsyncThunk(
    'wifi/fetchPoints',
    async() => {
        const response = await axios.get('http://yombox.ru/data/assoc.geojson');
        return response;
    }
);

const initialState = ({ loading: 'idle', error: null });

const wifiSlice = createSlice({
    name: 'wifiPoints',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWifiPoints.fulfilled, (state, { payload }) => {
                state.features = payload.data.features;
                state.loading = 'loaded';
            })
            .addCase(fetchWifiPoints.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(fetchWifiPoints.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = null;
            })
    }
});

export default wifiSlice.reducer;
