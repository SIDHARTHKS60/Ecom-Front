import React from "react";
import ins from "../img/insurance.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav className="shadow-sm">
        <Bars />

        <NavMenu>
          <NavLink to="/Home" activestyle style={{ marginRight: "100px" }}>
            <img src={ins} style={{ height: "50px" }} />
            <h3 style={{ paddingTop: "10px" }}>E-COMMERCE</h3>
          </NavLink>
          <br />
          <NavLink to="/Home" exact activestyle>
            Home
          </NavLink>
          <NavLink to="/Login" exact activestyle>
            Login
          </NavLink>
          <NavLink to="/Register" exact activestyle>
            Register
          </NavLink>
          <NavLink to="/Products" exact activestyle>
            Products
          </NavLink>
          <NavLink to="/Cart" exact activestyle>
            Cart
          </NavLink>
          <NavLink to="/Payment" exact activestyle>
            Payment
          </NavLink>
          {/* <NavLink><button type="submit" className="btn btn-danger">Log Out</button></NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
