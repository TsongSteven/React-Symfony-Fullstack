import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>iLoveTouring</div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login/Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
