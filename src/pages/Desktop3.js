import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Desktop3.css";

const Desktop3 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="desktop-1">
      <div className="component-1">
        <div className="component-1-child" />
        <div className="div23">
          <span>Авторизация</span>
          <span className="span5">{` `}</span>
        </div>
        <img className="component-1-item" alt="" />
        <div className="component-1-inner" />
        <div className="component-1-child1" />
        <input
          className="email2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="password2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <img className="component-1-child2" alt="" src="/rectangle-5.svg" />
        <div className="div24">
          <span>Войти</span>
          <span className="span6">{` `}</span>
        </div>
          <Link to="/desktop-2">
          <div className="div25">Зарегистрироваться</div>
          </Link>
      </div>
      <div className="rectangle-container">
        <div className="component-child8" />
        <div className="component-child8" />
        <div className="component-child8" />
        <div className="component-child11" />
        <img className="component-child12" alt="" src="/star-1.svg" />
        <div className="component-child13" />
        <div className="component-child14" />
        <div className="div26">Вход</div>
        <div className="div27">Ел.дневник</div>
      </div>
    </div>
  );
};

export default Desktop3;
