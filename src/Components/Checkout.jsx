import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [isPaymentComplete, setPaymentComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handlePayment = () => {
    // Perform any payment processing logic (in a real application, you would integrate with a payment gateway)
    // For simplicity, we'll just generate a fake order number after a brief delay
    setTimeout(() => {
      const fakeOrderNumber = Math.floor(Math.random() * 1000000);
      setPaymentComplete(true);
      setOrderNumber(fakeOrderNumber);
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {isPaymentComplete ? (
        <div className="order-confirmation">
          <p>Your order has been received!</p>
          <p>Order Number: {orderNumber}</p>
        </div>
      ) : (
        <div className="payment-form">
          <p></p>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
