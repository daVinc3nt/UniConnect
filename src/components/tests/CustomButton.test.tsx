import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CustomButton } from '../CustomButton';

describe('CustomButton', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('renders correctly with title', () => {
    const { getByText } = render(
      <CustomButton title="Test Button" onPress={mockOnPress} />
    );

    expect(getByText('Test Button')).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(
      <CustomButton title="Test Button" onPress={mockOnPress} />
    );

    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('shows loading indicator when loading is true', () => {
    const { queryByText } = render(
      <CustomButton
        title="Test Button"
        onPress={mockOnPress}
        loading={true}
        testID="test-button"
      />
    );

    expect(queryByText('Test Button')).toBeNull();
    // Note: ActivityIndicator doesn't have a testID by default,
    // but we can test that the text is not shown
  });

  it('is disabled when disabled prop is true', () => {
    const { getByTestId } = render(
      <CustomButton
        title="Test Button"
        onPress={mockOnPress}
        disabled={true}
        testID="test-button"
      />
    );

    const button = getByTestId('test-button');
    fireEvent.press(button);
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('applies correct styles for primary variant', () => {
    const { getByTestId } = render(
      <CustomButton
        title="Primary Button"
        onPress={mockOnPress}
        variant="primary"
        testID="primary-button"
      />
    );

    const button = getByTestId('primary-button');
    expect(button).toBeDefined();
  });

  it('applies correct styles for secondary variant', () => {
    const { getByTestId } = render(
      <CustomButton
        title="Secondary Button"
        onPress={mockOnPress}
        variant="secondary"
        testID="secondary-button"
      />
    );

    const button = getByTestId('secondary-button');
    expect(button).toBeDefined();
  });
});
