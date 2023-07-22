import React, { useContext, useState } from 'react';

// ---------- AuthContext ----------
type AuthState = { username?: string };
type AuthStateSetter = (authState: AuthState) => void;

/** AuthContext contains AuthState and AuthStateSetter */
const AuthContext = React.createContext<
  { authState: AuthState; setAuthState: AuthStateSetter } | undefined
>(undefined);

// ---------- AuthContextProvider ----------
const AuthContextProvider: React.FC = ({ children }: any) => {
  const [authState, setAuthState] = useState<AuthState>({});

  const value = { authState, setAuthState };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ---------- useAuthContext ----------
function useAuthContext() {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return authContext;
}

export { AuthContextProvider, useAuthContext };
