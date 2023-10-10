import { useState, useContext, createContext, useReducer } from "react";

// Defines initial state for Authentication
const initialState = {user: null, isAuthenticated: false,}

// Creates the Authentication Context
const AuthContext = createContext();

// Defines the useReducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  const logIn = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logOut = () => {
    dispatch({ type: "LOGOUT"})
  }

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
  <AuthContext.Provider value={ { ...state, user, token, logIn, logOut, login, logout, isAuthenticated } }>
    {children}
  </AuthContext.Provider>
  )
}

export const UseAuth = () => {
  return useContext(AuthContext);
}

