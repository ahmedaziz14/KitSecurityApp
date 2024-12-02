// Importer les fonctions nécessaires de Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuration Firebase de votre application
const firebaseConfig = {
  apiKey: "AIzaSyD5JlllPWg67NRCfdyXfpWC0JCkf7K2Z2A",
  authDomain: "kitvoiture-fd0d1.firebaseapp.com",
  projectId: "kitvoiture-fd0d1",
  storageBucket: "kitvoiture-fd0d1.firebasestorage.app",
  messagingSenderId: "1067836964412",
  appId: "1:1067836964412:web:314eae68aec962f6354d39"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Obtenir l'instance d'authentification
const auth = getAuth(app);

// Fonction d'inscription avec email et mot de passe
export const signUpWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Inscription réussie', user);
    return user;
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
    throw error;
  }
};

// Fonction de connexion avec email et mot de passe
export const signInWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Connexion réussie', user);
    return user;
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    throw error;
  }
};

// Fonction de connexion avec Google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Connexion Google réussie', user);
    return user;
  } catch (error) {
    console.error('Erreur lors de la connexion Google', error);
    throw error;
  }
};
