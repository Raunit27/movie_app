import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData: [],
    imageURl: ""
}

export const movioSlice = createSlice({
    name: "movieo",
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload
        },

        setImageURl: (state, action) => {
            state.imageURl = action.payload
        },

    },
});

export const { setBannerData,setImageURl } = movioSlice.actions

export default movioSlice.reducer
