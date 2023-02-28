import React from "react";
import '../css/HomePage.css';
import stars from '../images/stars.svg';
import NavBar from "./NavBar";
import { Icon } from '@iconify/react';
import { useRef, useEffect, useState } from 'react';
function HomePage() {

  const myRef = useRef();
  const [isVisible, setIsVisible] = useState();
  // console.log('is visible', isVisible);
  const options = {
    // rootMargin: "-50px",
    threshold: 0,
  } ;


  useEffect(() => {
    const sections = document.querySelectorAll(".project-links.mx-auto");
    console.log(sections);
    const observer = new IntersectionObserver ((entries,options) => {
      entries.forEach((entry) => {
        console.log(entry.target);
        setIsVisible(entry.isIntersecting)
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }else{
          entry.target.classList.remove('show');
        }
      })
    
    },options) 
    
    sections.forEach(section => {
      observer.observe(section);
    });
    // observer.observe(myRef.current)
  }, [])

  return (
    
    <div style={{ width: '100%', height: '100%'}}>
      
      {/* <Parallax pages={2.5} className="background">
       

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
          I want to create products or services that help people, especially the elders, where these things are not as accessible. 
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
                      Easy Trader is a stock market simular with beginner friendly UI, we want users to learn how to trade
                      without the risk of losing actual money.  

                      <br></br>
                      <br></br>   

                      Being a part of a team of three I contributed by designing and creating the frontend. 
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
                    OneBite is an online restaurant order and delivery system so that 
                    OneBite can provide a menu, customers can browse and order 
                    the food, and as well as delivery.

                    <br></br>
                    <br></br>

                    Being a part of a team of four I contributed by doing the frontend for the application and worked on the 
                    backend for the Chef to edit, add, delete items from the menu.
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
                      Coffee Run is a 2D game where a cute, peaceful, extraterrestrial, and ethereal being, Ember, has the ability
                      to see the yin in yang. Darkness in light. The evil in the world is seeping through the floor, creating cracks
                      in the ground. Ember can discover these holes by interacting with the environment. Ember & other assets were 
                      created using Piskel and the game itself was created using Unity.
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
                    Magical Walk is a 3D game and it is like a magical walk through. However, the waterfall that provides the 
                    surrounding area with water has stopped flowing. To make the water start flowing again the player
                    has to go down three paths turning on each lantern in each path. Magical Walk was created using Unity
                    and the assets were from the Unity Store.
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
                    Mini-Might is where the player finds themselves minaturized in a forest and an evil villan is the cause
                    of making everyone minaturized! The player has to get to the evil boss, defeat him and obtain a ray that will
                    enlarge the player and everyone again!

                    <br></br>
                    <br></br>

                    Being a part of a team of four I was in charge of the UI & display as well as the Drawing and animations
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
                    Toodaloo is a toilet application for New York City! Whenever you have to use the bathroom in the city
                    but you can not find a place to go, Toodaloo, saves the day.

                    <br></br>
                    <br></br>

                    Being a part of a team of 3, I contributed by working on UI, and
                    multiple pages of the appliation as well as the navigation bar.
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </ParallaxLayer>


     </Parallax>  */}
      <div className="background">
        <div className="background-image">
          <div className="intro-container">
            <div id="me">
            <NavBar />
            <div className="container">
              <div id="intro-name">Hi, I'm</div>
              <h1 id="name">Jessie Su </h1>
              <h2 id="title">Junior Software Engineer</h2>
              <div id="icons">
                <div className="icon-spacing bob">
                  <a href="https://github.com/JessieSu2" target="_blank" rel="noopener noreferrer">
                    <Icon icon="uit:github-alt" alt="GitHub: JessieSu2" className="intro-icons bob"/>
                  </a>
                </div>
                <div className="icon-spacing">
                  <a href="https://www.linkedin.com/in/jessiesu01/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="bi:linkedin"  alt="LinkedIn: Jessiesu01" className="intro-icons bob"/>
                  </a>
                </div>
                <div className="icon-spacing">
                  <a href="mailto:jessiesu3@gmail.com">
                    <Icon icon="octicon:mail-24"  alt="Email: JessieSu3@gmail.com" className="intro-icons bob"/>
                  </a>
                </div>
              </div>
            </div>
            </div>

            <div className="what-do-container">
              <div className="what-do mx-auto">
                I've always been interested in the vast capabilities of technology, whether it be gaming, accessibility, or innovation. 
                Games can teach people about mental health and problems in the world or simply for enjoyment. 
                I love that technology can make people's lives easier through software or engineering. 
                I want to create products or services that help people, especially the elders, where these things are not as accessible. 
                Creating something that no one thought about before or something that will be the next big thing is fascinating. 
                One small idea can turn into something big!
              </div>
            </div>
           
          </div>


          <div ref={myRef} className="projects section">
            <h1 className="project-title-section section mx-auto">Latest Projects</h1>
            <ul className="project-links-ul">          

              <li className="project-links hidden mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Easy Trader</div>
                    <a href="https://github.com/jingshiliu/easy-trader-ctp" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                      <Icon icon="uit:github-alt"  className="projects-icon bob" />
                    </a>
                  </div>
                  <div className="project-description">
                      Easy Trader is a stock market simular with beginner friendly UI, we want users to learn how to trade
                      without the risk of losing actual money.  

                      <br></br>
                      <br></br>   

                      Being a part of a team of three I contributed by designing and creating the frontend. 
                  </div>
                </div>
              </li>

              <li className="project-links hidden mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">One Bite</div>
                    <a href="https://github.com/JessieSu2/CSC322-OneBite" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                      <Icon icon="uit:github-alt"  className="projects-icon bob"/>
                    </a>
                  </div>
                  <div className="project-description">
                    OneBite is an online restaurant order and delivery system so that 
                    OneBite can provide a menu, customers can browse and order 
                    the food, and as well as delivery.

                    <br></br>
                    <br></br>

                    Being a part of a team of four I contributed by doing the frontend for the application and worked on the 
                    backend for the Chef to edit, add, delete items from the menu.
                  </div>
                </div>

              </li>

              <li className="project-links hidden mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Coffee Run</div>
                    <a href="https://github.com/JessieSu2/CoffeeRun_Game" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                      <Icon icon="uit:github-alt"  className="projects-icon bob"/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=vSUM_U1Rjfk&ab_channel=Jessie" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                      <Icon icon="ph:youtube-logo-thin"  className="projects-icon bob"/>
                    </a>
                  </div>
                  <div className="project-description">
                      Coffee Run is a 2D game where a cute, peaceful, extraterrestrial, and ethereal being, Ember, has the ability
                      to see the yin in yang. Darkness in light. The evil in the world is seeping through the floor, creating cracks
                      in the ground. Ember can discover these holes by interacting with the environment. Ember & other assets were 
                      created using Piskel and the game itself was created using Unity.
                  </div>
                </div>
                
              </li>

              <li className="project-links hidden mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Magical Walk</div>
                      <a href="https://github.com/JessieSu2/MagicalWalk" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                        <Icon icon="uit:github-alt"  className="projects-icon bob"/>
                      </a>
                      <a href="https://www.youtube.com/watch?v=uMG2iKQ3erE&ab_channel=Jessie" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                        <Icon icon="ph:youtube-logo-thin"  className="projects-icon bob"/>
                      </a> 
                  </div>
                  <div className="project-description">
                    Magical Walk is a 3D game and it is like a magical walk through. However, the waterfall that provides the 
                    surrounding area with water has stopped flowing. To make the water start flowing again the player
                    has to go down three paths turning on each lantern in each path. Magical Walk was created using Unity
                    and the assets were from the Unity Store.
                  </div>

                </div>
                
              </li>

              <li className="project-links hidden mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Mini-Might</div>  
                    <div className="project-icon-container">
                      <a href="https://github.com/JessieSu2/Mini-Might" target="_blank" rel="noopener noreferrer" className="project-icon-container" >
                        <Icon icon="uit:github-alt" className="projects-icon bob"/>
                      </a>
                      <a href="https://www.youtube.com/watch?v=8y-iWIHSUsE&ab_channel=Jessie" target="_blank" rel="noopener noreferrer" className="project-icon-container">
                        <Icon icon="ph:youtube-logo-thin" className="projects-icon bob"/>
                      </a>
                    </div>
                  </div>
                  <div className="project-description">
                    Mini-Might is where the player finds themselves minaturized in a forest and an evil villan is the cause
                    of making everyone minaturized! The player has to get to the evil boss, defeat him and obtain a ray that will
                    enlarge the player and everyone again!

                    <br></br>
                    <br></br>

                    Being a part of a team of four I was in charge of the UI & display as well as the Drawing and animations
                  </div>
                </div>
              </li>
                
              <li className="project-links hidden mx-auto">
                <div className="project-container">
                  <div className="title-icon-container">
                    <div className="projects-title">Toodaloo</div>
                      <a href="https://github.com/too-da-loo/toodaloo" target="_blank" rel="noopener noreferrer" className="project-icon-container"> 
                        <Icon icon="uit:github-alt" className="projects-icon bob"/>
                      </a>
                  </div>
                  <div className="project-description">
                    Toodaloo is a toilet application for New York City! Whenever you have to use the bathroom in the city
                    but you can not find a place to go, Toodaloo, saves the day.

                    <br></br>
                    <br></br>

                    Being a part of a team of 3, I contributed by working on UI, and
                    multiple pages of the appliation as well as the navigation bar.
                  </div>
                </div>
              </li>

            </ul>
          </div>

        </div>
        </div>
      </div>
      
  );
}
export default HomePage;