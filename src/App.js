import headshot from "./imgs/headshot.jpg";
import logo from "./imgs/logo.jpeg";
import aboutme from "./aboutme.txt";
import "./App.css";

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
          <embed className="about-me" src={aboutme}></embed>
        </div>
        <div className="headshot">
          <img src={headshot} alt="headshot" />
        </div>
      </div>
      <div className="adventures-container">
        <div className="adventures-section">Adventure Cards</div>
        <div className="adventures"></div>
      </div>
      <footer>Larissa Ault @ 2025</footer>
    </div>
  );
}

export default App;
