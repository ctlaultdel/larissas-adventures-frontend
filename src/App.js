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
        Larissa's Adventures
      </header>
      <div className="intro-container">
        <div className="about-me-section">
          <div className="title">Bonjour, je suis Larissa!</div>
          <p className="about-me">
            I am a software developer by trade and climber/traveler/adventurist
            by heart. The purpose of this blog to to document my adventures and
            in the process share knowledge, spread awareness, and inspire others
            for their own adventures 🖤
          </p>
          <div className="instagram-container">
            <img
              alt="instagram"
              src={instagramlogo}
              className="instagram-logo"
            ></img>
            <a
              className="handle"
              href="https://www.instagram.com/lollapalarza/?hl=en"
            >
              @lollaplarza
            </a>
          </div>
        </div>
        <div className="headshot-container">
          <img className="headshot" src={headshot} alt="headshot" />
        </div>
      </div>
      <AdventureCards />
      <footer>Larissa Ault © 2025</footer>
    </div>
  );
}

export default App;
