import React from "react";
import "../Langauges/Langauges.css";
import html_icon from "../Langs_icons/html.png";
import css_icon from "../Langs_icons/css.png";
import js_icon from "../Langs_icons/js.png";
import acces_icon from "../Langs_icons/accessibility.png";
import react_icon from "../Langs_icons/react.png";
import sass from "../Langs_icons/sass.png";
import bot from "../Langs_icons/bot.png";

// LANG FUNCTION
export default function Langauges() {
  return (
    <div id="langs" className="Langauges">
      <div className="lang_box">
        <h1>HTML</h1>
        <img src={html_icon}></img>
        <p>1 YEAR AND HALF</p>
      </div>
      <div className="lang_box">
        <h1>CSS</h1>
        <img src={css_icon}></img>
        <p>1 YEAR AND HALF</p>
      </div>
      <div className="lang_box">
        <h1>Javascript</h1>
        <img src={js_icon}></img>
        <p>1 YEAR AND HALF</p>
      </div>
      <div className="lang_box">
        <h1>Accesiblity</h1>
        <img src={acces_icon}></img>
        <p>1 YEAR AND HALF</p>
      </div>
      <div className="lang_box">
        <h1>React</h1>
        <img src={react_icon}></img>
        <p>1 YEAR AND HALF</p>
      </div>
      <div className="lang_box">
        <h1>Sass</h1>
        <img src={sass}></img>
        <p>1 YEAR AND HALF</p>
      </div>
      {/* ADD ONE MORE LANGUAGE */}
      <div className="lang_box">
        <h1>Bootstrap</h1>
        <img src={bot}></img>
        <p>1 YEAR AND HALF</p>
      </div>
      {/* EMPTY COLUMS */}
      <div className="lang_box">
        {/* <h1>Bootstrap</h1> */}
        {/* <img src={sass}></img> */}
        {/* <p>1 YEAR AND HALF</p> */}
      </div>
      <div className="lang_box">
        {/* <h1>Bootstrap</h1> */}
        {/* <img src={sass}></img> */}
        {/* <p>1 YEAR AND HALF</p> */}
      </div>
    </div>
  );
}
