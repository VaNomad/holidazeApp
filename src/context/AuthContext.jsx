import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
  }

  const logout = () => {
    setUser(null);
    setToken(null);
  }

  const isAuthenticated = () => {
    return !!token;
  }

  return (
  <AuthContext.Provider value={ { user, token, login, logout, isAuthenticated } }>
    {children}
  </AuthContext.Provider>
  )
}

export const UseAuth = () => {
  return useContext(AuthContext);
}

