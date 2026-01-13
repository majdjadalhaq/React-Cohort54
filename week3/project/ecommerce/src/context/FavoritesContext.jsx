import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favoriteIds, setFavoriteIds] = useState([]);

    const toggleFavorite = (id) => {
        setFavoriteIds((prevIds) => {
            if (prevIds.includes(id)) {
                return prevIds.filter((favId) => favId !== id);
            } else {
                return [...prevIds, id];
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
