import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import GroceryGrid from "./Components/GroceryGrid";
import Information from "./Components/Information";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Checkout from "./Components/Checkout";
import { CartProvider } from "./Components/CartContext";

import appleImage from "./Components/Images/Apple.jpeg";
import bananaImage from "./Components/Images/Banana.jpeg";
import orangeImage from "./Components/Images/Orange.jpeg";
import milkImage from "./Components/Images/Milk.jpeg";
import breadImage from "./Components/Images/Bread.jpeg";
import eggsImage from "./Components/Images/Eggs.jpeg";
import tomatoesImage from "./Components/Images/Tomatoes.jpeg";
import potatoesImage from "./Components/Images/Potatoes.jpeg";
import cheeseImage from "./Components/Images/Cheese.jpeg";

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

function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<GroceryGrid groceryItems={groceryItems} />} />
        <Route
          path="/Item/:itemId"
          element={<Information groceryList={groceryItems} />}
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} /> {/* Add Contact route */}
        <Route path="/Checkout" element={<Checkout />} /> {/* Add Checkout route */}
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
