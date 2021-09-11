import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    workContainer: {
        padding: "15px",
        background: "aliceblue"
    },
    workCard: {
        width:"500px",
        height:"auto"
    },
    workImg: {
        width: "500px",
    }
};

function Portfolio() {
    return (
        <div style={styles.workContainer}>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="pokemon.jpg" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"></p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="tama.jpg" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"></p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
            <div class="card" style={styles.workCard}>
                <img class="card-img" src="bored.png" alt="Card image"/>
                <div class="card-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"></p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;