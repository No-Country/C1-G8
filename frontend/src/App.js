import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Board from "./components/Board";
import Exchange from "./components/Exchange";
import Wallet from "./components/Wallet";
import About from "./components/About";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

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
            <div className="App">
              <ThemeMode />
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/board" element={<Board />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
