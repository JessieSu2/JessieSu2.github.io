import React from "react";
import "../css/HomePage.css";
import NavBar from "./NavBar";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import pdf from "../files/Jessie_Su_Resume.pdf";
import "../css/Master.css";
import Modal from "../components/modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function HomePage() {
  // console.log('is visible', isVisible);
  const options = {
    // rootMargin: "-50px",
    threshold: 0.25,
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".project-links");
    console.log(sections);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
    // observer.observe(myRef.current)
  }, []);

  useEffect(() => {
    const titles = document.querySelector(".project-title-section");
    console.log(title);
    const observertitles = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
        }
        // else{
        //   entry.target.classList.remove('slide-up');
        // }
      });
    }, options);

    observertitles.observe(titles);
  }, []);

  useEffect(() => {
    const figmaProjsLeft = document.querySelectorAll(".left");
    console.log(figmaProjsLeft);
    const observerLeft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("left-slide-in");
        }
        // else{
        //   entry.target.classList.remove('left-slide-in');
        // }
      });
    });

    figmaProjsLeft.forEach((left) => {
      observerLeft.observe(left);
    });
  }, []);

  useEffect(() => {
    const figmaProjsRight = document.querySelectorAll(
      ".figma-project-wrapper.right"
    );
    console.log(figmaProjsRight);
    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("right-slide-in");
        }
        // else{
        //   entry.target.classList.remove('right-slide-in');
        // }
      });
    });

    figmaProjsRight.forEach((right) => {
      observerRight.observe(right);
    });
  }, []);

  const [showNusketch, setShowNusketch] = React.useState(false);
  const [showNuLogo, setShowNuLogo] = React.useState(false);
  const [showET, setShowET] = React.useState(false);
  const [showCTP, setShowCTP] = React.useState(false);
  const [showPDS, setShowPDS] = React.useState(false);
  return (
    // style={{ width: '100%', height: '100%'}}
    <div>
      <div className="background">
        <div className="background-image">
          <section>
            <div className="intro-container">
              <div id="me">
                <NavBar />
                <div className="container">
                  <div id="intro-name">Hi, I'm</div>
                  <h1 id="name">Jessie Su </h1>
                  <h2 id="title">Junior Software Engineer</h2>
                  <div id="icons">
                    <div className="icon-spacing bob">
                      <a
                        href="https://github.com/JessieSu2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          icon="uit:github-alt"
                          alt="GitHub: JessieSu2"
                          className="intro-icons bob"
                        />
                      </a>
                    </div>
                    <div className="icon-spacing">
                      <a
                        href="https://www.linkedin.com/in/jessiesu01/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          icon="bi:linkedin"
                          alt="LinkedIn: Jessiesu01"
                          className="intro-icons bob"
                        />
                      </a>
                    </div>
                    <div className="icon-spacing">
                      <a href="mailto:jessiesu3@gmail.com">
                        <Icon
                          icon="octicon:mail-24"
                          alt="Email: JessieSu3@gmail.com"
                          className="intro-icons bob"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-me-container">
                <div className="about-me">
                  <div className="about">
                    <h2 className="about-title">About</h2>
                    <h1 className="title-prompt">Let me introduce myself</h1>

                    <div className="about-me-text what-do">
                      I'm a computer science major from City College of New
                      York, graduating in Spring 2023. I'm passionate about
                      software design and development, with experience in game,
                      web, and mobile app development. I am thrilled to continue
                      exploring the possibilities of computer science, and I am
                      always eager to learn and take on new challenges.
                    </div>
                  </div>

                  <div className="about-me-profile">
                    <h2>Profile</h2>
                    <div className="about-me-text what-do">
                      I am currently searching for a full-time position and I am
                      open to exploring opportunities in software engineering,
                      product ownership, startups, or any other roles that allow
                      me to learn and grow. While my background is primarily in
                      software design and development, I am also interested in
                      expanding my skills in other areas, such as game
                      development. If you think I am a good fit please contact
                      me via{" "}
                      <span className="about-me-span">JessieSu3@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="skills">
                    <h2>Skills</h2>
                    <div className="about-me-text what-do">
                      Having strong soft skills, I am able to work effectively
                      in a team and deliver high-quality results. With my
                      combination of technical and soft skills, I am confident
                      in my ability to tackle any challenge and create
                      meaningful solutions that make a difference.
                      <div className="technical-skills">
                        HTML, CSS, C++, Python, MySql, JavaScript,
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="what-do-container">
                <div className="what-do-title">
                  <h2 className="about-title">Why tech?</h2>
                  <h1 className="title-prompt">What got me into technology</h1>
                </div>
                <div className="what-do">
                  Since I was young, I've been captivated by the limitless
                  possibilities of technology. From gaming to accessibility to
                  innovation, I'm endlessly intrigued by how it can impact our
                  lives. Not only can games offer entertainment, but they can
                  also educate us about mental health and social issues.
                  Moreover, technology can enhance people's daily routines and
                  make life easier through software and engineering. Personally,
                  I aspire to develop products and services that assist those
                  who struggle with accessibility, particularly the elderly. The
                  prospect of conceiving an entirely new concept or creating the
                  next big thing is thrilling to me. It's amazing to think that
                  one small idea has the potential to grow into something
                  monumental!
                </div>
              </div>

              <div className="resume-button">
                <button className="button">
                  <a
                    href={pdf}
                    download
                    target="_blank"
                    className="button-href"
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="projects">
              <h2 className="project-title-section about-title">
                Latest Projects
              </h2>
              <h1 className="title-prompt slide-up">
                Some projects I have done
              </h1>
              <ul className="project-links-ul">
                <li className="project-links hidden">
                  <div className="corner-ribbon">
                    <div className="project-container">
                      <div className="corner-ribbon__inner">
                        <div className="corner-ribbon__ribbon">
                          <div className="ribbon-text">Collaborated</div>
                        </div>
                      </div>
                      <div className="title-icon-container">
                        <div className="projects-title">Easy Trader</div>
                        <a
                          href="https://github.com/jingshiliu/easy-trader-ctp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-container"
                        >
                          <Icon
                            icon="uit:github-alt"
                            className="projects-icon bob"
                          />
                        </a>
                      </div>
                      <div className="project-description">
                        Easy Trader is a stock market simulator with beginner
                        friendly UI, we want users to learn how to trade without
                        the risk of losing actual money.
                        <br></br>
                        <br></br>
                        Being a part of a team of three I contributed by
                        creating and designing the frontend.
                      </div>
                      <div className="every-bubble">
                        <div className="bubble-container">
                          <div className="bubble">Bootstrap</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">CSS</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Chart.js</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Express.js</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">FireBase</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">HTML</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Node.js</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">React.js</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="project-links hidden">
                  <div className="corner-ribbon">
                    <div className="project-container">
                      <div className="corner-ribbon__inner">
                        <div className="corner-ribbon__ribbon">
                          <div className="ribbon-text">Collaborated</div>
                        </div>
                      </div>
                      <div className="title-icon-container">
                        <div className="projects-title">One Bite</div>
                        <a
                          href="https://github.com/JessieSu2/CSC322-OneBite"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-container"
                        >
                          <Icon
                            icon="uit:github-alt"
                            className="projects-icon bob"
                          />
                        </a>
                      </div>
                      <div className="project-description">
                        OneBite is an online restaurant order and delivery
                        system so that OneBite can provide a menu, customers can
                        browse and order the food, and as well as delivery.
                        <br></br>
                        <br></br>
                        Being a part of a team of four I contributed by doing
                        the frontend for the application and worked on the
                        backend for the Chef to edit, add, delete items from the
                        menu.
                      </div>
                      <div className="every-bubble">
                        <div className="bubble-container">
                          <div className="bubble">CSS</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Flask</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">HTML</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Jinja</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">MySQL</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Python</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="project-links hidden">
                  <div className="project-container">
                    <div className="title-icon-container">
                      <div className="projects-title">Coffee Run</div>
                      <a
                        href="https://github.com/JessieSu2/CoffeeRun_Game"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-container"
                      >
                        <Icon
                          icon="uit:github-alt"
                          className="projects-icon bob"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=vSUM_U1Rjfk&ab_channel=Jessie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-container"
                      >
                        <Icon
                          icon="ph:youtube-logo-thin"
                          className="projects-icon bob youtube"
                        />
                      </a>
                    </div>
                    <div className="project-description">
                      Coffee Run is a 2D game where a cute, peaceful,
                      extraterrestrial, and ethereal being, Ember, has the
                      ability to see the yin in yang. Darkness in light. The
                      evil in the world is seeping through the floor, creating
                      cracks in the ground. Ember can discover these holes by
                      interacting with the environment. Ember & other assets
                      were created using Piskel and the game itself was created
                      using Unity.
                    </div>
                    <div className="every-bubble">
                      <div className="bubble-container">
                        <div className="bubble">C#</div>
                      </div>
                      <div className="bubble-container">
                        <div className="bubble">Piskel</div>
                      </div>
                      <div className="bubble-container">
                        <div className="bubble">Unity</div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="project-links hidden">
                  <div className="project-container">
                    <div className="title-icon-container">
                      <div className="projects-title">Magical Walk</div>
                      <a
                        href="https://github.com/JessieSu2/MagicalWalk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-container"
                      >
                        <Icon
                          icon="uit:github-alt"
                          className="projects-icon bob"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=uMG2iKQ3erE&ab_channel=Jessie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-container"
                      >
                        <Icon
                          icon="ph:youtube-logo-thin"
                          className="projects-icon bob youtube"
                        />
                      </a>
                    </div>
                    <div className="project-description">
                      Magical Walk is a 3D game and it is like a magical walk
                      through. However, the waterfall that provides the
                      surrounding area with water has stopped flowing. To make
                      the water start flowing again the player has to go down
                      three paths turning on each lantern in each path. Magical
                      Walk was created using Unity and the assets were from the
                      Unity Store.
                    </div>
                    <div className="every-bubble">
                      <div className="bubble-container">
                        <div className="bubble">C#</div>
                      </div>
                      <div className="bubble-container">
                        <div className="bubble">Piskel</div>
                      </div>
                      <div className="bubble-container">
                        <div className="bubble">Unity</div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="project-links hidden">
                  <div className="corner-ribbon">
                    <div className="project-container">
                      <div className="corner-ribbon__inner">
                        <div className="corner-ribbon__ribbon">
                          <div className="ribbon-text">Collaborated</div>
                        </div>
                      </div>
                      <div className="title-icon-container">
                        <div className="projects-title">Mini-Might</div>
                        <div className="project-icon-container">
                          <a
                            href="https://github.com/JessieSu2/Mini-Might"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-icon-container"
                          >
                            <Icon
                              icon="uit:github-alt"
                              className="projects-icon bob"
                            />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=8y-iWIHSUsE&ab_channel=Jessie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-icon-container"
                          >
                            <Icon
                              icon="ph:youtube-logo-thin"
                              className="projects-icon bob youtube"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="project-description">
                        Mini-Might is where the player finds themselves
                        minaturized in a forest and an evil villan is the cause
                        of making everyone minaturized! The player has to get to
                        the evil boss, defeat him and obtain a ray that will
                        enlarge the player and everyone again!
                        <br></br>
                        <br></br>
                        Being a part of a team of four I was in charge of the UI
                        & display as well as the Drawing and animations
                      </div>
                      <div className="every-bubble">
                        <div className="bubble-container">
                          <div className="bubble">C#</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Piskel</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Unity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="project-links hidden">
                  <div className="corner-ribbon">
                    <div className="project-container">
                      <div className="corner-ribbon__inner">
                        <div className="corner-ribbon__ribbon">
                          <div className="ribbon-text">Collaborated</div>
                        </div>
                      </div>
                      <div className="title-icon-container">
                        <div className="projects-title">Toodaloo</div>
                        <a
                          href="https://github.com/too-da-loo/toodaloo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-container"
                        >
                          <Icon
                            icon="uit:github-alt"
                            className="projects-icon bob"
                          />
                        </a>
                      </div>
                      <div className="project-description">
                        Toodaloo is a toilet application for New York City!
                        Whenever you have to use the bathroom in the city but
                        you can not find a place to go, Toodaloo, saves the day.
                        <br></br>
                        <br></br>
                        Being a part of a team of 3, I contributed by working on
                        UI, and multiple pages of the appliation as well as the
                        navigation bar.
                      </div>
                      <div className="every-bubble">
                        <div className="bubble-container">
                          <div className="bubble">Android Studio</div>
                        </div>
                        <div className="bubble-container">
                          <div className="bubble">Java</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="figma-section">
              <div className="figma">
                <h1 className="about-title">Figma</h1>
                <h3 className="title-prompt">Some designs I made with figma</h3>
              </div>

              <div className="figma-designs">
                <div className="fpw-wrapper">
                  <div className="figma-project-wrapper left">
                    <div className="figma-project">
                      <div className="figma-preview">
                        <img
                          className="figma-image"
                          src={require("../images/Nusketch.png")}
                        ></img>
                      </div>
                      <div className="figma-project-title hide">
                        <div className="figma-link-title">Nusketch</div>

                        <div
                          className="figma-icon"
                          onClick={() => setShowNusketch(true)}
                        >
                          <Icon icon="bi:plus" />
                        </div>

                        <Modal
                          show={showNusketch}
                          onHide={() => setShowNusketch(false)}
                          title="Nusketch"
                          description="An application that simplifies the creation of visual aids making pencil-esque sketches and allows for inlcusive job training and learning for the workforce through visual aids."
                          wireframe="https://www.figma.com/file/xwULaRKxopyPXphfAFFuzL/Nusketch?node-id=409%3A74&t=NpzlFSeNIXeOGDUV-1"
                          prototype="https://www.figma.com/proto/xwULaRKxopyPXphfAFFuzL/Nusketch?node-id=409-75&scaling=scale-down&page-id=409%3A74&starting-point-node-id=409%3A75"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fpw-wrapper">
                  <div className="figma-project-wrapper right">
                    <div className="figma-project">
                      <div className="figma-preview">
                        <img
                          className="figma-image"
                          src={require("../images/NusketchLogo.png")}
                        ></img>
                      </div>
                      <div className="figma-project-title hide">
                        <div className="figma-link-title">Nusketch Logo</div>

                        <div
                          className="figma-icon"
                          onClick={() => setShowNuLogo(true)}
                        >
                          <Icon icon="bi:plus" />
                        </div>

                        <Modal
                          show={showNuLogo}
                          onHide={() => setShowNuLogo(false)}
                          title="Nusketch Logo"
                          description="App Icon"
                          wireframe="https://www.figma.com/file/PkHQKUjGHTpyaPfivN38bH/Nusketch-Logo?node-id=0%3A1&t=o6aPLBWTr5a4jGwt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fpw-wrapper">
                  <div className="figma-project-wrapper left">
                    <div className="figma-project">
                      <div className="figma-preview">
                        <img
                          className="figma-image"
                          src={require("../images/Easy Trader.png")}
                        ></img>
                      </div>
                      <div className="figma-project-title hide">
                        <div className="figma-link-title">Easy Trader</div>

                        <div
                          className="figma-icon"
                          onClick={() => setShowET(true)}
                        >
                          <Icon icon="bi:plus" />
                        </div>

                        <Modal
                          show={showET}
                          onHide={() => setShowET(false)}
                          title="Easy Trader"
                          description="Log in and sign up pages "
                          wireframe="https://www.figma.com/file/d0ftTkBB0bVm7p2rjrXJjm/Easy-Trader?t=o6aPLBWTr5a4jGwt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fpw-wrapper">
                  <div className="figma-project-wrapper right">
                    <div className="figma-project">
                      <div className="figma-preview">
                        <img
                          className="figma-image"
                          src={require("../images/CTP Hackathon.png")}
                        ></img>
                      </div>
                      <div className="figma-project-title hide">
                        <div className="figma-link-title">CTP Hackathon</div>

                        <div
                          className="figma-icon"
                          onClick={() => setShowCTP(true)}
                        >
                          <Icon icon="bi:plus" />
                        </div>

                        <Modal
                          show={showCTP}
                          onHide={() => setShowCTP(false)}
                          title="Cuny Tech Prep Hackathon"
                          description="A tracker for medicine intake"
                          wireframe="https://www.figma.com/file/rYblFoGeNhgOz3BIH6mjKj/CTP-hackathon?t=o6aPLBWTr5a4jGwt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fpw-wrapper">
                  <div className="figma-project-wrapper left">
                    <div className="figma-project">
                      <div className="figma-preview">
                        <img
                          className="figma-image"
                          src={require("../images/StudyMethod.png")}
                        ></img>
                      </div>
                      <div className="figma-project-title hide">
                        <div className="figma-link-title">
                          Pomodoro Study Method
                        </div>

                        <div
                          className="figma-icon"
                          onClick={() => setShowPDS(true)}
                        >
                          <Icon icon="bi:plus" />
                        </div>

                        <Modal
                          show={showPDS}
                          onHide={() => setShowPDS(false)}
                          title="Pomodoro Study Method"
                          description="Studying website"
                          wireframe="https://www.figma.com/file/6lORdHCXozE9hKImpkBEbA/Pomodoro-Study-Method?t=o6aPLBWTr5a4jGwt-1"
                          prototype="https://www.figma.com/proto/6lORdHCXozE9hKImpkBEbA/Pomodoro-Study-Method?scaling=contain&page-id=0%3A1&starting-point-node-id=5%3A40&node-id=5-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
