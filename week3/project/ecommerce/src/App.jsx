import { Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Favorites from './pages/Favorites'
import './index.css'

function App() {
  return (
    <FavoritesProvider>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </FavoritesProvider>
  )
}

export default App
