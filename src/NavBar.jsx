import { FaGithub, FaLinkedin } from "react-icons/fa";

export function NavBar() {
  return (
    <div className="topnav" id="myTopNav">
      <div className="navName">
        <a href="#home" className="active">
          Greg Topscher
        </a>
      </div>
      <div className="navSocial">
        <a href="https://github.com/cozyfestiv" target="_blank">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/gtop/" target="_blank">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
}
