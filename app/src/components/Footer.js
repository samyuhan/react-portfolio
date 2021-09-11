import React from 'react';
import '../styles/Header.css';

const styles = {
  footing: {
    background: "aliceblue",
    padding: "50px",
    textAlign: "center"
  },
  i: {
    fontSize: "36px"
  }
};

function Footer() {
  return (
    <footer style={styles.footing} className="footer">
      <a href="https://github.com/samyuhan"><button class="footerbtn"><i class="fa fa-github" style={styles.i}></i></button></a>
    </footer>
  );
}

export default Footer;
