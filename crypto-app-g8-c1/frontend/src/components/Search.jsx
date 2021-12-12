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
    <div>
      <FormControl
        component={Paper}
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
