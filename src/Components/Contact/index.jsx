import React from "react";
import '../Contact/Contact.css'

// CONTACT COMPONENT
export default function Contact(){
    return(
        <div id="contact" className="Contact">
            <div className="left_contact">
                <div className="title_contact">
                    <h1>Contact</h1>
                    <p>I would love to hear about your project and how I could
                        <br/>could help. Please fill in the form. and i'll get back
                        <br/>to you as soon as possible..</p>
                </div>
            </div>
            <div className="right_contact">
                <form id="form_place" method="POST" action="/">
                    <div className="divs_input">
                        <input id="username_input" type="text" placeholder="NAME"></input>
                    </div>
                    <div className="divs_input">
                    <input id="email_input" type="text" placeholder="EMAIL"></input>
                    </div>
                    <div className="divs_input">
                        <textarea id="textarea_meesage" placeholder="MESSAGE"></textarea>
                    </div>
                    <div className="divs_input_btn">
                        <button id="btn_send">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}