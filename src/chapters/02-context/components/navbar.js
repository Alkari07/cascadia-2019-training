import React from "react";
import { Link } from "@reach/router";
import {BaseContext} from '../context';

export default function NavBar() {
  //explode out the object by specifying the properties I want
  const  {isAuthenticated, logout, login} = React.useContext(BaseContext);
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1 className="nav-logo">Formidamail</h1>
      </Link>
      <ul className="nav-items">
        {isAuthenticated ? (
          <li className="nav-item" onClick={logout}>
            logout
          </li>
        ) : (
          <li className="nav-item" onClick={login}>
            Log in
          </li>
        )}
      </ul>
    </nav>
  );
}
