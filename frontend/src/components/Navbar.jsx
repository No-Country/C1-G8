import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// Redux
import { useSelector } from "react-redux";

const Navbar = () => {
  const logged = useSelector((state) => state.user.logged);

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

      {logged ? (
        <>
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
                  Wallet
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
            <Logout />
          </div>
        </>
      ) : (
        <>
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
                <Link to="/board">Board</Link>
              </div>
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
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
