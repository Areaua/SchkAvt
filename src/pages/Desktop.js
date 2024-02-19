import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Desktop.css";

const Desktop = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [classLevel, setClassLevel] = useState("");

  return (
    <div className="desktop-4">
      <div className="component-7" />
      <div className="rectangle-parent">
        <div className="component-child" />
        <img className="component-item" alt="" src="/star-3.svg" />
        <div className="component-inner" />
        <div className="ellipse-div" />
        <div className="div">Ел.дневник</div>
        <Link to="/desktop-3">
        <div className="div1">Вход</div>
        </Link>
      </div>
      <div className="component-8">
        <div className="component-8-child" />
        <div className="component-8-item" />
        <div className="component-8-inner" />
        <div className="rectangle-div" />
        <div className="component-8-child1" />
        <div className="div2">
          <span>Регестрация</span>
          <span className="span">{` `}</span>
        </div>
        <div className="component-8-child2" />
        <div className="component-8-child3" />
        <img className="rectangle-icon" alt="" src="/rectangle-19.svg" />
        <div className="div3" onClick={() => handleRegistration()}>Зарегистрироваться</div>
        <Link to="/desktop-3">
        <div className="div4" onClick={() => handleLogin()}>Уже есть аккаунт? Войти</div>
        </Link>
        <div className="div5">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=" Имя" />
        </div>
        <div className="div6">
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Фамилия" />
        </div>
        <div className="div7">
          <input type="text" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} placeholder=" Отчество" />
        </div>
        <div className="email">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Email" />
        </div>
        <div className="password">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Password" />
        </div>
        <div className="div8">
          <input type="text" value={classLevel} onChange={(e) => setClassLevel(e.target.value)} placeholder=" Класс" />
        </div>
      </div>
    </div>
  );
};

const handleRegistration = () => {
  // Обработчик для кнопки "Зарегистрироваться"
};

const handleLogin = () => {
  // Обработчик для кнопки "Уже есть аккаунт? Войти"
};

export default Desktop;
