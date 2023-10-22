import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    onSearch(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="mb-14">
      <form>
        <div>
          <input
            className="px-4 py-1 rounded-full bg-zinc-100 text-black font-dm font-semibold tracking-widest"
            type="text"
            name="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </form>
    </div>
  );
};
