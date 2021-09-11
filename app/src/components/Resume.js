import React from 'react';

const styles = {
    resume: {
      background: "aliceblue",
      paddingTop: "50px",
      paddingRight: "100px",
      paddingLeft: "100px",
      
    },
    h2: {
      fontSize: "35px",
      color: "rgb(98, 98, 98)",
    },
    p: {
      marginTop: "30px",
      marginBottom: "0px"
    }
}

function Resume() {
    return (
        <div style={styles.resume}>
            <h2 style={styles.h2}>Resume</h2>
            <p style={styles.p}>Download my <a href="Yuhan_Resume.pdf">resume</a></p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}

export default Resume;