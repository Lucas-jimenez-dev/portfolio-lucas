import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginContext from "./Context";

function Login() {
  const { login, setLogin } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/admin", { email, password })
      .then((data) => {
        if (data.status === 200) {
          setLogin(true);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email :
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Mot de passe :
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      <button
        type="button"
        onClick={() => {
          navigate("/admin/register");
        }}
      >
        Créer un profil
      </button>
    </div>
  );
}

export default Login;
