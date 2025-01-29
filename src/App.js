import "./App.css";
import AdventureCards from "./components/AdventureCards";
import instagramlogo from "./imgs/instagramlogo.png";
import headshot from "./imgs/headshot.png";
import logo from "./imgs/logo.png";

function App() {
  return (
    <div>
      <header className="main-header">
        <img src={logo} alt="logo"></img>
        Larissa's Adventures Blog
      </header>
      <div className="intro-container">
        <div className="about-me-section">
          <div className="title">Bonjour, je suis Larissa!</div>
          <p className="about-me">
            I am a traveler, adventurist, and lifelong learner. My goal is to
            experience the world by learning about other cultures through
            travel, embracing challenge and uncertainty through adventures, and
            live my life to the fullest! I hope my stories inspire you and share
            knowledge for your own adventures 🖤
          </p>
          <a href="https://www.instagram.com/lollapalarza/?hl=en">
            <img
              alt="instagram"
              src={instagramlogo}
              className="instagram-logo"
            ></img>
            <p className="handle">lollapalarza</p>
          </a>
        </div>
        <div className="headshot">
          <img src={headshot} alt="headshot" />
        </div>
      </div>
      <AdventureCards />
      <footer>Larissa Ault © 2025</footer>
    </div>
  );
}

export default App;
