import { useState } from 'react'
import './index.css'
import allProducts from './fake-data/all-products'
import allCategories from './fake-data/all-categories'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Normalization logic: remove "FAKE: " prefix, lowercase, trim
  const normalize = (str) => {
    if (!str) return ''
    return str.replace(/FAKE:\s*/i, "").trim().toLowerCase()
  }

  const filteredProducts = selectedCategory
    ? allProducts.filter(product => normalize(product.category) === normalize(selectedCategory))
    : allProducts

  return (
    <div className="app-container">
      <header className="header">
        <h1>My E-commerce</h1>
        <nav className="category-list">
          <button
            className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>

          {allCategories.map((cat, index) => (
            <button
              key={index}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {/* Display: Clean up "FAKE: " for better UI */}
              {cat.replace("FAKE: ", "")}
            </button>
          ))}
        </nav>
      </header>

      <main className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.title}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = `https://placehold.co/400x400?text=${encodeURIComponent(product.title.substring(0, 20))}`;
                }}
              />
            </div>
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="category">{product.category}</p>
              <div className="price-rating">
                <span className="price">${product.price}</span>
                {product.rating && (
                  <span className="rating">★ {product.rating.rate} ({product.rating.count})</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
