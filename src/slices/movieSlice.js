import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOnShowingMovies = createAsyncThunk (
    'movie/fetchOnShowing',
    async (thunkAPI) => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        return res.data.results;
    }
);

export const fetchPopularMovies = createAsyncThunk (
    'movie/fetchPopular',
    async (thunkAPI) => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        return res.data.results;
    }
);

export const fetchTopRateMovies = createAsyncThunk (
    'movie/fetchTopRate',
    async (thunkAPI) => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        return res.data.results;
    }
);

export const fetchLatestMovies = createAsyncThunk (
    'movie/fetchLatest',
    async (thunkAPI) => {
        const url = `https://api.themoviedb.org/3/movie/latest?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`; 
        const res = await axios.get(url);
        return res.data.results;
    }
)

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        loading: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchOnShowingMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchOnShowingMovies.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.movies = payload;
        },
        [fetchOnShowingMovies.rejected]: (state) => {
            state.loading = false;
        },
        [fetchPopularMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchPopularMovies.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.movies = payload;
        },
        [fetchPopularMovies.rejected]: (state) => {
            state.loading = false;
        },
        [fetchTopRateMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchTopRateMovies.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.movies = payload;
        },
        [fetchTopRateMovies.rejected]: (state) => {
            state.loading = false;
        },
        [fetchLatestMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchLatestMovies.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.movies = payload;
        },
        [fetchLatestMovies.rejected]: (state) => {
            state.loading = false;
        },

    },

});
export default movieSlice.reducer;