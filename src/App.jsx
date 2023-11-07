import "./App.css";
import { NavBar } from "./NavBar";
import profileVert from "./images/profile-vert.jpg";
import wlm from "./images/wlm.png";
import ptables from "./images/periodic-tables.png";

function App() {
  return (
    <div className="frame">
      <NavBar />
      <div className="introBlock">
        <div className="bio col">
          <h1 className="greet">
            Nice to meet you!
            <br />
            I'm Greg Topscher.
          </h1>
          <p className="bioCopy">
            Based in the Philadelphia, I'm a front-end developer passionate
            about building accessible web apps that users love.
          </p>
          <br />
          <p>CONTACT ME</p>
        </div>
        <div className="col">
          <img src={profileVert} className="profilePic"></img>
        </div>
      </div>

      <hr />

      <div className="expBlock">
        <div className="exp row">
          <div className="col3">
            <h2>HTML </h2>
            <p>1 Year Experience</p>
          </div>
          <div className="col3">
            <h2>CSS </h2>
            <p>1 Year Experience</p>
          </div>
          <div className="col3">
            <h2>JavaScript </h2>
            <p>1 Year Experience</p>
          </div>
        </div>
        <div className="exp row">
          <div className="col3">
            <h2>Accessibility</h2>
            <p>1 Year Experience</p>
          </div>
          <div className="col3">
            <h2>React </h2>
            <p>1 Year Experience</p>
          </div>
          <div className="col3">
            <h2>Express </h2>
            <p>1 Year Experience</p>
          </div>
        </div>
      </div>

      <div className="projectHead row">
        <h1>Projects</h1> <p>CONTACT ME</p>
      </div>

      <div className="project row">
        <div className="pic">
          <a
            href="https://periodic-tables-restaurant-reservation-fo68.onrender.com/"
            target="_blank"
          >
            <img src={ptables} className="projPic"></img>
          </a>
          <h3>EXPRESS.JS | NODE.JS | KNEX | GIT </h3>
          <div class="middle">
            <div class="text">Restaurant Reservation App</div>
          </div>
        </div>
        <div className="pic">
          <a
            href="https://starter-movie-front-19jdwo4to-cozyfestiv.vercel.app/"
            target="_blank"
          >
            <img src={wlm} className="projPic"></img>
          </a>
          <h3>EXPRESS.JS | NODE.JS | KNEX | GIT</h3>
          <div class="middle">
            <div class="text">Movie Database App</div>
          </div>
        </div>
      </div>

      <div className="project row">
        <div className="col3">
          <h2>Accessibility</h2>
          <p>1 Year Experience</p>
        </div>
        <div className="col3">
          <h2>React </h2>
          <p>1 Year Experience</p>
        </div>
      </div>

      <p>
        Contact I would love to hear about your project and how I could help.
        Please fill in the form, and I’ll get back to you as soon as possible.
        Name Email Message Send message Greg Topscher
      </p>
    </div>
  );
}

export default App;
