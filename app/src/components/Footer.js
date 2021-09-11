import React from 'react';
import '../styles/Header.css';

const styles = {
  heading: {
    background: "aliceblue",
    
  },
  h1: {
    fontSize: "50px"
  }
};

function Header() {
  return (
    <header style={styles.heading} className="header">
      <h1 style={styles.h1}>Samantha Yuhan</h1>
    </header>
  );
}

export default Header;
