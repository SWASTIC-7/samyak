import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYmOFG_eVq3QgOFT2gESvlt93PudyrZ6Y",
  authDomain: "samyak-bda2e.firebaseapp.com",
  projectId: "samyak-bda2e",
  storageBucket: "samyak-bda2e.firebasestorage.app",
  messagingSenderId: "318115851201",
  appId: "1:318115851201:web:5159bc97277295a7f65d40",
  measurementId: "G-LQ3W25H2GQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Add scopes
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

export const db = getFirestore(app); 