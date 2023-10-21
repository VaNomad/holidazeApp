import { useState } from "react";
// import { BsSearchHeart } from "react-icons/bs";

export const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    onSearch(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="mb-14">
      <form>
        <input
          className="px-4 py-1 rounded-full bg-zinc-100 text-black font-alli font-semibold tracking-widest"
          type="text"
          name="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};
