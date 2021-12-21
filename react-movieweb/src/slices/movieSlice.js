import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchOnShowingMovies = createAsyncThunk (
    'movie/fetchOnShowing',
    async (thunkAPI) => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        return res.data.results;
    }
);

export const fetchOnPopularMovies = createAsyncThunk (
    'movie/fetchOnPopular',
    async (thunkAPI) => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        return res.data.results;
    }
);

export const fetchOnLatestMovies = createAsyncThunk (
    'movie/fetchOnLatest',
    async (thunkAPI) => {
        const url = `https://api.themoviedb.org/3/movie/latest?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        return res.data.results;
    }
);

export const fetchOnTopRateMovies = createAsyncThunk (
    'movie/fetchOnTopRate',
    async (thunkAPI) => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        return res.data.results;
    }
);

export const movieSlice = createSlice ({
    name: 'movie',
    initialState: {
        movies: [],
        loadig: false,
    },
    reducers: {
    },
    extraReducers: {
        [fetchOnShowingMovies.pending]: (state) => {
            state.loadig = true;
        },
        [fetchOnShowingMovies.fulfilled]: (state, { payload }) => {
            state.loadig = false;
            state.movies = payload;  
        },
        [fetchOnShowingMovies.rejected]: (state) => {
            state.loadig = false;
        },

        [fetchOnPopularMovies.pending]: (state) => {
            state.loadig = true;
        },
        [fetchOnPopularMovies.fulfilled]: (state, { payload }) => {
            state.loadig = false;
            state.movies = payload;  
        },
        [fetchOnPopularMovies.rejected]: (state) => {
            state.loadig = false;
        },

        [fetchOnLatestMovies.pending]: (state) => {
            state.loadig = true;
        },
        [fetchOnLatestMovies.fulfilled]: (state, { payload }) => {
            state.loadig = false;
            state.movies = payload;  
        },
        [fetchOnLatestMovies.rejected]: (state) => {
            state.loadig = false;
        },

        [fetchOnTopRateMovies.pending]: (state) => {
            state.loadig = true;
        },
        [fetchOnTopRateMovies.fulfilled]: (state, { payload }) => {
            state.loadig = false;
            state.movies = payload;  
        },
        [fetchOnTopRateMovies.rejected]: (state) => {
            state.loadig = false;
        },
    }
})

export default movieSlice.reducer;