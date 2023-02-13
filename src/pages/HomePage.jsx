import React from "react";
import '../css/HomePage.css';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import stars from '../images/stars.svg';
import NavBar from "./NavBar";
import { Icon } from '@iconify/react';

function HomePage() {
  return (
    
    <div style={{ width: '100%', height: '100%'}}>
      
      <Parallax pages={2.5} className="background">
       

        <ParallaxLayer 
        offset={0} 
        speed={1} 
        style={{
          backgroundImage:`url(${stars})`,
          backgroundSize:'cover',
          }}
        factor={3}/>

        
        <ParallaxLayer offset={0} speed ={0.3}>
          <div id="me">
             <NavBar />
            <div className="container">
              <div id="intro-name">Hi, I'm</div>
              <h1 id="name">Jessie Su </h1>
              <h2 id="title">Junior Software Engineer</h2>
              <div id="icons">
                <div className="icon-spacing">
                  <a href="https://github.com/JessieSu2" target="_blank" rel="noopener noreferrer">
                    <Icon icon="uit:github-alt" color="white" width="48" height="48" alt="GitHub: JessieSu2"/>
                  </a>
                </div>
                <div className="icon-spacing">
                  <a href="https://www.linkedin.com/in/jessiesu01/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="bi:linkedin" color="white" width="48" height="48" alt="LinkedIn: Jessiesu01"/>
                  </a>
                </div>
                <div className="icon-spacing">
                  <a href="mailto:jessiesu3@gmail.com">
                    <Icon icon="octicon:mail-24" color="white" width="48" height="48" alt="Email: JessieSu3@gmail.com"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.77} speed={0.5}>
          <div className="what-do mx-auto">
          I've always been interested in the vast capabilities of technology, whether it be gaming, accessibility, or innovation. 
          Games can teach people about mental health and problems in the world or simply for enjoyment. 
          I love that technology can make people's lives easier through software or engineering. 
          I want to create things that help people, especially the elders, where things are not as accessible. 
          Creating something that no one thought about before or something that will be the next big thing is fascinating. 
          One small idea can turn into something big!

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.25} speed={0.8}>
          <div className="projects">
            <h1 className="project-title-section mx-auto">Latest Projects</h1>
            <ul className="project-links-ul">          

              <li className="project-links mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Easy Trader</div>
                    <a href="https://github.com/jingshiliu/easy-trader-ctp" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                      <Icon icon="uit:github-alt"  className="projects-icon"/>
                    </a>
                  </div>
                  <div className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                     aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                     non proident, sunt in culpa qui officia deserunt mollit anim id est 
                     laborum.
                  </div>
                </div>
              </li>

              <li className="project-links mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">One Bite</div>
                    <a href="https://github.com/JessieSu2/CSC322-OneBite" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                      <Icon icon="uit:github-alt"  className="projects-icon"/>
                    </a>
                  </div>
                  <div className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                     aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                     non proident, sunt in culpa qui officia deserunt mollit anim id est 
                     laborum.
                  </div>
                </div>

              </li>

              <li className="project-links mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Coffee Run</div>
                    <a href="https://github.com/JessieSu2/CoffeeRun_Game" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                      <Icon icon="uit:github-alt"  className="projects-icon"/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=vSUM_U1Rjfk&ab_channel=Jessie" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                      <Icon icon="ph:youtube-logo-thin"  className="projects-icon"/>
                    </a>
                  </div>
                  <div className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                     aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                     non proident, sunt in culpa qui officia deserunt mollit anim id est 
                     laborum.
                  </div>
                </div>
                
              </li>

              <li className="project-links mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Magical Walk</div>
                      <a href="https://github.com/JessieSu2/MagicalWalk" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                        <Icon icon="uit:github-alt"  className="projects-icon"/>
                      </a>
                      <a href="https://www.youtube.com/watch?v=uMG2iKQ3erE&ab_channel=Jessie" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                        <Icon icon="ph:youtube-logo-thin"  className="projects-icon"/>
                      </a> 
                  </div>
                  <div className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                     aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                     non proident, sunt in culpa qui officia deserunt mollit anim id est 
                     laborum.
                  </div>

                </div>
                
              </li>

              <li className="project-links mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Mini-Might</div>  
                    <div className="project-icon-container">
                      <a href="https://github.com/JessieSu2/Mini-Might" target="_blank" rel="noopener noreferrer" className="project-icon-container" >
                        <Icon icon="uit:github-alt" className="projects-icon"/>
                      </a>
                      <a href="https://www.youtube.com/watch?v=8y-iWIHSUsE&ab_channel=Jessie" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                        <Icon icon="ph:youtube-logo-thin" className="projects-icon"/>
                      </a>
                    </div>
                  </div>
                  <div className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                     aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                     non proident, sunt in culpa qui officia deserunt mollit anim id est 
                     laborum.
                  </div>
                </div>
              </li>
                
              <li className="project-links mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Toodaloo</div>
                      <a href="https://github.com/too-da-loo/toodaloo" target="_blank" rel="noopener noreferrer" className="project-icon-container"> 
                        <Icon icon="uit:github-alt" className="projects-icon"/>
                      </a>
                  </div>
                  <div className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                     aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                     non proident, sunt in culpa qui officia deserunt mollit anim id est 
                     laborum.
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </ParallaxLayer>


      </Parallax>


      </div>
      
  );
}
export default HomePage;