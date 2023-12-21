// Information.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter instead of BrowserRouter
import Information from './Information';
import { CartProvider } from './CartContext'; // Import CartProvider if you have one

// Mock the useCartContext hook
jest.mock('./CartContext', () => ({
  useCartContext: jest.fn(() => ({
    addToCart: jest.fn(),
  })),
}));

const groceryList = [
  { id: 1, name: 'Item 1', description: 'Description 1', price: '$10.00', image: 'item1.jpg' },
  { id: 2, name: 'Item 2', description: 'Description 2', price: '$20.00', image: 'item2.jpg' },
];

describe('Information Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Information groceryList={groceryList} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the selected item details', () => {
    render(
      <MemoryRouter initialEntries={['/information/1']}>
        <CartProvider>
          <Information groceryList={groceryList} />
        </CartProvider>
      </MemoryRouter>
    );

    // Check if the item details are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('adds the item to the cart on button click', () => {
    const { addToCart } = jest.requireMock('./CartContext').useCartContext();

    render(
      <MemoryRouter initialEntries={['/information/1']}>
        <CartProvider>
          <Information groceryList={groceryList} />
        </CartProvider>
      </MemoryRouter>
    );

    // Set quantity input value to 2
    fireEvent.change(screen.getByLabelText('Quantity:'), { target: { value: '2' } });

    // Click the "Add to Cart" button
    fireEvent.click(screen.getByText('+').closest('button'));

    // Check if addToCart function is called with the correct arguments
    expect(addToCart).toHaveBeenCalledWith({
      id: 1,
      name: 'Item 1',
      image: 'item1.jpg',
      price: '$10.00',
      quantity: 2,
    });

    // Check if the confirmation message is displayed
    expect(screen.getByText('Item added to the cart')).toBeInTheDocument();
  });
});
