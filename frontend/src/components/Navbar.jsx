import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Navbar = () => {
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
                </div>
            </div>
        </nav>
  );
};

export default Navbar;
