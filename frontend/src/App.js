import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Board from "./components/Board";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/board" component={Board} />
            <Route path="/about" component={About} />
          </Switch>
          <Home />
          <Board />
          <About />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
