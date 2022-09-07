import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/NewLogo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      {/* Another Navbar */}

      <div className={classes.navContainer}>
        <div>
          <img src={logo} alt="Thyrocare Logo" />
        </div>
        <div>
          <input type="text" placeholder="Search for a test or a profile" />
        </div>
        <div></div>
      </div>

      {/* Slider Image */}

      <div>
        <div>Image Slider</div>
        <div>Request Form</div>
      </div>
    </header>
  );
};

export default Header;
