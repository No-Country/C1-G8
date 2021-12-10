import { Link } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// Redux
//import { useSelector } from "react-redux";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";

export const NavMenu = () => {
  const Navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  //const logged = useSelector((state) => state.user.logged);

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      Swal.fire("Error", "Please enter a search term", "error");
    } else {
      Navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3`} id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to='/'>Home</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><Link className="nav-link" to='/board'>Board</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/about'>About</Link></li>
                    </ul>
                    <form class="d-flex" onSubmit={handleSubmit}>
            <input
              class="form-control me-2"
              type="text"
              value={search}
              placeholder="Search to crypto"
              aria-label="Search"
              onChange={handleChange}
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
                </div>
            </div>
        </nav>
   
  );
};
