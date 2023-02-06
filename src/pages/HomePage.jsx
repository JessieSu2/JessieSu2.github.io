import React from "react";
import '../css/homePage.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import stars from '../images/stars.svg';
import NavBar from "./NavBar";
function HomePage() {
  return (
    
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&family=Jura:wght@300;400&family=Roboto:wght@100&family=Silkscreen&family=Space+Mono&display=swap" rel="stylesheet" />
      <Parallax pages={2} className="background">
        <ParallaxLayer 
        offset={0} 
        speed={1} 
        style={{
          backgroundImage:`url(${stars})`,
          backgroundSize:'cover',
          }}
        factor={2}/>

        <ParallaxLayer>
          <div id="me">
            <NavBar />
            <div className="container">
              <h1 id="name">Jessie Su </h1>
              <h2 id="title">Junior Software Engineer</h2>
              <div id="icons">
                <div id="github">
                  <a href="https://github.com/JessieSu2" target="_blank" rel="noopener noreferrer">
                    <img src={require("../images/arcticons_github.png")} alt="Github" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/jessiesu01/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../images/akar-icons_linkedin-box-fill.png")} alt="Linkedin" />
                  </a>
                </div>
                <div>
                  <a href="mailto:jessiesu3@gmail.com">
                    <img src={require("../images/carbon_email.png")} alt="Jessiesu3@gmail.com" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.99} speed={0.5}>
          <div className="projects">
            <h1>Latest Projects</h1>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=vSUM_U1Rjfk&ab_channel=Jessie">Coffee Run</a></li>
              <li><a href="https://www.youtube.com/watch?v=uMG2iKQ3erE&ab_channel=Jessie">Magical Walk</a></li>
              <li><a href="https://www.youtube.com/watch?v=8y-iWIHSUsE&ab_channel=Jessie">Mini-Might</a></li>
            </ul>
          </div>
        </ParallaxLayer>


      </Parallax>


      </div>
      
  );
}
export default HomePage;