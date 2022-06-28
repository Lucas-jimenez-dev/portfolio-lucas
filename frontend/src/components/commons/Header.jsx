import React from "react";
import Navigation from "../Navigation";
import "../../style/Header.css";
import "../../style/Commons.css";

function Header() {
  return (
    <header className="header">
      <Navigation />
      <img
        className="background-office"
        src="src/assets/Background_office.png"
        alt="background_office"
      />
      <span className="title">Lucas Jimenez</span>
      <span className="title bottom">Développeur Web JavaScript</span>
      <span className="acceuil">Accueil</span>
      <img
        className="profile-picture "
        src="src/assets/profile.png"
        alt="profile"
      />
    </header>
  );
}

export default Header;
