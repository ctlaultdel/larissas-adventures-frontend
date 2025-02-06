import "./HomePage.css";

// Components
import AdventureCards from "./AdventureCards";

// Graphics
import instagramlogo from "../imgs/instagramlogo.png";
import headshot from "../imgs/headshot.png";

function HomePage() {
  return (
    <div>
      <div className="intro-container">
        <div className="about-me-section">
          <div className="title">Bonjour, je suis Larissa!</div>
          <p className="about-me">
            I am a software developer by trade and climber/traveler/adventurist
            by heart. The purpose of my blog to to document my adventures, share
            knowledge, and inspire others for their own adventures 🖤
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
    </div>
  );
}

export default HomePage;
