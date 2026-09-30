import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  const featured = items.slice(0, 8);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Everything you need, in one place.</h1>
            <p>
              A responsive React e-commerce frontend with product browsing,
              search, filtering, cart management and Redux Toolkit state.
            </p>
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
          <div className="hero-card" aria-hidden="true">
            🛍️
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Featured Products</h2>
              <p className="muted">Explore popular products.</p>
            </div>
            <Link to="/products" className="btn btn-secondary">
              View All
            </Link>
          </div>

          {status === "loading" && <div className="loading">Loading products...</div>}
          {status === "failed" && <div className="error">{error}</div>}
          {status === "succeeded" && <ProductGrid products={featured} />}
        </div>
      </section>
    </>
  );
}