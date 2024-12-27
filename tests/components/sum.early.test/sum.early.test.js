
// Unit tests for: sum

import { sum } from '../../../src/components/sum';

import '@testing-library/jest-dom';


describe('sum() sum method', () => {
  // Happy path tests
  describe('Happy paths', () => {
    test('should return the sum of two positive numbers', () => {
      // Test the addition of two positive numbers
      const result = sum(3, 5);

      //Assertion ( this line is known is assertin)
      expect(result).toBe(8);
    });

    test('should return the sum of a positive and a negative number', () => {
      // Test the addition of a positive and a negative number
      const result = sum(10, -3);
      expect(result).toBe(7);
    });

    test('should return the sum of two negative numbers', () => {
      // Test the addition of two negative numbers
      const result = sum(-4, -6);
      expect(result).toBe(-10);
    });

    test('should return the sum of zero and a number', () => {
      // Test the addition of zero and a number
      const result = sum(0, 5);
      expect(result).toBe(5);
    });
  });

  // Edge case tests
  describe('Edge cases', () => {
    test('should return the sum when both numbers are zero', () => {
      // Test the addition of two zeros
      const result = sum(0, 0);
      expect(result).toBe(0);
    });

    test('should handle large numbers correctly', () => {
      // Test the addition of large numbers
      const result = sum(1000000, 2000000);
      expect(result).toBe(3000000);
    });

    test('should handle floating point numbers', () => {
      // Test the addition of floating point numbers
      const result = sum(1.5, 2.3);
      expect(result).toBeCloseTo(3.8);
    });

    test('should handle very small numbers', () => {
      // Test the addition of very small numbers
      const result = sum(0.0001, 0.0002);
      expect(result).toBeCloseTo(0.0003);
    });
  });
});

// End of unit tests for: sum
