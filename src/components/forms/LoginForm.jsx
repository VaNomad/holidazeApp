import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { SignUpForm } from "./SignUpForm"; // Import your SignUpForm component
import { LoginUser } from "../../api/LoginUser";

export const LoginForm = () => {
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

  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (data) => {
    try {
      const response = await LoginUser(data)
      console.log(response)
      console.log(data)
      console.log(LoginUser)
    } catch (error) {
      setLoginError("Login failed. Check email & password")
    }
  }

  return (
    <div className="mx-auto border border-holiblue p-5 rounded-xl max-w-xl w-[80%]">
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
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message:
                    "Password must be 8 - 16 characters, have 1 lowercase & 1 uppercase letter, one number and 1 special character",
                },
              })}
              placeholder="Password"
              onBlur={() => {
                trigger("password");
              }}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <input
              className="h-16 rounded-full bg-zinc-800 border border-holipink hover:bg-holipink hover:text-black hover:scale-105 uppercase font-medium tracking-widest font-dm text-xl transition-all duration-800 cursor-pointer"
              type="submit"
              value="login"
            />
            { loginError && <p className="text-red-500">{loginError}</p>}
          </form>
        </TabPanel>
        <TabPanel>
          <SignUpForm />
        </TabPanel>
      </Tabs>
    </div>
  );
};
