interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  lastLogin: string;
}

interface SessionData {
  token: string;
  lastLogin: string;
  isGoogleSignIn: boolean;
}

export const getStoredUserData = (): UserData | null => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

export const getStoredSessionData = (): SessionData | null => {
  const sessionData = localStorage.getItem('sessionData');
  return sessionData ? JSON.parse(sessionData) : null;
};

export const isSessionValid = (): boolean => {
  const userData = getStoredUserData();
  const sessionData = getStoredSessionData();
  
  if (!userData || !sessionData) return false;
  
  // Check if the session is less than 24 hours old
  const lastLogin = new Date(sessionData.lastLogin);
  const now = new Date();
  const hoursSinceLastLogin = (now.getTime() - lastLogin.getTime()) / (1000 * 60 * 60);
  
  return hoursSinceLastLogin < 24;
};

export const clearSession = () => {
  localStorage.removeItem('userData');
  localStorage.removeItem('sessionData');
}; 