import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.navIcon}>ICONS</div>
      <ul>
        <li>
          <a href="#">Refer Friend</a>
        </li>
        <li>
          <a href="#">Join Franchise</a>
        </li>
        <li>
          <a href="#">Book Covid Test</a>
        </li>
        <li>
          <a href="#">Order Reports</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
