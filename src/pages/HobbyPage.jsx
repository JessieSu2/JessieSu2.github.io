import React from "react";
import NavBar from "./NavBar";
import '../css/Hobby.css';

function HobbyPage() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <title>Hobbies</title>
      <div className="background">
        <NavBar/>
        Hoobies
      </div>
    </div>
  );
}

export default HobbyPage;