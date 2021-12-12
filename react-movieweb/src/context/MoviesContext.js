import React from "react";

const MoviesContext = React.createContext({
    movie: '',
    updateMovie: (movie) => {
        this.movie = movie;
    }
});
const MoviesContextProvider = MoviesContext.Provider;
export{
    MoviesContext,
    MoviesContextProvider
};