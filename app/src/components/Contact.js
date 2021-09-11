import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    formlayout: {
      background: "aliceblue",
      paddingTop: "75px",
      paddingRight: "200px",
      paddingLeft: "200px"
    },
    h2: {
      fontSize: "35px",
      color: "rgb(98, 98, 98)",
      paddingBottom: "50px"
    }
};

function Contact() {
    return (
        <div style={styles.formlayout}>
            <h2 style={styles.h2}>Contact Me</h2>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName" />
                </div>
                <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-12">
                    <label for="inputMessage" class="form-label">Message</label>
                    <textarea class="form-control" id="formControlTextMessage" rows="7" placeholder="Write here..."></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    );
}


export default Contact;