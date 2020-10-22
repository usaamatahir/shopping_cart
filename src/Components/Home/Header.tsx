import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerSection">
      <Grid container justify="flex-end" alignItems="center" className="header">
        <Grid item md={6} xs={12}>
          <h1>Welcome to shoe store</h1>
          <h2>Buy quality products</h2>
          <div className="btn">
            <a className="buyBtn" href="#Content">
              Buy now
            </a>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <img
            className="headerImg"
            src={require("./Image/header.png")}
            alt="header"
          />
        </Grid>
      </Grid>
      <div className="fadeBottom"></div>
    </div>
  );
};

export default Header;
