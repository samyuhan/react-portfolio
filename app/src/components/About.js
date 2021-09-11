import React from 'react';
import '../styles/About.css';

const styles = {
  abt: {
    background: "aliceblue",
    paddingTop: "50px",
    paddingRight: "200px",
    paddingLeft: "200px"
    
  },
  h1: {
    fontSize: "20px",
    color: "rgb(98, 98, 98)"
  },
  pic: {
    width: "150px",
    paddingTop: "50px",
    paddingBottom: "50px"
  }
};

function Header() {
  return (
    <div style={styles.abt} className="about">
      <h1 style={styles.h1}>About Me</h1>
      <img src="profile.png" alt="Profile picture" style={styles.pic} />
    </div>
  );
}

export default Header;
