import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

//this context will be used to manage the state of components that are wrapped around it.
export const MovieProvider = ( {children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        } 
    }, []);
    

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    
    const addToFavorites = (movie) => {
        if (!favorites.some((fav) => fav.id === movie.id)) {
            setFavorites((prev) => [...prev, movie]);
        }
    }
    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((fav) => fav.id !== movieId));
    }
    const isFavorite = (movieId) => {
        return favorites.some((fav) => fav.id === movieId);
    }
    
    const value = {
        favorites,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    
    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>)
}