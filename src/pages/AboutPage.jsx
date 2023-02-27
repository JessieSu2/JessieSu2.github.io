import React from "react";
import NavBar from "./NavBar";
import '../css/AboutMe.css';


function AboutPage() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>About Me</title>
      
      <div className="background-AboutMe">
        <NavBar/>
        <div className="intro">
          <div className="image mx-auto">
            <img className="profile-image" src={require("../images/JessieSuProfile.jpg")} alt="Jessie Profile Picture" />
          </div>
           
          <div id="aboutme" className="mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;