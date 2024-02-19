import React from 'react';
import { Link } from 'react-router-dom';  
import "./Desktop2.css";

const Desktop2 = () => {
  return (
    <div className="desktop-2">
      <div className="rectangle-group">
        <div className="component-child4" />
        <img className="component-child5" alt="" src="/star-3.svg" />
        <div className="component-child6" />
        <div className="component-child7" />
        <Link to="/desktop-3" >
        <div className="div18">Вход</div>
        </Link>
        <div className="div19">Ел.дневник</div>
      </div>
      <div className="component-4">
        <div className="component-4-child" />
        <div className="div20">{`Выберете кто вы `}</div>
        <div className="component-4-item" />
        <Link to="/desktop-4">
        <div className="div21">ученик</div>
        </Link>
        <div className="component-4-inner" />
        <Link to="/desktop-1">
        <div className="div22">учитель</div>
        </Link>
      </div>
    </div>
  );
};

export default Desktop2;
