import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MainScreen = ({ navigation }) => {
  const [isLocked, setIsLocked] = useState(true);
  const [unreadNotifications, setUnreadNotifications] = useState(3); // Example number of unread notifications

  const toggleLock = () => {
    setIsLocked(!isLocked);
    Alert.alert(isLocked ? 'Unlocked' : 'Locked', `Your car is now ${isLocked ? 'unlocked' : 'locked'}.`);
  };

  const handleNotifications = () => {
    setUnreadNotifications(0); // Reset notifications count
    navigation.navigate('NotificationScreen');
  };

  const navigateToParameters = () => {
    navigation.navigate('ParametreScreen');
  };

  return (
    <View style={styles.container}>
      {/* Notification Icon */}
      <View style={styles.topIcons}>
        <TouchableOpacity onPress={handleNotifications}>
          <MaterialIcons name="notifications" size={30} color="#323232" />
          {unreadNotifications > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>{unreadNotifications}</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Parameter Icon */}
        <TouchableOpacity onPress={navigateToParameters}>
          <MaterialIcons name="settings" size={30} color="#323232" />
        </TouchableOpacity>

        {/* Database Icon */}
        <TouchableOpacity onPress={() => Alert.alert('Database', 'Database page will open here.')}>
          <MaterialIcons name="database" size={30} color="#323232" />
        </TouchableOpacity>
      </View>

      {/* Lock/Unlock Button */}
      <TouchableOpacity
        style={[styles.lockButton, isLocked ? styles.locked : styles.unlocked]}
        onPress={toggleLock}
      >
        <View style={styles.switchBackground}>
          <MaterialIcons
            name={isLocked ? 'lock' : 'lock-open'}
            size={60}
            color={isLocked ? '#323232' : '#4caf50'}
          />
          <Text style={styles.lockText}>
            {isLocked ? 'Tap to Unlock' : 'Tap to Lock'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    position: 'absolute',
    top: 50,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ff5252',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  lockButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  switchBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#323232',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#323232',
  },
  locked: {
    backgroundColor: '#fff',
    borderColor: '#323232',
  },
  unlocked: {
    backgroundColor: '#e8f5e9',
    borderColor: '#4caf50',
  },
  lockText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#323232',
  },
});

export default MainScreen;
