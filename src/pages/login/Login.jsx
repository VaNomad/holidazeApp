import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-2xl">Login</h1>
      <Link to="/signUp" className="relative top-[30%] left-0 right-0 m-auto">
        <h1 className="flex justify-center underline text-blue-800">
          No account? SignUp here
        </h1>
      </Link>
    </div>
  );
};
