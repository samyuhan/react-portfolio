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
    fontSize: "35px",
    color: "rgb(98, 98, 98)"
  },
  pic: {
    width: "150px",
    paddingTop: "50px",
    paddingBottom: "50px"
  },
  para: {
    fontSize: "20px",
    paddingBottom: "20px"
  }
};

function Header() {
  return (
    <div style={styles.abt} className="about">
      <h1 style={styles.h1}>About Me</h1>
      <img src="profile.png" alt="Profile picture" style={styles.pic} />
      <p style ={styles.para}>
        Hello World, my name is Samantha! I just graduated from UC Berkeley with a Bachelor's degree in Data Science. I am interested in pursuing UX/UI Design or maybe website development, which is why I'm taking this bootcamp. I hope that I can merge my creative and technical skills to build beautiful functioning websites.
      </p>
      <p style ={styles.para}>
        Feel free to look around my portfolio to see the work that I have been accomplishing these past few months!
      </p>
    </div>
  );
}

export default Header;