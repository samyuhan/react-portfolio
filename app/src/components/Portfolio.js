import React from 'react';
import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    workContainer: {
        padding: "15px",
        background: "aliceblue",
        display: "flex",
        flexWrap: "wrap"
    },
    workCard: {
        width:"500px",
        height:"auto",
        margin: "10px"
    },
    workImg: {
        width: "500px",
    },
    h2: {
        fontSize: "35px",
        color: "rgb(98, 98, 98)",
        background: "aliceblue",
        margin: "0px",
        paddingBottom: "10px",
        textAlign: "center"
    }
};

function Portfolio() {
    return (
        <div>
            <h2 style={styles.h2}>Portfolio</h2>
            <div class="col d-flex justify-content-center" style={styles.workContainer}>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="tama.jpg" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Tamagacha</h5>
                    <button><a href="https://tamagacha.herokuapp.com" className="link">Deployed</a></button><br/>
                    <button><a href="https://github.com/samyuhan/Tamagacha" className="link">GitHub</a></button>
                </div>
            </div>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="pokemon.jpg" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Poke Battler</h5>
                    <button><a href="https://pokebattlerproject.herokuapp.com" className="link">Deployed</a></button><br/>
                    <button><a href="https://github.com/samyuhan/pokebattler" className="link">GitHub</a></button>
                </div>
            </div>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="bored.png" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Feed Your Boredom</h5>
                    <button><a href="https://jessgiannini.github.io/FeedYourBoredom/" className="link">Deployed</a></button><br/>
                    <button><a href="https://github.com/samyuhan/FeedYourBoredom" className="link">GitHub</a></button>
                </div>
            </div>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="password.png" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Password Generator</h5>
                    <button><a href="https://samyuhan.github.io/password-generator/" className="link">Deployed</a></button><br/>
                    <button><a href="https://github.com/samyuhan/password-generator" className="link">GitHub</a></button>
                </div>
            </div>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="planner.png" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Planner</h5>
                    <button><a href="https://samyuhan.github.io/calendar/" className="link">Deployed</a></button><br/>
                    <button><a href="https://github.com/samyuhan/calendar" className="link">GitHub</a></button>
                </div>
            </div>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="fit.png" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Fitness Tracker</h5>
                    <button><a href="https://fit-track-project.herokuapp.com/?id=611dde3847811a0016ac022a" className="link">Deployed</a></button><br/>
                    <button><a href="https://github.com/samyuhan/workout-tracker" className="link">GitHub</a></button>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Portfolio;