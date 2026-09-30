import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="logo">
          ShopEase
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart 🛒
            <span className="cart-badge">{totalItems}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}