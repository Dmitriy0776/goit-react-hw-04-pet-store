import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'green' };

const navPage = () => {
  return (
    <ul className="className">
      <li className="className">
        <NavLink exact activeStyle={activeStyle} to="/">
          Home
        </NavLink>
      </li>
      <li className="className">
        <NavLink activeStyle={activeStyle} to="/about">
          About
        </NavLink>
      </li>
      <li className="className">
        <NavLink activeStyle={activeStyle} to="/pets">
          Pets
        </NavLink>
      </li>
    </ul>
  );
};

export default navPage;
