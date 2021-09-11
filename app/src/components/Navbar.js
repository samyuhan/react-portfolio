import React from 'react';
import '../styles/Navbar.css';

const styles = {
  nav: {
    background: "aliceblue",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "30px"
  },
};

function Navbar() {
  return (
    <nav style={styles.nav} className="navbar">
      <a href="/">About Me</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
      <a href="/resume">Resume</a>
    </nav>
  );
}

export default Navbar;