import "./App.css";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
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
            Based in Philadelphia, I'm a Front-end developer with a background
            in art and writing looking to write code in the field of
            Environmental sustainability. I want to connect people to under-used
            resources and use lean code to create new solutions and make current
            systems less wasteful. I am skilled in visual communications, with
            an eye towards storytelling and creative problem solving.
          </p>
          <br />
          <a href="#contactId" className="contact">
            CONTACT ME
          </a>
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
        <h1>Projects</h1>{" "}
        <a href="#contactId" className="contact">
          CONTACT ME
        </a>
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

      {/* <div className="project row">
        <div className="col3">
          <h2>Accessibility</h2>
          <p>1 Year Experience</p>
        </div>
        <div className="col3">
          <h2>React </h2>
          <p>1 Year Experience</p>
        </div>
      </div> */}

      <Contact />
    </div>
  );
}

export default App;
