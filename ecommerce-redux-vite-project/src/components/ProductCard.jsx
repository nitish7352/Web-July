import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          className="product-image"
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
      </Link>

      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <div className="rating">★ {product.rating}</div>
        <div className="price">${product.price.toFixed(2)}</div>

        <div className="card-actions">
          <Link className="btn btn-secondary" to={`/products/${product.id}`}>
            View
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}