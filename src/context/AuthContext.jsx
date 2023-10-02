import { useState, useContext, createContext } from "react";
// import { LoginUser } from "../api/LoginUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  const login = (userData, accessToken) => {
    setUser(userData);
    setToken(accessToken);
    localStorage.setItem("username", userData.name);
    localStorage.setItem("accessToken", userData.accessToken);
    localStorage.setItem("avatar", userData.avatar);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("venueManager", userData.venueManager);
  }

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("accessToken");
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

