import React from "react";
import { Link } from "react-router-dom";
import classes from "./AdminHeader.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Admin</div>
      <nav>
        <ul>
          <li>
            <Link to={"/admin"}>Homes</Link>
          </li>
          <li>
            <Link to={"/admin/post-list"}>Posts</Link>
          </li>
          <li>
            <Link to={"/admin/add-post"}>Add Post</Link>
          </li>
          <li>
            <Link to={"/admin/add-country"}>Add Country</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
