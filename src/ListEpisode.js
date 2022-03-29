import React from "react";

function ListEpisode () {

    let num_ep = 1;

    function change () {
        console.log(num_ep)
    }

    return (
        <div class="inline-block">
            <select class="" value={num_ep} onChange={change()}>
                <option value="ep_1">1</option>
                <option value="ep_2">2</option>
                <option value="ep_3">3</option>
            </select>
        </div>
    )
};

export default ListEpisode