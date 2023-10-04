import { useContext, createContext, useReducer } from "react";
import { LoginUser } from "../api/LoginUser";
import { SignUpUser } from "../api/SignUpUser";
import { UpdateProfile } from "../api/UpdateProfile";

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
      }
    case "LOGIN_SUCCESS":
      return {
        ...state,
        accessToken: action.payload,
        isAuthenticated: true,
      }
    case "LOGIN_FAILURE":
    case "LOGOUT":
      return {
        ...state,
        accessToken: null,
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
  // const [user, setUser] = useState(null);
  // const [token, setToken] = useState(localStorage.getItem("accessToken"));

  const loginUser = async (userData, accessToken) => {
    console.log("LoginUser function started")
    console.log("userData:", userData)
    console.log("accessToken in loginUser:", accessToken )
    // setUser(userData);
    // setToken(accessToken);
    localStorage.setItem("username", userData.name);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("avatar", userData.avatar);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("venueManager", userData.venueManager);
    dispatch({ type: "LOGIN_REQUEST" });

    try {
      const user = await LoginUser(userData);
      console.log("User returned from LoginUser", user)
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } catch (error) {
      console.log("LoginUser error: ", error)
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  const logout = () => {
    // setUser(null);
    // setToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username")
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
    dispatch({ type: "UPDATE_AVATAR_REQUEST" });

    try {
      const updatedUser = await UpdateProfile(userData);
      dispatch({ type: "UPDATE_AVATAR_SUCCESS", payload: updatedUser });
    } catch (error) {
      dispatch({ type: "UPDATE_AVATAR_FAILURE", payload: error.message });
    }
  };

  return (
    <UserContext.Provider
      value={{ state, loginUser, signUpUser, updateProfile, logout, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
