import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit, trigger, formState: { errors }, } = useForm();
  // const validateAndSet = (name, value) => {
  //   setValue(name, value);
  //   register(name);
  // }

  return (
    <div className="mx-auto border border-holiblue p-5 rounded-xl max-w-xl w-[80%]">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
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
          onBlur={() => {trigger("email")}}
          
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
          onBlur={() => {trigger("password")}}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <input
          className="h-16 rounded-full bg-zinc-800 border border-holipink hover:bg-holipink hover:text-black hover:scale-105 uppercase font-medium tracking-widest font-dm text-xl transition-all duration-800 cursor-pointer"
          type="submit"
          value="login"
        />
      </form>
    </div>
  );
}
