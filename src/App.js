import Register from "./components/Register";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import VehicleDetails from "./components/VehicleDetails";
//import Endpoint from "./Endpoint/endpoint"
import Home from "./components/Home";
import InsuranceBooking from "./components/InsuranceBooking";
import Login from "./components/Login";
import Payment from "./components/Payment";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Product" element={<VehicleDetails />} />
            <Route exact path="/InsuranceBooking" element={<InsuranceBooking />}/>
            <Route exact path="/Payment" element={<Payment />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;