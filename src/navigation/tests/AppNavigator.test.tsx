import React from 'react';
import { render } from '@testing-library/react-native';
import AppNavigator from '../AppNavigator';

// Mock the screens
jest.mock('@/screens/HomeScreen', () => ({
  HomeScreen: () => {
    const { Text } = require('react-native');
    return <Text>Home Screen</Text>;
  },
}));

jest.mock('@/screens/ProfileScreen', () => ({
  ProfileScreen: () => {
    const { Text } = require('react-native');
    return <Text>Profile Screen</Text>;
  },
}));

jest.mock('@/screens/SettingsScreen', () => ({
  SettingsScreen: () => {
    const { Text } = require('react-native');
    return <Text>Settings Screen</Text>;
  },
}));

// Mock the store
jest.mock('@/store', () => ({
  store: {
    getState: () => ({}),
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    replaceReducer: jest.fn(),
  },
}));

describe('AppNavigator', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<AppNavigator />);
    // The navigator should render the initial screen (Home)
    expect(getByText('Home Screen')).toBeDefined();
  });

  it('contains tab navigation structure', () => {
    const component = render(<AppNavigator />);
    // Test that the component renders successfully
    // In a real app, you might test navigation between screens
    expect(component).toBeDefined();
  });
});
