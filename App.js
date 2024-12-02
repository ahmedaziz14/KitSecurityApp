import React from 'react';
import AppNavigator from './screens/AppNavigator';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fait occuper tout l'espace disponible
  },
});
