import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notifications = [
  { id: '1', message: 'Car unlocked successfully.', time: '2 mins ago' },
  { id: '2', message: 'Engine status: OK.', time: '1 hour ago' },
  { id: '3', message: 'Car locked successfully.', time: '3 hours ago' },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#323232',
    marginBottom: 15,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderColor: '#323232',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#323232',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  message: {
    fontSize: 16,
    fontWeight: '600',
    color: '#323232',
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default NotificationsScreen;
