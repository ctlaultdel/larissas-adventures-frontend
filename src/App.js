import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";

// Graphics
import logo from "./imgs/logo.png";

function App() {
  return (
    <div>
      <header className="main-header">
        <img src={logo} alt="logo"></img>
        Larissa's Adventures
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <footer>Larissa Ault © 2025</footer>
    </div>
  );
}

export default App;
