import React, { useState } from "react";
import ReactPlayer from "react-player";


function Lecteur () {
    return (
        <div>
            <select>
                <li> 1 </li>
            </select>
            <h1> Lecteur </h1>

            <button><img src="../public/previous-button.png" alt="previous-button" onClick = {console.log("previous")}/></button>
            <ReactPlayer
                class = "w-flex h-flex"
                url = "https://57d0805091.uloadcdn.com/streaming/DdiBGLWAZeXZzkXHbtIWsA/1640455612/5fc0d4a0d1b04/dcfee2a28ceac5d101ffbb080cae6197/8b698143430d/0/wiwi.mp4"
                playing = "true"
                controls= "true"
            />
            <button><img src="../public/next-button.png" alt="next-button" onClick = {console.log("next")}/></button>
        </div>
    );
};

export default Lecteur