import { useState } from 'react';
import FavoritesContext from './FavoritesContext';

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
