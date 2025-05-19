import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return <nav className="nav-bar">
    <ul>
      <li>
        <Link className="menu-item" to="/">Pagina principal</Link>
      </li>
      <li>
        <Link className="menu-item" to="/new">Nuevo pokemon</Link>
      </li>
    </ul>
    </nav>;
};

export default Nav;
