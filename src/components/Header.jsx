import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../images/logo.png";
import MuiAlert from "@mui/material/Alert";

const Header = () => {
  const token = localStorage.getItem("token");
  let loggedInUser = localStorage.getItem("loggedInUser");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  useEffect(() => {
    loggedInUser = localStorage.getItem("loggedInUser");
  }, []);

  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ background: "#fff", margin: 0 }}>
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <img src={Logo} style={{ width: 250 }} />

          {localStorage.getItem("role") !== "ADMIN" && (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "10%",
                marginTop: 7,
              }}
            >
              <Button onClick={() => navigate("/")} sx={{ color: "blue" }}>
                Home
              </Button>

              <Button
                onClick={() => window.location.replace("/#about")}
                sx={{ color: "#000" }}
              >
                About Us
              </Button>

              <Button
                onClick={() => window.location.replace("/#work")}
                sx={{ color: "#000" }}
              >
                Our Work
              </Button>

              <Button
                onClick={() => window.location.replace("/#task")}
                sx={{ color: "#000" }}
              >
                Tasks
              </Button>

              <Button
                onClick={() => setContactDialogOpen(true)}
                sx={{ color: "#000" }}
              >
                CART
              </Button>

              <Button
                onClick={() => navigate("/login-register")}
                sx={{ color: "blue" }}
              >
                Sign Up
              </Button>
            </Box>
          )}
          <Box display="flex" sx={{ flex: 1 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;