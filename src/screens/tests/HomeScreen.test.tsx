import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from '../HomeScreen';

// Mock the useAuth hook
jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

// Mock the CustomButton component
jest.mock('@/components/CustomButton', () => ({
  CustomButton: ({ title, testID }: any) => {
    const { Text } = require('react-native');
    return <Text testID={testID}>{title}</Text>;
  },
}));

const mockUseAuth = require('@/hooks/useAuth').useAuth;

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state correctly', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      isLoading: true,
      isAuthenticated: false,
    });

    const { getByText } = render(<HomeScreen />);
    expect(getByText('Loading...')).toBeDefined();
  });

  it('renders home screen with user data', () => {
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    mockUseAuth.mockReturnValue({
      user: mockUser,
      isLoading: false,
      isAuthenticated: true,
    });

    const { getByText } = render(<HomeScreen />);

    expect(getByText('Welcome Home!')).toBeDefined();
    expect(getByText('Hello, John Doe!')).toBeDefined();
    expect(getByText('Refresh')).toBeDefined();
    expect(getByText('View Profile')).toBeDefined();
  });

  it('renders home screen without user data', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });

    const { getByText, queryByText } = render(<HomeScreen />);

    expect(getByText('Welcome Home!')).toBeDefined();
    expect(queryByText(/Hello,/)).toBeNull();
    expect(getByText('Refresh')).toBeDefined();
    expect(getByText('View Profile')).toBeDefined();
  });
});
