import { BsSearchHeart } from "react-icons/bs";

export const BtnFull = () => {
  return (
    <button
      className="flex items-center bg-none border-2 border-holiblue bg-holiblue font-semibold rounded-full p-2  text-black font-alli text-xl hover:bg-black hover:text-holiblue hover:scale-105 transition-all duration-300"
    >
      <BsSearchHeart size={18} />
    </button>
  );
};
