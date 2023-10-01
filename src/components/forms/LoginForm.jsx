import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="mx-auto border border-holiblue p-5 rounded-xl max-w-xl w-[80%]">
      <form onSubmit={ handleSubmit((data) => {
        console.log(data)
      })} className="flex flex-col gap-10 w-full p-5">
        <input className="h-14 rounded-md p-3 bg-zinc-700" {...register("email")} placeholder="E-mail" />
        <input className="h-14 rounded-md p-3 bg-zinc-700" {...register("password")} placeholder="Password" />
        <input className="h-16 rounded-full bg-zinc-800 border border-holipink hover:bg-holipink hover:text-black hover:scale-105 uppercase font-medium tracking-widest font-dm text-xl transition-all duration-800 cursor-pointer" type="submit" value="login" />
      </form>
    </div>
  );
}
