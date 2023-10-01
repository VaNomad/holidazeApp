import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="border border-holiblue p-5 m-5 rounded-xl">
      <form onSubmit={ handleSubmit((data) => {
        console.log(data)
      })} className="flex flex-col gap-4">
        <input className="h-10 rounded-md p-3 bg-zinc-700" {...register("email")} placeholder="E-mail" />
        <input className="h-10 rounded-md p-3 bg-zinc-700" {...register("password")} placeholder="Password" />
        <input className="h-10 rounded-full bg-holipink text-black uppercase font-medium tracking-widest font-dm" type="submit" value="login" />
      </form>
    </div>
  );
}
