import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import FavoriteButton from '../components/FavoriteButton'

function ProductDetail() {
    const { id } = useParams()
    const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`)

    if (loading) return <div className="loading-spinner">Loading product details...</div>
    if (error) return <div className="error-message">Error: {error}</div>
    if (!product) return <div>Product not found</div>

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <FavoriteButton
                        productId={Number(id)}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px'
                        }}
                    />
                    <img src={product.image} alt={product.title} className="detail-image" />
                </div>
                <div className="detail-info">
                    <h2>{product.title}</h2>
                    <p className="detail-category">{product.category}</p>
                    <p className="detail-description">{product.description}</p>
                    <p className="detail-price">${product.price}</p>
                    <div className="detail-rating">
                        Rating: {product.rating?.rate} ({product.rating?.count} reviews)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
