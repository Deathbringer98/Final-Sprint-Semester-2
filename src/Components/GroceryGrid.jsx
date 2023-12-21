import React from "react";
import { Link } from "react-router-dom";
import "./GroceryGrid.css";

import appleImage from "./Images/Apple.jpeg";
import bananaImage from "./Images/Banana.jpeg";
import orangeImage from "./Images/Orange.jpeg";
import milkImage from "./Images/Milk.jpeg";
import breadImage from "./Images/Bread.jpeg";
import eggsImage from "./Images/Eggs.jpeg";
import tomatoesImage from "./Images/Tomatoes.jpeg";
import potatoesImage from "./Images/Potatoes.jpeg";
import cheeseImage from "./Images/Cheese.jpeg";

const groceryItems = [
  {
    id: 1,
    name: "Apples",
    image: appleImage,
    description: "Juicy and sweet, perfect for snacks or baking pies.",
    price: "$2.99",
  },
  {
    id: 2,
    name: "Bananas",
    image: bananaImage,
    description: "Creamy and rich, a great source of potassium.",
    price: "$1.99",
  },
  {
    id: 3,
    name: "Oranges",
    image: orangeImage,
    description: "Zesty and refreshing, packed with vitamin C.",
    price: "$3.49",
  },
  {
    id: 4,
    name: "Milk",
    image: milkImage,
    description: "Fresh and nutritious, essential for a balanced diet.",
    price: "$2.29",
  },
  {
    id: 5,
    name: "Bread",
    image: breadImage,
    description: "Warm and comforting, ideal for sandwiches or toasting.",
    price: "$2.99",
  },
  {
    id: 6,
    name: "Eggs",
    image: eggsImage,
    description: "Versatile and protein-rich, great for breakfast or baking.",
    price: "$3.99",
  },
  {
    id: 7,
    name: "Tomatoes",
    image: tomatoesImage,
    description: "Vibrant and flavorful, perfect for salads or sauces.",
    price: "$1.79",
  },
  {
    id: 8,
    name: "Potatoes",
    image: potatoesImage,
    description: "Hearty and filling, a staple for countless recipes.",
    price: "$2.49",
  },
  {
    id: 9,
    name: "Cheese",
    image: cheeseImage,
    description: "Rich and savory, adds deliciousness to any dish.",
    price: "$4.99",
  },
];

const GroceryGrid = () => {
  return (
    <div className="grid-container">
      {groceryItems.slice(0, 9).map((item) => (
        <div key={item.id} className="grid-item">
          <Link to={`/Item/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
          <div className="item-details">
            <div className="item-name-price">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
            <p className="description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroceryGrid;
