import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "@popperjs/core";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import { NavMenu } from "./components/NavMenu";

import { DataProvider } from "./context/DataProvider";

import Board from "./page/Board";
import Wallet from "./page/Wallet";
import Exchange from "./page/Exchange";
import { Details } from "./page/Details";
import { SearchDetails } from "./page/SearchDetails";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { FormLogin } from "./components/FormLogin";
import { FormRegister } from "./components/FormRegister";
import { BuyForm } from "./components/BuyForm";
import { EditForm } from "./components/EditForm";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ThemeMode() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        width: "75px",
        height: "00px",
        alignItems: "center",
        justifyContent: "left",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <DataProvider>
              <div className="app">
                <ThemeMode />
                <NavMenu />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/board" element={<Board />} />
                  <Route path="/exchange" element={<Exchange />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/coins/:id" element={<Details />} />
                  <Route path="/search/:id" element={<SearchDetails />} />
                  <Route path='/login' element={<FormLogin/>} />
                  <Route path='/register' element={<FormRegister/>} />
                  <Route path='/my-wallet' element={<Wallet/>} />
                  <Route path='/buy/:userId/:currencyId' element={<BuyForm/>} />
                  <Route path='/editwallet/:userId/:currencyId/:currencyName' element={<EditForm/>} />
                </Routes>
              </div>
            </DataProvider>
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
