import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  const product = items.find((item) => String(item.id) === String(id));

  if (status === "loading") return <div className="loading">Loading product...</div>;
  if (status === "failed") return <div className="error">{error}</div>;
  if (!product) {
    return (
      <div className="empty">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <section className="details">
      <div className="container">
        <div className="details-grid">
          <img
            className="details-image"
            src={product.thumbnail}
            alt={product.title}
          />

          <div>
            <span className="category">{product.category}</span>
            <h1>{product.title}</h1>
            <div className="rating">★ {product.rating}</div>
            <div className="price">${product.price.toFixed(2)}</div>
            <p className="details-description">{product.description}</p>
            <p className="muted">Stock available: {product.stock}</p>

            <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
              <Link to="/products" className="btn btn-secondary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}