import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  if (!items.length) {
    return (
      <section className="cart-section">
        <div className="container empty">
          <h2>Your cart is empty.</h2>
          <p className="muted" style={{ margin: "10px 0 20px" }}>
            Add some products to continue.
          </p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Shopping Cart</h2>
            <p className="muted">{totalItems} total item(s)</p>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>

        <div className="cart-layout">
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img className="cart-image" src={item.thumbnail} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <p className="muted">${item.price.toFixed(2)} each</p>
                  <div style={{ marginTop: 10 }}>
                    <div className="quantity">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                        −
                      </button>
                      <strong>{item.quantity}</strong>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <br />
                  <button
                    className="btn btn-danger"
                    style={{ marginTop: 10 }}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: "100%", marginTop: 16 }}
              onClick={() =>
                alert("Demo checkout: connect a payment gateway for real payments.")
              }
            >
              Checkout
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}