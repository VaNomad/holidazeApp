import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForm";

export const Login = () => {
  return (
    <div className="mt-16">
      <LoginForm />
      <Link to="/signUp" className="relative top-[30%] left-0 right-0 m-auto">
        <h1 className="flex justify-center underline text-blue-800">
          No account? SignUp here
        </h1>
      </Link>
    </div>
  );
};
