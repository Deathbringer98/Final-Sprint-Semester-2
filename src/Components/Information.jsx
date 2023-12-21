// Information.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./information.css";
import { useCartContext } from "./CartContext";

const Information = ({ groceryList }) => {
  const { itemId } = useParams();
  const { addToCart } = useCartContext();

  const [isItemAdded, setItemAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Find the selected item based on itemId
    const selectedItem = groceryList.find((item) => item.id === Number(itemId));

    if (selectedItem) {
      // Add the selected item to the cart
      addToCart({
        id: selectedItem.id,
        name: selectedItem.name,
        image: selectedItem.image,
        price: selectedItem.price,
        quantity,
      });

      setItemAdded(true);

      // Set a timeout to reset the state after 5 seconds
      setTimeout(() => {
        setItemAdded(false);
      }, 5000);
    } else {
      console.error("Item not found");
    }
  };

  if (!groceryList || !Array.isArray(groceryList) || groceryList.length === 0) {
    return <div>No grocery items available</div>;
  }

  const selectedItem = groceryList.find((item) => item.id === Number(itemId));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container">
      <h2>{selectedItem.name}</h2>
      <img src={selectedItem.image} alt={selectedItem.name} />
      <p>{selectedItem.description}</p>
      <p>{selectedItem.price}</p>
      <div className="quantity-container">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
        />
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        +
      </button>
      {isItemAdded && (
        <p className="confirmation-message">Item added to the cart</p>
      )}
    </div>
  );
};

export default Information;