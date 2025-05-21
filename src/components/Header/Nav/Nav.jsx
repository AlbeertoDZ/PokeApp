import React from "react";
import { Link } from 'react-router-dom'
import "./Nav.css";

const Nav = () => {
  return <nav className="nav-bar">
    <ul>
      <li>
        <Link className="item-menu" to="/">Pagina principal</Link>
      </li>
      <li>
        <Link className="item-menu" to="/new">Nuevo pokemon</Link>
      </li>
    </ul>
    </nav>;
};

export default Nav;
