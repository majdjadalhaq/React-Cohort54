import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
            <Link to="/">Home</Link>
            <Link to="/favourites">Favorites</Link>
        </nav>
    );
};

export default Navbar;
