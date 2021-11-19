import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import "../styles/css/styles.css"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </>
  )
}

export default App;
