import { GridLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <GridLoader color="#FF7DF8" size={20} margin={5} speedMultiplier={2} />
    </div>
  );
}