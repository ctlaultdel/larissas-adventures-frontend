import headshot from "./imgs/headshot.png";
import logo from "./imgs/logo.png";
import aboutme from "./aboutme.txt";
import "./App.css";
// placecards for adventure cards ~ temporary
import athabasca from "./imgs/adventure_cards/athabasca.jpg";
import lepetitcheval from "./imgs/adventure_cards/lepetitcheval.jpg";
import shuksan from "./imgs/adventure_cards/shuksan.jpg";
import Greece from "./imgs/adventure_cards/Greece.jpg";
import bozeman from "./imgs/adventure_cards/bozeman.jpg";
import flyboys from "./imgs/adventure_cards/flyboys.jpg";
//

function App() {
  const adventureThumbNails = [
    { name: "Mt Shuksan", img: shuksan },
    { name: "Le Petit Cheval", img: lepetitcheval },
    { name: "Mt Athabasca", img: athabasca },
    { name: "Flyboys", img: flyboys },
    { name: "Bozeman", img: bozeman },
    { name: "Greece", img: Greece },
  ];

  return (
    <div>
      <header className="main-header">
        <img src={logo} alt="logo"></img>
        Larissa's Adventures
      </header>
      <div className="intro-container">
        <div className="about-me-section">
          <div className="title">Bonjour, je suis Larissa!</div>
          <embed className="about-me" src={aboutme}></embed>
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
                  className="adventure-thumbnails"
                ></img>
              </a>
            </div>
          ))}
        </div>
      </div>
      <footer>Larissa Ault @ 2025</footer>
    </div>
  );
}

export default App;
