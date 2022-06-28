import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          email : <input type="email" />
        </label>
        <label htmlFor="password">
          mot de passe : <input type="password" />
        </label>
        <label htmlFor="password">
          confirmer le mot de passe : <input type="password" />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      <button
        type="button"
        onClick={() => {
          navigate("/admin");
        }}
      >
        retour
      </button>
    </div>
  );
}

export default Register;
