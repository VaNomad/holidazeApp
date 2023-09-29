import { GridLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center mx-auto">
      <GridLoader color="#FF7DF8" size={25} />
    </div>
  );
}