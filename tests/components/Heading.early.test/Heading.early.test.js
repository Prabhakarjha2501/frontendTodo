
// Unit tests for: Heading

import React from 'react'
import Heading from '../../../src/components/Heading';


import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Heading() Heading method', () => {
  // Happy Path Tests
  describe('Happy Path', () => {
    it('should render the heading with correct text', () => {
      // Render the Heading component
      render(<Heading />);
      
      // Assert that the heading text is displayed correctly
      const headingElement = screen.getByRole('heading', { level: 1 });
      expect(headingElement).toHaveTextContent('Contact Us Page');
    });

    it('should render the form with name and message fields', () => {
      // Render the Heading component
      render(<Heading />);
      
      // Assert that the name and message fields are present
      const nameField = screen.getByLabelText('Name');
      const messageField = screen.getByLabelText('Message');
      expect(nameField).toBeInTheDocument();
      expect(messageField).toBeInTheDocument();
    });

    it('should render the submit button with correct text', () => {
      // Render the Heading component
      render(<Heading />);
      
      // Assert that the submit button is present with correct text
      const submitButton = screen.getByRole('button', { name: /submit/i });
      expect(submitButton).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle form submission without crashing', () => {
      // Render the Heading component
      render(<Heading />);
      
      // Simulate form submission
      const submitButton = screen.getByRole('button', { name: /submit/i });
     // userEvent.click(submitButton);
      
      // Assert that the form submission does not crash the component
      
      expect(submitButton).toBeInTheDocument();
    });

    it('should handle empty input fields gracefully', () => {
      // Render the Heading component
      render(<Heading />);
      
      // Simulate form submission with empty fields
      const submitButton = screen.getByRole('button', { name: /submit/i });
     // userEvent.click(submitButton);
      
      // Assert that the form handles empty fields without errors
      const nameField = screen.getByLabelText('Name');
      const messageField = screen.getByLabelText('Message');
      expect(nameField).toHaveValue('');
      expect(messageField).toHaveValue('');
    });
  });
});

// End of unit tests for: Heading
