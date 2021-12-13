import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// Redux
//import { useSelector } from "react-redux";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import { DataContext } from "../context/DataProvider";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/actions/userActions";

export const NavMenu = () => {

  const dispatch = useDispatch()
  const Navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const value = useContext(DataContext)
  const [user,setUser] = value.user
  const logged = useSelector(state=>state.user.logged)

  //const logged = useSelector((state) => state.user.logged);
  const currentLocation = window.location.pathname

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const logout = (e)=>{
    const { name, id } = user
    e.preventDefault()
    dispatch(logoutAction(name,id))
    setUser({})
    localStorage.removeItem('data')
    Navigate('/')
  }

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
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item"><Link className="nav-link" to='/board'>Board</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/about'>About</Link></li>
            {user && user.token && <li className="nav-item"><Link className="nav-link" to='/my-wallet'>My Wallet</Link></li>}
            {
              user && user.token ?
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to={currentLocation} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Welcom {user.name}
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link class="dropdown-item" to='/' onClick={logout}>Logout</Link></li>
                  </ul>
                </li>
                :
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to={currentLocation} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Acount
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link class="dropdown-item" to='/login'>Login</Link></li>
                    <li><Link class="dropdown-item" to='/register'>Register</Link></li>
                  </ul>
                </li>
            }
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
