/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchId, setSearchId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchId);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter user ID"
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none "
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
