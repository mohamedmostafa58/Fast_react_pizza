import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setquery] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setquery("");
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setquery(e.target.value);
        }}
        className="capitalize text-stone-800 text-sm py-2 px-2 rounded-xl w-32 focus:outline-none sm:w-80 sm:focus:w-96 transition-all duration-300"
        placeholder="search order #"
      />
    </form>
  );
};

export default SearchOrder;
