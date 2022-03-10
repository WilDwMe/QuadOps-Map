import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clusters: true
};

const mapSlice = createSlice({
    name: 'mapUi',
    initialState,
    reducers: {
        clusters: (state) => {
            state.clusters = !state.clusters;
        }
    }
});

export const { clusters } = mapSlice.actions;
export default mapSlice.reducer;