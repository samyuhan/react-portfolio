import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
    return (
        <div>
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
                    <input type="text" class="form-control" id="inputMessage" placeholder="Write here..." />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    );
}


export default Contact;