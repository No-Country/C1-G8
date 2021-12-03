import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        height: "85px",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "10px 0px 20px",
      }}
    >
      <div
        style={{
          width: "80px",
        }}
      ></div>

      <div>
        <Box component={Paper}>
          <Link to="/">
            <div
              style={{
                width: "80px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Home.img
            </div>
          </Link>
        </Box>
        <Box component={Paper}>
          <div
            style={{
              width: "80px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/board">Board</Link>
          </div>
        </Box>
      </div>
      <div>
        <Box component={Paper}>
          <div
            style={{
              width: "80px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/exchange">Exchange</Link>
          </div>
        </Box>

        <Box component={Paper}>
          <Link to="/wallet">
            <div
              style={{
                width: "80px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              WallET
            </div>
          </Link>
        </Box>
      </div>
      <Box component={Paper}>
        <div
          style={{
            width: "80px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/about">About</Link>
        </div>
      </Box>
      <div>
        <Register />
        <Login />
        <Logout />
      </div>
    </nav>
  );
};

export default Navbar;
