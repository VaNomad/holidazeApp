import { useContext, createContext, useReducer } from "react";
import { SignUpUser } from "../api/SignUpUser";
import { UpdateProfile } from "../api/UpdateProfile";
import { UpdateAvatarUrl } from "../api/UpdateAvatarUrl";

const UserContext = createContext();

const initialState = {
  user: localStorage.getItem("user"),
  accessToken: localStorage.getItem("accessToken"),
  isAuthenticated: !!localStorage.getItem("accessToken"),
  isLoading: false,
  hasError: false,
  errorDisplay: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        logout: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        accessToken: null,
        isAuthenticated: false,
      };
    case "SIGNUP_REQUEST":
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        user: action.payload.user,
      };
    case "SIGNUP_FAILURE":
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorDisplay: action.payload,
      };
    case "UPDATE_PROFILE_REQUEST":
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case "UPDATE_PROFILE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        user: action.payload,
      };
    case "UPDATE_PROFILE_FAILURE":
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorDisplay: action.payload,
      };
    case "UPDATE_AVATAR_REQUEST":
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case "UPDATE_AVATAR_SUCCESS":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        user: action.payload,
      };
    case "UPDATE_AVATAR_FAILURE":
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorDisplay: action.payload,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  console.log("Initial User Data:", state.user);

  const loginUser = async (data) => {
    console.log("Received data in loginUser:", data);
    const { accessToken, ...user } = data;
    const currentUser = JSON.stringify(user)
    localStorage.setItem("user", currentUser);
    localStorage.setItem("accessToken", accessToken);
    // localStorage.setItem("username", user.name);
    // localStorage.setItem("email", user.email);
    // localStorage.setItem("avatar", user.avatar);
    // localStorage.setItem("venueManager", user.venueManager);
    dispatch({ type: "LOGIN_SUCCESS", payload: { accessToken, user } });
    console.log("User logged in(clg from loginUser). isAuthenticated:", true)
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.clear();
    console.log("User logged out(clg from logout). isAuthenticated:", false)
  };

  const isAuthenticated = () => {
    return !!state.accessToken;
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

  const updateProfile = async (userData) => {
    dispatch({ type: "UPDATE_PROFILE_REQUEST" });

    try {
      const updatedUserData = await UpdateProfile(userData);
      dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: updatedUserData });
    } catch (error) {
      dispatch({ type: "UPDATE_PROFILE_FAILURE", payload: error.message });
    }
  };

  const updateAvatar = async (userName, newAvatarUrl) => {
    dispatch({ type: "UPDATE_AVATAR_REQUEST" });

    try {
      const updatedAvatarData = await UpdateAvatarUrl(userName, newAvatarUrl);
      dispatch({ type: "UPDATE_AVATAR_SUCCESS", payload: updatedAvatarData });
    } catch (error) {
      dispatch({ type: "UPDATE_AVATAR_FAILURE", payload: error.message });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loginUser,
        signUpUser,
        updateProfile,
        updateAvatar,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return useContext(UserContext);
};
