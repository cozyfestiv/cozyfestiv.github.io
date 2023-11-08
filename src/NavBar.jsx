import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";

export function NavBar() {
  return (
    <div className="topnav" id="myTopNav">
      <div className="navName">
        <a href="#home" className="active">
          Greg Topscher
        </a>
      </div>
      <div className="navSocial">
        <div className="wrapper">
          <a href="https://github.com/cozyfestiv" target="_blank">
            <FaGithub className="icon gitHub" />
            <span className="title">GitHub</span>
          </a>
        </div>
        <div className="wrapper"></div>
        <a href="https://www.linkedin.com/in/gtop/" target="_blank">
          <FaLinkedin className="icon" />
          <span className="title linkedIn">LinkedIn</span>
        </a>

        <div className="wrapper">
          <a href="./files/Greg-Topscher-Resume.pdf" target="_blank">
            <FaFile className="icon resume" />
            <span className="title">Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
