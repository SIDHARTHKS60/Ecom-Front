import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login1 from "./components/Login1";
import Signup from "./components/Signup";
import Products from "./components/Products"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Login" element={<Login1 />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Products" element={<Products />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;