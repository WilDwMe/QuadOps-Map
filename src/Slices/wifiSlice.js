import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWifiPoints = createAsyncThunk(
    'wifi/fetchPoints',
    async() => {
        const response = await axios.get('http://yombox.ru/assoc.geojson');
        return response;
    }
);

// const wifiAdapter = createEntityAdapter();
const initialState = ({ loading: 'idle', error: null });

const wifiSlice = createSlice({
    name: 'wifiPoints',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWifiPoints.fulfilled, (state, { payload }) => {
                // // console.log(payload.data)
                // const features = payload.data.features;
                // const data = );

                // wifiAdapter.addMany(state, features.map((item) => ({ id: item.properties.mob, ...item })));
                state.features = payload.data.features;
                // state.ids = Object.keys(payload.data.features);
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

// export const selectors = wifiAdapter.getSelectors((state) => state.wifi);
export default wifiSlice.reducer;
