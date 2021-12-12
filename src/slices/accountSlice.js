import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const queryProfile = createAsyncThunk (
    'profile/queryProfile',
    async (thunkAPI) => {
        const userId = localStorage.getItem('maimiao-user-id');
        const res = await axios.get(`http://localhost:5000/user/${userId}/profile`);
        return res.data;
    }
);

export const accountSlice = createSlice ({
    name: 'account',
    initialState: {
        profile: {},
        isLoggedIn: false,
        loading: false,
    },

    reducers: {
        updateLoginStatus: (state, {payload}) => {
            state.isLoggedIn = payload;
        }
    },

    extraReducers: {
       [queryProfile.pending]: (state) => {
           state.loading = true;
       },
       [queryProfile.fulfilled]: (state, {payload}) => {
           state.loading = false;
           state.profile = payload;
       },
       [queryProfile.rejected]: (state) => {
           state.loading = false;
       },
    }
})
export const {
    updateLoginStatus
} = accountSlice.actions;

export default accountSlice.reducer;