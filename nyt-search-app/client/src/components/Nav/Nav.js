import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    {/* Alternative: Use React-router-dom's Link component so that browser doesn't refresh if user clicks <a href=>I*/}
    <a className="navbar-brand" href="/">
      React Reading List
    </a>
  </nav>
);

export default Nav;
