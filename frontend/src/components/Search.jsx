import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      const { data } = await axios.get(`http://localhost:4000/api/${search}`);

      if (data.results) {
        setCoin(data.results);
      } else {
        setCoin(data);
      }
    })();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input type="text" onChange={handleChange} value={search} />
        <button>Search</button>
      </form>
      <p>{coin.name}</p>
      <p>{coin.symbol}</p>
    </div>
  );
};

export default Search;
