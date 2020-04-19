import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

const Login = () => {
  const [id, setId] = useState("");
  const history = useHistory();

  const handleLogin = async event => {
    event.preventDefault();

    try {
      const { data } = await api.post("sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", data.name);
      history.push("/profile");
    } catch (error) {
      alert("Falha no login, tente novamente!");
    }
  };

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            type="text"
            placeholder="Seu ID"
            value={id}
            onChange={({ target }) => setId(target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Login;
