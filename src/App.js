import './App.css';

import ListEpisode from "./ListEpisode";
import Lecteur from "./Lecteur";
import EpisodeTitle from "./EpisodeTitle"
import { useEffect, useState} from 'react'

function App() {

  const [episode, setEpisode] = useState(0)
  const [searchNumber, setSearch] = useState(1)

  const ipLenovo = 'localhost'
  const nodePort = 8080

  async function getEpisode(number) {
    let url = "http://" + ipLenovo + ":" + nodePort + "/episode/" + number
    console.log("fetch : " + url)

    const params = {
      method: 'GET',
    };

    let response = await fetch(url, params);
    let episode = await response.json();
    setEpisode(episode);
  }

  async function putEpisode(number) {
    console.log("number", number)
    let url = "http://" + ipLenovo + ":" + nodePort + "/episode/" + number
    console.log("fetch : " + url)

    const params = {
      method: 'POST',
    };

    let response = await fetch(url, params);
    if (response)
      console.log("okok");
  }

  console.log("episode", episode)
  return (
    <div className="App">
      <header className="App-header">

        <input
        className="rounded-lg text-gray-600"
        onChange={e => setSearch(e.target.value)}></input>
        <button
          className="rounded-xl bg-gray-600 hover:bg-gray-700 px-4 py-1 my-2 border-solid"
          onClick={() => getEpisode(searchNumber)}>Download
        </button>
        {
          (episode) ?
          <EpisodeTitle title={episode.fileName} /> : ''
        }
        {
          ( (episode === null) || (episode.msg === "not found") ) ?
          <> 
            <p> Episode Not Found </p>
            <button
              className="rounded-xl bg-gray-600 hover:bg-gray-700 px-4 py-1 my-2 border-solid"
              onClick={() => putEpisode(searchNumber)}>Do you want to add it ?
            </button>
            </> :
            ""
        }
        </header>
    </div>
  );
}



export default App;
