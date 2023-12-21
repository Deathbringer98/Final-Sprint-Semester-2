// Contact.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('Contact Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the form elements', () => {
    render(<Contact />);

    // Check if form elements are rendered
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
    expect(screen.getByText('I Accept the Terms of Use & Privacy Policy.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('logs "Thanks!" to the console on form submission', () => {
    // Mock console.log to track if it's called
    const originalConsoleLog = console.log;
    console.log = jest.fn();

    render(<Contact />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Message'), { target: { value: 'Hello, this is a message.' } });

    // Check the checkbox
    fireEvent.click(screen.getByText('I Accept the Terms of Use & Privacy Policy.'));

    // Click the submit button
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Check if console.log is called with the expected message
    expect(console.log).toHaveBeenCalledWith('Thanks!');

    // Restore the original console.log
    console.log = originalConsoleLog;
  });
});
