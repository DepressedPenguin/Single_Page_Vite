import React from "react";
import '../Content/Content.css'
import profiler from '../icons_navbar/profile.png'
import logo_penguin from '../Langs_icons/DepressedPenguin.png'

// BODY PAGE
export default function Content(){
    return(
        <div className="Contnet">
            <div className="right_side">
                <div className="intro_name">
                    <h1>Nice To meet you!<br/><span id="name_underline">I'm E.ZAKARIA</span></h1>
                </div>
                <div className="intro_para">
                    <p>Based in the Morocco, I'm a fron-end developer
                        <br/>passionate about building accessible web apps 
                        and desktop<br/> that users dont love.</p>
                </div>
                <div className="contact_link">
                    <a href="https://wa.me/+212648056090" target="blank"><h4>Contact Me</h4></a>
                </div>
            </div>
            <div className="left_side">
                <div className="place_for_img">
                    <img src={logo_penguin}></img>
                </div>
            </div>
        </div>
    )
}