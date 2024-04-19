import React from "react";
import "../Projects/Projects.css";
import p1_recipe from "../icons_navbar/p1.png";
import super_p2 from "../icons_navbar/p2.png";
import kasper_p1 from "../icons_navbar/kasper_1.png";
import calimero_life from "../icons_navbar/calimero_life.png";
import anime_p5 from "../icons_navbar/p5.png";
import upload_template from "../icons_navbar/p6.png";
// REACT
export default function Projects() {
  return (
    <div id="pr_section" className="Projects">
      <div className="title_section">
        <div className="headline_project">
          <h1> UNNCOMPLETED PROJECTS</h1>
        </div>
        <div className="div_1">
          <h3>CONTACT ME</h3>
        </div>
      </div>
      {/* PLACE FOR */}
      <div className="projects_gallery">
        <div className="p1">
          {/* IMG PLACE */}
          <div className="img_p1">
            <img className="image_preview" src={p1_recipe}></img>
          </div>
          {/* DIV LINK FOR SITE PERVIEW */}
          {/* <div className="link_perview">
                        <a href="Google.com" target="blank">RECIPES SITE</a>
                    </div> */}
          <div className="img_p2">
            <div className="title_pro">
              <a
                href="https://qy-2-mp-3-project-git-main-depressedpenguins-projects.vercel.app/"
                target="blank"
              >
                <h2>QY2MP3 (CONVERT URL TO MP3)</h2>
              </a>
            </div>
            {/* LANGUAGES USED */}
            <div className="lang_used_and_perview">
              <div className="lang_side">
                <p>REACT.JS</p>
                <p>SCSS</p>
                <p>CSS</p>
                <p>API</p>
              </div>
              <div className="perview_link">
                <a href="Google.com" target="blank">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p1">
          {/* IMG PLACE */}
          <div className="img_p1">
            <img className="image_preview" src={super_p2}></img>
          </div>
          <div className="img_p2">
            <div className="title_pro">
              <a href="https://snaptiktok.site/ " target="blank">
                <h2>Snaptiktok (Convert Url To Mp4&Mp3)</h2>
              </a>
            </div>
            {/* LANGUAGES USED */}
            <div className="lang_used_and_perview">
              <div className="lang_side">
                <p>REACT.JS</p>
                <p>SCSS</p>
                <p>CSS</p>
                <p>API</p>
              </div>
              <div className="perview_link">
                <a href="Google.com" target="blank">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* OTHER PROJECYS */}
        <div className="p1">
          {/* IMG PLACE */}
          <div className="img_p1">
            <img className="image_preview" src={calimero_life}></img>
          </div>
          <div className="img_p2">
            <div className="title_pro">
              <h2>Calimero Template</h2>
            </div>
            {/* LANGUAGES USED */}
            <div className="lang_used_and_perview">
              <div className="lang_side">
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className="perview_link">
                <a href="Google.com" target="blank">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p1">
          {/* IMG PLACE */}
          <div className="img_p1">
            <img className="image_preview" src={kasper_p1}></img>
          </div>
          <div className="img_p2">
            <div className="title_pro">
              <h2>Social media dashboard</h2>
            </div>
            {/* LANGUAGES USED */}
            <div className="lang_used_and_perview">
              <div className="lang_side">
                <p>REACT.JS</p>
                <p>SCSS</p>
                <p>TYPESCRIPT</p>
              </div>
              <div className="perview_link">
                <a href="Google.com" target="blank">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p1">
          {/* IMG PLACE */}
          <div className="img_p1">
            <img className="image_preview" src={anime_p5}></img>
          </div>
          <div className="img_p2">
            <div className="title_pro">
              <h2>STREAMING ANIME</h2>
            </div>
            {/* LANGUAGES USED */}
            <div className="lang_used_and_perview">
              <div className="lang_side">
                <p>HTML</p>
                <p>CSS</p>
                <p>FLASK</p>
              </div>
              <div className="perview_link">
                <a href="Google.com" target="blank">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p1">
          {/* IMG PLACE */}
          <div className="img_p1">
            <img className="image_preview" src={upload_template}></img>
          </div>
          <div className="img_p2">
            <div className="title_pro">
              <h2>SLOW UPLOAD</h2>
            </div>
            {/* LANGUAGES USED */}
            <div className="lang_used_and_perview">
              <div className="lang_side">
                <p>HTML</p>
                <p>CSS</p>
                <p>FLASK</p>
              </div>
              <div className="perview_link">
                <a href="Google.com" target="blank">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
