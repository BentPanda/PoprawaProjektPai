import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <li>
        <NavLink to="/Game">
          <button className="GameButton">Start the game!</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/AboutAuthor">
          <span className="normalLink">About Author</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
      </li>
    </nav>
  );
}
