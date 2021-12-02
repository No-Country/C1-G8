import React, { useState } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const Search = () => {
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${search}`
      );

      if (data.results) {
        setCoin(data.results);
      } else {
        setCoin(data);
      }
    })();
  };

  return (
    <div>
      <p>{coin.name}</p>
      <p>{coin.symbol}</p>
      <FormControl
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          id="standard-basic"
          label="Standard"
          variant="outlined"
          type="text"
          onChange={handleChange}
          value={search}
        />
      </FormControl>
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
    </div>
  );
};

export default Search;
