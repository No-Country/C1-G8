import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Board from "./components/Board";
import About from "./components/About";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
