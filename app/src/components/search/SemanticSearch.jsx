import { useState } from "react";

function SemanticSearch() {

  const [query, setQuery] = useState("");

  function handleSearch() {
    console.log("Searching for:", query);
  }

  return (
    <div className="p-4 border-b border-greyBlue">

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search across your papers..."
        className="w-full border border-greyBlue rounded-lg px-3 py-2 outline-none"
      />

      <button
        onClick={handleSearch}
        className="mt-2 bg-accent text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>

    </div>
  );
}

export default SemanticSearch;