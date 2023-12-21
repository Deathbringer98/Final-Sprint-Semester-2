import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCartContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price.slice(1)),
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
          {/* Render Checkout button and link only when there are items in the cart */}
          {cartItems.length > 0 && (
            <Link to="/Checkout">
              <button className="checkout-button">Checkout</button>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
