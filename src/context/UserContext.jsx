import { useState, useContext, createContext, useReducer } from "react";
import { LoginUser } from "../api/LoginUser";
import { SignUpUser } from "../api/SignUpUser";
import { UpdateAvatar } from "../api/UpdateAvatar";

const UserContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  hasError: false,
  errorDisplay: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      }
    case "LOGIN_SUCCESS":
      return {
        ...state,
        accessToken: true,
        isAuthenticated: true,
      }
    case "LOGIN_FAILURE":
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case "SIGNUP_REQUEST":
    case "SIGNUP_SUCCESS":
    case "SIGNUP_FAILURE":
    case "UPDATE_AVATAR_REQUEST":
    case "UPDATE_AVATAR_SUCCESS":
    case "UPDATE_AVATAR_FAILURE":
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  const loginUser = async (userData, accessToken) => {
    setUser(userData);
    setToken(accessToken);
    localStorage.setItem("username", userData.name);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("avatar", userData.avatar);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("venueManager", userData.venueManager);
    dispatch({ type: "LOGIN_REQUEST" });

    // try {
    //   const user = await LoginUser(userData);
    //   dispatch({ type: "LOGIN_SUCCESS", payload: user });
    // } catch (error) {
    //   dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    // }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username")
  };

  const isAuthenticated = () => {
    return !!token;
  };

  const signUpUser = async (userData) => {
    dispatch({ type: "SIGNUP_REQUEST" });

    try {
      const user = await SignUpUser(userData);
      dispatch({ type: "SIGNUP_SUCCESS", payload: user });
    } catch (error) {
      dispatch({ type: "SIGNUP_FAILURE", payload: error.message });
    }
  };

  const updateAvatar = async (userData) => {
    dispatch({ type: "UPDATE_AVATAR_REQUEST" });

    try {
      const updatedUser = await UpdateAvatar(userData);
      dispatch({ type: "UPDATE_AVATAR_SUCCESS", payload: updatedUser });
    } catch (error) {
      dispatch({ type: "UPDATE_AVATAR_FAILURE", payload: error.message });
    }
  };

  return (
    <UserContext.Provider
      value={{ state, loginUser, signUpUser, updateAvatar, logout, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
