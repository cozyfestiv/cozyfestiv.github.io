import "./App.css";
import { NavBar } from "./NavBar";
import profileVert from "./images/profile-vert.jpg";

function App() {
  return (
    <div>
      <NavBar />
      <img src={profileVert} className="profile"></img>
      <h1>
        Nice to meet you!
        <br />
        I'm Greg Topscher.
      </h1>

      <p>
        Based in the Philadelphia, I'm a front-end developer passionate about
        building accessible web apps that users love. Contact me HTML 4 Years
        Experience CSS 4 Years Experience JavaScript 4 Years Experience
        Accessibility 4 Years Experience React 3 Years Experience Sass 3 Years
        Experience Projects Contact me Design portfolio HTML CSS View project
        View code E-learning landing page HTML CSS View project View code Todo
        web app HTML CSS JavaScript View project View code Entertainment web app
        HTML CSS JavaScript View project View code Memory Game HTML CSS
        JavaScript View project View code Art gallery showcase HTML CSS
        JavaScript View project View code Contact I would love to hear about
        your project and how I could help. Please fill in the form, and I’ll get
        back to you as soon as possible. Name Email Message Send message Greg
        Topscher
      </p>
    </div>
  );
}

export default App;
