import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    // Timer pour naviguer vers l'écran suivant après 3 secondes
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <LottieView
       source={require('../assets/Lottie Lego.json')}
       // Assurez-vous que ce fichier existe
        autoPlay
        loop={false} // Animation joue une seule fois
        style={styles.animation}
      />
      <Text style={styles.text}>Welcome to CarApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Couleur de fond sombre
  },
  animation: {
    width: 300,
    height: 300, // Ajustez selon votre animation
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
