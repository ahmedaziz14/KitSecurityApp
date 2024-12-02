import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './SignUp';
import NotificationsScreen from './NotificationsScreen';
import SplashScreen from './SplashScreen';
import Home from './Home';
import Login from './Login';
import MainScreen from './MainScreen';
import ParameterScreen from './ParameterScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
        >
          {({ navigation }) => (
            <SplashScreen onFinish={() => navigation.replace('Home')} />
          )}
        </Stack.Screen>

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true, title: 'Connexion' }}
        />
        <Stack.Screen name ="SignUp" component={SignUpScreen}/>
        <Stack.Screen name='MainScreen' component={MainScreen}/>
        <Stack.Screen name='NotificationScreen' component={NotificationsScreen}/>
        <Stack.Screen name='ParametreScreen' component={ParameterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
