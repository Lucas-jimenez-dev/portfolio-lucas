import React from "react";
import "../style/Message.css";

function Message({ handleClick }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <div className="gradient-box">
        <form className="form" onSubmit={handleSubmit}>
          <button
            className="icon-close"
            type="button"
            onClick={() => handleClick()}
          >
            <img src="src/assets/logo/icon_croix.png" alt="icon close" />
          </button>
          <div className="first-container">
            <label htmlFor="name">
              Nom complet :
              <input type="text" />
            </label>
            <label htmlFor="email">
              Email :
              <input type="email" />
            </label>
          </div>
          <div className="second-container">
            <label htmlFor="object">
              Objet :
              <input type="text" />
            </label>
            <label htmlFor="message">
              Message :
              <textarea
                name="message"
                className="message"
                cols="30"
                rows="10"
              />
            </label>
            <button type="submit" className="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Message;
