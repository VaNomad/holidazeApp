import { useState } from "react";
// import { BsSearchHeart } from "react-icons/bs";

export const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    onSearch(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="mb-2 mt-16">
      <form>
        <input
          className="px-4 py-1 rounded-full bg-zinc-700 border-2 border-zinc-600 font-dm tracking-widest"
          type="text"
          name="text"
          placeholder="Search venues..."
          value={search}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};
