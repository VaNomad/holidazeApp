import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";

export const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    onSearch(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="mb-2 mt-16">
      <form>
        <div className="flex items-center justify-center gap-2">
          <input
            className="px-4 py-1 rounded-full bg-zinc-700 border-2 border-zinc-600 font-dm tracking-widest"
            type="text"
            name="text"
            placeholder="Search venues..."
            value={search}
            onChange={handleSearch}
          />
          <button
            onClick={handleSearch}
            className="flex items-center bg-none border-2 border-holiblue bg-holiblue font-semibold rounded-full p-2  text-black font-alli text-xl hover:bg-black hover:text-holiblue hover:scale-105 transition-all duration-300"
          >
            <BsSearchHeart size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};
