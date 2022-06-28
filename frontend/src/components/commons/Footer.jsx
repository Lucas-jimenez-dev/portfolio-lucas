import React, { useState } from "react";
import Message from "../Message";
import "../../style/Footer.css";

function Footer() {
  const [message, setMessage] = useState(false);
  const handleClick = () => {
    return setMessage(!message);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <a className="icon" href="https://github.com/Lucas-jimenez-dev">
          <img src="src/assets/logo/icon_white_github.png" alt="icon_github" />
        </a>
        <a className="icon" href="https://www.linkedin.com/in/jimenez-lucas/">
          <img
            src="src/assets/logo/icon_white_linkedin.png"
            alt="icon_linkedin"
          />
        </a>
        <button className="button" type="button" onClick={() => handleClick()}>
          <img src="src/assets/logo/mail_white.png" alt="message" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
