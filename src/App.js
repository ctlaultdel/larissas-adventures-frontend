import headshot from "./imgs/headshot.png";
import logo from "./imgs/logo.png";
import instagramlogo from "./imgs/instagramlogo.png";
import "./App.css";

// placecards for adventure cards ~ temporary
import athabasca from "./imgs/adventure_cards/athabasca.jpg";
import lepetitcheval from "./imgs/adventure_cards/lepetitcheval.jpg";
import shuksan from "./imgs/adventure_cards/shuksan.jpg";
import Greece from "./imgs/adventure_cards/Greece.jpg";
import bozeman from "./imgs/adventure_cards/bozeman.jpg";
import flyboys from "./imgs/adventure_cards/flyboys.jpg";
import iceland from "./imgs/adventure_cards/iceland.jpg";
import oahu from "./imgs/adventure_cards/oahu.jpg";
import westcoast from "./imgs/adventure_cards/westcoast.jpg";
import kauai from "./imgs/adventure_cards/kauai.jpg";
import france from "./imgs/adventure_cards/france.jpg";
import maui from "./imgs/adventure_cards/maui.jpeg";
import cairns from "./imgs/adventure_cards/cairns.jpg";
import crosscountry from "./imgs/adventure_cards/crosscountry.jpeg";
//

function App() {
  // Temporary thumbnail data - will be coming from backend API call //
  const adventureThumbNails = [
    { name: "Mt Shuksan", img: shuksan },
    { name: "Le Petit Cheval", img: lepetitcheval },
    { name: "Mt Athabasca", img: athabasca },
    { name: "Flyboys", img: flyboys },
    { name: "Bozeman", img: bozeman },
    { name: "Greece", img: Greece },
    { name: "Iceland", img: iceland },
    { name: "Oregon California Coast", img: westcoast },
    { name: "Oahu", img: oahu },
    { name: "Kauai", img: kauai },
    { name: "France", img: france },
    { name: "Cairns", img: cairns },
    { name: "Maui", img: maui },
    { name: "Cross Country USA - North", img: crosscountry },
  ];
  //

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
      <div className="adventures-container">
        <div className="adventures-section">Adventure Cards</div>
        <div className="adventures">
          {adventureThumbNails.map((thumbnail) => (
            <div className="adventure-cards">
              <a href="https://github.com/ctlaultdel">
                <img
                  key={thumbnail.name.replaceAll(" ", "_")}
                  src={thumbnail.img}
                  alt={thumbnail.name}
                  className="thumbnails"
                ></img>
              </a>
              <div className="name">{thumbnail.name}</div>
            </div>
          ))}
        </div>
      </div>
      <footer>Larissa Ault @ 2025</footer>
    </div>
  );
}

export default App;
