import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import accountReducer from './slices/accountSlice';
export default configureStore({
    reducer: {
        movie: movieReducer,
        account: accountReducer
    }
});