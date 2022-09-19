import React from "react";
import ins from "../images/logo.jpg";
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
          <NavLink to="/Home" activestyle style={{ marginRight: "10px", marginLeft:"20px" }}>
            <img src={ins} style={{ height: "80px" }} />
            <h3 style={{ paddingTop: "10px",color:"blue", marginLeft:"20px" }} >E-COMMERCE</h3>
          </NavLink>
          <br />
          <NavLink to="/Home" exact activestyle>
            HOME
          </NavLink>
          <NavLink to="/Login" exact activestyle>
           LOGIN
          </NavLink>
          <NavLink to="/Signup" exact activestyle>
            SIGNUP
          </NavLink>
          <NavLink to="/Products" exact activestyle>
            PRODUCTS
          </NavLink>
          <NavLink to="/Cart" exact activestyle>
            CART
          </NavLink>
          <NavLink to="/Payment" exact activestyle>
            PAYMENT
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;