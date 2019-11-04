import React from "react";
import { Link } from "@reach/router";

export default function NavBar({isAuthenticated, logout, login}) {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1 className="nav-logo">Formidamail</h1>
      </Link>
      <ul className="nav-items">
      {
       isAuthenticated ?(
       <li className="nav-item" onClick={logout}>Log Out</li>
        ) : (
        <li className="nav-item" onClick={login}>Log in</li>
        )
      }
        
      </ul>
    </nav>
  );
}
