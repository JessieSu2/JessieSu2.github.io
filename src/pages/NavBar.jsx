import React from "react";
import '../css/NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (

    <nav className="navbar">
      <div className="navbarContainer">
        <div className="navbarToggle" id="mobileMenu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div> 
        <ul className="navbarMenu">
          <li className="navbarItem">
            <Link className="nav-link" to="/Home">Home</Link>
            {/* <Link className="nav-link" to="/AboutMe">About Me</Link> */}
          </li>
          <li className="navbarItem">
            <Link className="nav-link" to="/AboutMe">About Me</Link>
            {/* <a className="nav-link" href="aboutme.html">About Me</a> */}
          </li>
          <li className="navbarItem">
            {/* <Link className="nav-link" to="/Hobbies">Hobbies</Link> */}
            {/* <a className="nav-link" href="hobbies.html">Hobbies</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;