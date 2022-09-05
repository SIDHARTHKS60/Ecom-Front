import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import HomePage from "./components/homepage"

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
           

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/sign-up" element={<SignUp />} />
              <Route exact path="/homepage" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
