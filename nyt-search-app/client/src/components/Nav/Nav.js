import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul className="nav navbar-nav navbar-brand">
	    <a className="" href="/">
	      Home
	    </a>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/results">Results</Link></li>
      <li><Link to="/saved">Saved</Link></li>
    </ul>
  </nav>
);

export default Nav;
