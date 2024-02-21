import React from "react";
import '../Projects/Projects.css'
import p1_recipe from '../icons_navbar/p1.png'
import super_p2 from '../icons_navbar/p2.png'
import kasper_p1 from '../icons_navbar/kasper_1.png'
import calimero_life from '../icons_navbar/calimero_life.png'
import anime_p5 from '../icons_navbar/p5.png'
import upload_template from '../icons_navbar/p6.png'
// REACT
export default function Projects(){
    return(
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
                        <img src={p1_recipe}></img>
                    </div>
                    {/* DIV LINK FOR SITE PERVIEW */}
                    {/* <div className="link_perview">
                        <a href="Google.com" target="blank">RECIPES SITE</a>
                    </div> */}
                    <div className="img_p2">
                       <div className="title_pro">
                            <h2>RECIPES SITE</h2>
                       </div>
                       {/* LANGUAGES USED */}
                       <div className="lang_used_and_perview">
                            <div className="lang_side">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>FLASK</p>
                            </div>
                            <div className="perview_link">
                                <a href="Google.com" target="blank"><p></p></a>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="p1">
                    {/* IMG PLACE */}
                    <div className="img_p1">
                        <img src={super_p2}></img>
                    </div>
                    <div className="img_p2">
                       <div className="title_pro">
                            <h2>SUPER TEMPLATE (DESKTOP ONLY)</h2>
                       </div>
                       {/* LANGUAGES USED */}
                       <div className="lang_used_and_perview">
                            <div className="lang_side">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JS</p>
                            </div>
                            <div className="perview_link">
                                <a href="Google.com" target="blank"><p></p></a>
                            </div>
                       </div>
                    </div>
                </div>
                {/* OTHER PROJECYS */}
                <div className="p1">
                    {/* IMG PLACE */}
                    <div className="img_p1">
                        <img src={calimero_life}></img>
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
                                <p>FLASK</p>
                            </div>
                            <div className="perview_link">
                                <a href="Google.com" target="blank"><p></p></a>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="p1">
                    {/* IMG PLACE */}
                    <div className="img_p1">
                        <img src={kasper_p1}></img>
                    </div>
                    <div className="img_p2">
                       <div className="title_pro">
                            <h2>Kasper Template SITE</h2>
                       </div>
                       {/* LANGUAGES USED */}
                       <div className="lang_used_and_perview">
                            <div className="lang_side">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>FLASK</p>
                            </div>
                            <div className="perview_link">
                                <a href="Google.com" target="blank"><p></p></a>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="p1">
                    {/* IMG PLACE */}
                    <div className="img_p1">
                        <img src={anime_p5}></img>
                    </div>
                    <div className="img_p2">
                       <div className="title_pro">
                            <h2>RECIPES SITE</h2>
                       </div>
                       {/* LANGUAGES USED */}
                       <div className="lang_used_and_perview">
                            <div className="lang_side">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>FLASK</p>
                            </div>
                            <div className="perview_link">
                                <a href="Google.com" target="blank"><p></p></a>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="p1">
                    {/* IMG PLACE */}
                    <div className="img_p1">
                        <img src={upload_template}></img>
                    </div>
                    <div className="img_p2">
                       <div className="title_pro">
                            <h2>RECIPES SITE</h2>
                       </div>
                       {/* LANGUAGES USED */}
                       <div className="lang_used_and_perview">
                            <div className="lang_side">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>FLASK</p>
                            </div>
                            <div className="perview_link">
                                <a href="Google.com" target="blank"><p></p></a>
                            </div>
                       </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}