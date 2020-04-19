import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  const handleRegister = async event => {
    event.preventDefault();

    const data = { name, email, whatsapp, city, uf };

    const response = await api.post("ongs", data);

    try {
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (error) {
      alert("Erro no cadastro, tente novamente");
    }
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" /> Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={({ target }) => setWhatsapp(target.value)}
          />
          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={({ target }) => setCity(target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={({ target }) => setUf(target.value)}
            />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
