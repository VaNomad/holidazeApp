import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("authToken", authToken)
  }

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken")
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

