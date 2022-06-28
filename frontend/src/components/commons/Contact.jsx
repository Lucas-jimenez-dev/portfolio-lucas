import React, { useState } from "react";
import "../../style/Contact.css";
import Message from "../Message";

function Contact() {
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    return setMessage(!message);
  };

  return (
    <ul className="container-contact">
      <li>
        <a className="button" href="src/assets/CV_lucas_jimenez.pdf" download>
          <img src="src/assets/logo/icon_download.png" alt="" />
          Télécharger le CV
        </a>
      </li>
      <li>
        <button className="button" type="button" onClick={() => handleClick()}>
          <img src="src/assets/logo/icon_message.png" alt="message" />
          Envoyer un message
        </button>
      </li>
      {message && <Message handleClick={handleClick} />}
    </ul>
  );
}

export default Contact;
