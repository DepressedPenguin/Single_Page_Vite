import React from "react";
import "../Tools/Tools.css";
import linux_cmds_tool from "../tools_imgs/cmds_linux.png";
import gen_password from "../tools_imgs/gen_password.png";
import get_position from "../tools_imgs/get_position.png";
import px_to_rem_tool from "../tools_imgs/px_to_rem_tool.png";
// CREATE FUNCTION REACT COMPONENT TOOLS

export default function Tools() {
  return (
    <div className="Tools">
      <div className="box_tool">
        <div className="img_box">
          <img id="fix_size" src={linux_cmds_tool}></img>
        </div>
        <div className="title_tool">
          <p>CMDS LINUX TOOL </p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="box_tool">
        <div className="img_box">
          <img id="fix_size" src={gen_password}></img>
        </div>
        <div className="title_tool">
          <p>GEN PASSWORD </p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="box_tool">
        <div className="img_box">
          <img id="fix_size" src={get_position}></img>
        </div>
        <div className="title_tool">
          <p>Get Position </p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="box_tool">
        <div className="img_box">
          <img id="fix_size" src={px_to_rem_tool}></img>
        </div>
        <div className="title_tool">
          <p>PX TO REM TOOL </p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="box_tool"></div>
      <div className="box_tool"></div>
      <div className="box_tool"></div>
      <div className="box_tool"></div>
    </div>
  );
}
