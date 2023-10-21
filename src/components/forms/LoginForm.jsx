import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { SignUpForm } from "./SignUpForm";
import { LoginUserCall } from "../../api/LoginUserCall";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { GridLoader } from "react-spinners";


export const LoginForm = () => {
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = useUser();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleLogin = async (data) => {
    try {
      setIsLoading(true);
      const response = await LoginUserCall(data);
      console.log("Response from server:", response);
      // localStorage.setItem("accessToken", response.accessToken);
      const venueManagerValue = localStorage.getItem("venueManager")
      console.log("venueManager value after login:", venueManagerValue);
      loginUser(response);
      navigate("/profile");
    } catch (error) {
      console.log("login failed. Check email & password", error)
      setLoginError("Login failed. Check email & password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto p-5 rounded-xl mt-10 backdrop-blur-sm max-w-full">
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList className="text-zinc-900 font-dm text-sm max-w-full">
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanel>
          <div className="container mx-auto backdrop-blur-lg rounded-b-2xl p-2">
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="flex flex-col gap-10 max-w-full p-5"
            >
              <input
                className="rounded-full px-5 py-2 max-w-full text-sm"
                {...register("email", {
                  required: "E-mail is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Must be a valid stud.noroff.no E-mail",
                  },
                })}
                placeholder="E-mail"
                onBlur={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              <input
                className="rounded-full px-5 py-2 max-w-full text-sm"
                {...register("password", {
                  required: "A password is required",
                })}
                type="password"
                placeholder="Password"
                onBlur={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              <button
                className="px-6 bg-none border-2 border-holiblue bg-holiblue rounded-full text-black font-alli text-4xl hover:bg-black hover:text-holiblue hover:scale-105 transition-all duration-300 tracking-widest whitespace-nowrap"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <GridLoader className="h-1 w-1" /> : "Login"}
              </button>
              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <SignUpForm />
        </TabPanel>
      </Tabs>
    </div>
  );
};
