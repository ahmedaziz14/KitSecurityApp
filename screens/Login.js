import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const handle =()=> {
        navigation.navigate("MainScreen")
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome! <Text style={styles.subtitle}>Please login</Text>
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
      />

      <View style={styles.loginWith}>
        <TouchableOpacity style={styles.buttonLog}>
          <MaterialIcons name="google" size={24} color="#323232" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLog}>
          <MaterialIcons name="facebook" size={24} color="#323232" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonConfirm} onPress={handle}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'lightgrey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
    borderColor: '#323232',
    borderWidth: 2,
    shadowColor: '#323232',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    color: '#323232',
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 25,
  },
  subtitle: {
    color: '#666',
    fontWeight: '600',
    fontSize: 17,
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    borderColor: '#323232',
    borderWidth: 2,
    backgroundColor: '#fff',
    shadowColor: '#323232',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    fontSize: 15,
    fontWeight: '600',
    color: '#323232',
    padding: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loginWith: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  buttonLog: {
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: 100,
    borderColor: '#323232',
    borderWidth: 2,
    backgroundColor: '#fff',
    shadowColor: '#323232',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonConfirm: {
    marginTop: 50,
    width: 120,
    height: 40,
    borderRadius: 5,
    borderColor: '#323232',
    borderWidth: 2,
    backgroundColor: '#fff',
    shadowColor: '#323232',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#323232',
  },
  signupButton: {
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: '#323232',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});

export default LoginScreen;
