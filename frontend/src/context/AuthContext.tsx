import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  User, 
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Set persistence to LOCAL (persists even after browser restart)
  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      setError(null);

      // Store user data in localStorage when signed in
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          lastLogin: new Date().toISOString()
        };
        localStorage.setItem('userData', JSON.stringify(userData));
      } else {
        localStorage.removeItem('userData');
      }
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      setError(null);
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      
      // Store additional session data
      const sessionData = {
        token,
        lastLogin: new Date().toISOString(),
        isGoogleSignIn: true
      };
      localStorage.setItem('sessionData', JSON.stringify(sessionData));
      
      console.log('Successfully signed in:', user);
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      setError(error.message);
      
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Sign-in popup was closed before completing the sign-in.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        setError('Multiple popup requests were made. Please try again.');
      } else if (error.code === 'auth/configuration-not-found') {
        setError('Google authentication is not properly configured. Please contact support.');
      } else {
        setError('An error occurred during sign in. Please try again.');
      }
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      // Clear all session data
      localStorage.removeItem('userData');
      localStorage.removeItem('sessionData');
      console.log('Successfully signed out');
    } catch (error: any) {
      console.error('Error signing out:', error);
      setError('Failed to sign out. Please try again.');
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 