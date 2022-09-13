import React from "react";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Typography style={{ color: "green", }} variant="h5">
        ECOMMERCE SITE
      </Typography>
      <br />
      
      <Typography variant="p">
        <h2 style={{ width:"50%"}}>
          E-commerce Website. A website that allows people to buy and sell
          physical goods, services, and digital products over the internet
          rather than at a brick-and-mortar location. Through an e-commerce
          website, a business can process orders, accept payments, manage
          shipping and logistics, and provide customer service.
        </h2>
      </Typography>
    </div>
  );
};

export default About;
