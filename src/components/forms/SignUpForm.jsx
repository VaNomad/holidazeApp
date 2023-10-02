import { useForm } from "react-hook-form"
import { useState } from "react";
import { SignUpUser } from "../../api/SignUpUser";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [signUpError, setSignUpError] = useState(null);

  const handleSignup = async (data) => {
    try {
      const response = await SignUpUser(data)
    } catch (error) {
      setSignUpError("SignUp failed. Check added credentials");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="flex flex-col gap-10 w-full p-5"
    >
      <input
        className="h-14 rounded-md p-3 bg-zinc-700"
        {...register("name", {
          required: "Your name is required",
          pattern: {
            value: /^([A-Z][A-Za-z ,.'`-]{3,30})$/,
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
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

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
        className="h-14 rounded-md p-3 bg-zinc-700"
        {...register("avatar", {
          required: "An avatar image is required",
          pattern: {
            value:
              /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/,
            message:
              "Avatar link must be a valid url",
          },
        })}
        placeholder="Avatar"
        onBlur={() => {
          trigger("avatar");
        }}
      />
      {errors.avatar && (
        <p className="text-red-500">{errors.avatar.message}</p>
      )}

      <label className="flex items-center space-x-5 justify-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
          className="h-5 w-5 text-holiblue border-holiblue rounded focus:ring-2 focus:ring-holiblue"
        />
        <span className="font-ndo text-md">I want to be a Venue Manager</span>
      </label>

      <input
        className="h-16 rounded-full bg-zinc-800 border border-holiblue hover:bg-holiblue hover:text-black hover:scale-105 uppercase font-medium tracking-widest font-dm text-xl transition-all duration-800 cursor-pointer"
        type="submit"
        value="Create Account"
      />
      {signUpError && <p className="text-red-500">{signUpError}</p>}
    </form>
  );
};
