import { useForm } from "react-hook-form"
import { useState } from "react";
import { SignUpUser } from "../../api/SignUpUser";
import { useNavigate } from "react-router-dom";
import { Loader } from "../ui/loader/Loader";

export const SignUpForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [signUpError, setSignUpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const toggleCheckbox = (event) => {
    setIsChecked(event.target.checked);
    console.log("isChecked:", event.target.checked)
  };

  const handleSignup = async (data) => {
    try {
      setIsLoading(true)
      console.log("SignUp Data:", data)
      data.venueManager = isChecked;
      const response = await SignUpUser(data)
      console.log("SignUp Response:", response)
      // const { userData, accessToken } = response;
      // SignUpUser(userData, accessToken);

      console.log(response);
      console.log(data)
      console.log(SignUpUser)

      
      // localStorage.setItem("venueManager", data.venueManager.toString())
      
      if (response.userData && response.accessToken) {
        navigate("/login")
      }

      setTimeout(() => {
        // loginUser(userData, accessToken);
        navigate("/login");
        reset();
      }, 1000);

      setSignUpError(null)
    } catch (error) {
      console.log("SignUp Error:", error)
      setSignUpError("SignUp failed. Check added credentials");
    } finally {
      setIsLoading(false)
    }
    
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="flex flex-col gap-4 w-full p-5"
    >
      <input
        className="rounded-full px-5 py-2 max-w-full text-sm"
        {...register("name", {
          required: "Your name is required",
          pattern: {
            message:
              "Must contain a first and a last name of at least 2 characters each",
          },
        })}
        placeholder="Name"
        onBlur={() => {
          trigger("name");
        }}
      />
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
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        className="rounded-full px-5 py-2 max-w-full text-sm"
        {...register("password", {
          required: "A password is required",
          pattern: {
            value:
              /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
            message:
              "Password must be 8 - 16 characters, have 1 lowercase & 1 uppercase letter, one number and 1 special character",
          },
        })}
        type="password"
        placeholder="Password"
        onBlur={() => {
          trigger("password");
        }}
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <input
        className="rounded-full px-5 py-2 max-w-full text-sm"
        {...register("avatar", {
          required: "An avatar image is required",
          pattern: {
            value:
              /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/,
            message: "Avatar link must be a valid url",
          },
        })}
        placeholder="Avatar"
        onBlur={() => {
          trigger("avatar");
        }}
      />
      {errors.avatar && <p className="text-red-500">{errors.avatar.message}</p>}

      <label className="flex items-center space-x-5 justify-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
          className="h-5 w-5 text-holiblue border-holiblue rounded focus:ring-2 focus:ring-holiblue bg-transparent"
        />
        <span className="font-alli text-3xl">I have a venue for rent</span>
      </label>

      <button
        className="px-6 bg-none border-2 border-holiblue bg-holiblue rounded-full text-black font-alli text-4xl hover:bg-black hover:text-holiblue hover:scale-105 transition-all duration-300 tracking-widest whitespace-nowrap"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <Loader className="h-1 w-1" /> : "Login"}
      </button>
      {signUpError && <p className="text-red-500">{signUpError}</p>}
    </form>
  );
};
