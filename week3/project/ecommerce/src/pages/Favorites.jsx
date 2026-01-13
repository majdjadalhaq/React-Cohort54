import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import ProductList from '../components/ProductList';

const Favorites = () => {
    const { favoriteIds } = useFavorites();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false); // Can be true initially if we fetch immediately
    // But if favoriteIds is empty, we don't fetch.

    useEffect(() => {
        if (favoriteIds.length === 0) {
            setFavorites([]);
            return;
        }

        const fetchFavorites = async () => {
            setLoading(true);
            try {
                const promises = favoriteIds.map((id) =>
                    fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
                );
                const results = await Promise.all(promises);
                setFavorites(results);
            } catch (error) {
                console.error("Failed to fetch favorites", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [favoriteIds]);

    if (loading) return <div>Loading favorites...</div>;
    if (favorites.length === 0) return <div>No favorites yet.</div>;

    return (
        <div className="favorites-page">
            <h1>Your Favorites</h1>
            <ProductList products={favorites} />
        </div>
    );
};

export default Favorites;
