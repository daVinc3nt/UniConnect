import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from '@/components/CustomButton';
import { useAuth } from '@/hooks/useAuth';

export const HomeScreen: React.FC = () => {
  const { user, isLoading } = useAuth();

  const handleRefresh = () => {
    // Handle refresh logic
    console.log('Refreshing...');
  };

  const handleNavigateToProfile = () => {
    // Navigation logic would go here
    console.log('Navigate to profile');
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Home!</Text>
          {user && <Text style={styles.subtitle}>Hello, {user.name}!</Text>}
        </View>

        <View style={styles.content}>
          <Text style={styles.description}>
            This is your home screen. You can navigate to other sections using
            the tab bar below.
          </Text>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Refresh"
              onPress={handleRefresh}
              testID="refresh-button"
            />
            <CustomButton
              title="View Profile"
              onPress={handleNavigateToProfile}
              variant="secondary"
              testID="profile-button"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D1D1F',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#6E6E73',
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#6E6E73',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 16,
  },
  loadingText: {
    fontSize: 18,
    color: '#6E6E73',
  },
});
