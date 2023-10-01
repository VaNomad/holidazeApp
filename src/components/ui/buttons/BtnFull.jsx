import { TbArrowRight } from "react-icons/tb";

export const BtnFull = () => {
  return (
    <button className="flex items-center justify-between rounded-full bg-holipink py-2 px-6 my-4 text-black tracking-widest font-dm text-[18px]">
      Check Availability
      <TbArrowRight className="ms-4" />
    </button>
  );
};
