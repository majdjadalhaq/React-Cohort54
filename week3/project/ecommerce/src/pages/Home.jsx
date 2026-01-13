import { useState, useEffect } from 'react'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import useFetch from '../hooks/useFetch'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const { data: categoriesData } = useFetch('https://fakestoreapi.com/products/categories')
    const { data: productsData, loading, error, setUrl: setProductsUrl } = useFetch('https://fakestoreapi.com/products')

    const categories = categoriesData || []
    const products = productsData || []

    useEffect(() => {
        const url = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : 'https://fakestoreapi.com/products'

        setProductsUrl(url)
    }, [selectedCategory, setProductsUrl])

    if (error) {
        return <div className="error-message">Error: {error}</div>
    }

    return (
        <div className="home-page">
            <header className="header">
                <h1>My E-commerce</h1>
                <CategoryList
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </header>

            {loading ? (
                <div className="loading-spinner">Loading products...</div>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    )
}

export default Home
