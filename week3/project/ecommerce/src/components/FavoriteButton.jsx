import { useFavorites } from '../context/FavoritesContext';
import heartSolid from '../assets/heart-solid.svg';
import heartRegular from '../assets/heart-regular.svg';

const FavoriteButton = ({ productId, style }) => {
    const { favoriteIds, toggleFavorite } = useFavorites();
    const isFavorite = favoriteIds.includes(productId);

    const handleFavoriteClick = (e) => {
        e.preventDefault(); // Prevent link navigation if inside a link
        e.stopPropagation(); // Stop event bubbling
        toggleFavorite(productId);
    };

    return (
        <button
            onClick={handleFavoriteClick}
            style={{
                background: 'white',
                borderRadius: '50%',
                padding: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                zIndex: 10,
                ...style // Allow overriding/adding styles
            }}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            <img src={isFavorite ? heartSolid : heartRegular} alt="favorite" width="20" height="20" />
        </button>
    );
};

export default FavoriteButton;
