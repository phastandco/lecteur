import React from "react";

function EpisodeTitle (episode) {

    if (!episode) {
        return <p> pas d'ep</p>
    } else if (episode.tile === null) {
        return <p> on sait pas </p>
    } else {
        return <p> wat 2 fuk </p>
    }
}

export default EpisodeTitle;