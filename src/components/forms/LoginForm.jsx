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
    <div className="mt-24 mx-auto border border-holiblue p-5 rounded-xl max-w-md w-[80%]">
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanel>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-10 w-full p-5"
          >
            <input
              className="h-14 rounded-md p-3 bg-zinc-700"
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
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              className="h-14 rounded-md p-3 bg-zinc-700"
              {...register("password", {
                required: "A password is required",
              }) }
              type="password"
              placeholder="Password"
              onBlur={() => {
                trigger("password");
              }}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button
              className="h-16 rounded-full bg-zinc-800 border border-holipink hover:bg-holipink hover:text-black hover:scale-105 uppercase font-medium tracking-widest font-dm text-xl transition-all duration-800 cursor-pointer"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <GridLoader className="h-1 w-1" /> : "login"}
            </button>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </form>
        </TabPanel>
        <TabPanel>
          <SignUpForm />
        </TabPanel>
      </Tabs>
    </div>
  );
};
