import { useContext, createContext, useReducer } from "react";
import { LoginUser } from "../api/LoginUser";
import { SignUpUser } from "../api/SignUpUser";
import { UpdateProfile } from "../api/UpdateProfile";
import { UpdateAvatarUrl } from "../api/UpdateAvatarUrl";

const UserContext = createContext();

const initialState = {
  user: null,
  accessToken: localStorage.getItem("accessToken"),
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
        isAuthenticated: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        accessToken: action.payload,
        isAuthenticated: true,
      };
    case "LOGIN_FAILURE":
    case "LOGOUT":
      return {
        ...state,
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
        user: action.payload,
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
  // const [user, setUser] = useState(null);
  // const [token, setToken] = useState(localStorage.getItem("accessToken"));

  // const loginUser = async (userData, accessToken) => {
  //   console.log("LoginUser function started");
  //   console.log("userData:", userData);
  //   console.log("accessToken in loginUser:", accessToken);
  //   // setUser(userData);
  //   // setToken(accessToken);
  //   localStorage.setItem("username", userData.name);
  //   localStorage.setItem("accessToken", accessToken);
  //   localStorage.setItem("avatar", userData.avatar);
  //   localStorage.setItem("email", userData.email);
  //   localStorage.setItem("venueManager", userData.venueManager);
  //   dispatch({ type: "LOGIN_REQUEST" });

  //   try {
  //     const user = await LoginUser(userData);
  //     console.log("User returned from LoginUser", user);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: user });
  //   } catch (error) {
  //     console.log("LoginUser error: ", error);
  //     dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  //   }
  // };

  const loginUser = async (userData, accessToken) => {
    dispatch({ type: "LOGIN_REQUEST" });

    try {
      const user = await LoginUser(userData, accessToken);

      // Assuming LoginUser returns the user data as an object
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } catch (error) {
      console.log("LoginUser error: ", error);
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  const logout = () => {
    // setUser(null);
    // setToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
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
        state,
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
