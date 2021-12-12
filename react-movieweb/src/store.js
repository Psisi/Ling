import { configureStore } from '@reduxjs/toolkit';
import accountReducer  from './slices/accountSlice';
import movieReducer  from './slices/movieSlice';

export default configureStore ({
    reducer: {
        movie: movieReducer,
        account: accountReducer
    }
});