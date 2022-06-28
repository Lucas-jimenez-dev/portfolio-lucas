import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";
import "../style/Commons.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <Link to="/projects">Réalisations</Link>
      </ul>
      <div className="container-icon">
        <a className="icon" href="https://github.com/Lucas-jimenez-dev">
          <img src="src/assets/logo/icon_github.png" alt="icon_github" />
        </a>
        <a className="icon" href="https://www.linkedin.com/in/jimenez-lucas/">
          <img src="src/assets/logo/icon_linkedin.png" alt="icon_linkedin" />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
