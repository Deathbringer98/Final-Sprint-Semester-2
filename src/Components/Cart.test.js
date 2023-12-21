// Cart.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Mock BrowserRouter
import Cart from './Cart';
import { CartProvider } from './CartContext'; // Import CartProvider if you have one

// Mock the useCartContext hook
jest.mock('./CartContext', () => ({
  useCartContext: jest.fn(() => ({
    cartItems: [
      { id: 1, name: 'Item 1', price: '$10.00', quantity: 2, image: 'item1.jpg' },
      { id: 2, name: 'Item 2', price: '$20.00', quantity: 1, image: 'item2.jpg' },
    ],
    removeFromCart: jest.fn(),
  })),
}));

describe('Cart Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct items in the cart', () => {
    render(
      <Router>
        <CartProvider>
          <Cart />
        </CartProvider>
      </Router>
    );

    // Check if items are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('displays the total price correctly', () => {
    render(
      <Router>
        <CartProvider>
          <Cart />
        </CartProvider>
      </Router>
    );

    // Check if total price is rendered
    expect(screen.getByText('Total: $40.00')).toBeInTheDocument();
  });

  it('displays "Your cart is empty" message when cart is empty', () => {
    // Mock the useCartContext hook to return an empty cart
    jest.mock('./CartContext', () => ({
      useCartContext: jest.fn(() => ({ cartItems: [], removeFromCart: jest.fn() })),
    }));

    render(
      <Router>
        <CartProvider>
          <Cart />
        </CartProvider>
      </Router>
    );

    // Check if the "Your cart is empty" message is rendered
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });
});
