import React from "react";

const EpisodeTitle = episode => {
    if (episode) {
        console.log("ça marche", episode)
        return <p> {episode.fileName} </p>
    } else {
        console.log("ça marche po", episode)
        return <p> {episode.fileName} </p>
    }
}

export default EpisodeTitle;