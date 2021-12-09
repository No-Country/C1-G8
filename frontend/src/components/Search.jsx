import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import React from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const Navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className='p-4 m-4'
    >
      <div className='form-group'>
        <input type="text" class="form-control" placeholder='Search cryptocurrencies...' onChange={handleChange} value={search} />
        <button className='btn btn-primary'>Search</button>
      </div>
    </form>

  );
};

export default Search;
