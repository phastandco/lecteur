import React from "react";
import ReactPlayer from "react-player";
import next from './images/next-button.png';
import previous from './images/previous-button.png';

let lien = "../tv/One Piece 724.mp4"

function Lecteur () {
    return (
        <div class="flex flex-row">
            <button><img src={previous} alt="previous-button" class="bg-red-600 h-20 w-20  rounded-full" onClick = {console.log("previous")}/></button>
            <ReactPlayer
                class = "w-flex h-flex"
                url = {lien}
                playing = "true"
                controls= "true"
            />
            <button><img src={next} alt="next-button" class="bg-red-600 h-20 w-20 rounded-full" onClick = {console.log("next")}/></button>

        </div>
    );
};

export default Lecteur
