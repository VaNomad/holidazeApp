import { PiTabs } from "react-icons/pi";

export const TabsBtn = () => {
  const scrollToTop = () => {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={scrollToTop}
        className="border-[3px] border-black bg-holipink hover:bg-black text-black hover:text-holipink font-bold p-2 rounded-full hover:scale-105 transition-all duration-300"
      >
        <PiTabs size={20} />
      </button>
    </div>
  );
};
