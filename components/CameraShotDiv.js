import React from "react";
import "../stylesheets/cameraShotStyle.scss";

const CameraShotDiv = ({color}) => 
    <div className="camera-shot-div">
        <div className="top-left" style={{borderColor: color ? color : "white"}}></div>
        <div className="top-right" style={{borderColor: color ? color : "white"}}></div>
        <div className="bottom-left" style={{borderColor: color ? color : "white"}}></div>
        <div className="bottom-right" style={{borderColor: color ? color : "white"}}></div>
    </div>

export default CameraShotDiv;