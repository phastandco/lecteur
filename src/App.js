import './App.css';

import ListEpisode from "./ListEpisode";
import Lecteur from "./Lecteur";
import EpisodeTitle from "./EpisodeTitle"
import { useEffect, useState} from 'react'
//

function App() {

  //Pas d'état initial puisqu'on a encore rien récupéré (null) ?
  const [episode, setEpisode] = useState(null)
  const [search, setSearch] = useState(1)

  async function getInfosEpisode(episodeNumber) {
    const params = {
      method: 'GET'
    }

    console.log("ep", episodeNumber)
    const url = "http://localhost:8080/episode/" + episodeNumber
    let response, episode
    try {
      response = await fetch(url, params)
      episode = await response.json()
    } catch (e) {
      console.log("e : " + e)
    }
    
    console.log("e : " + episode.fileName)
    episode ? setEpisode(episode) : setEpisode(null)
  }

  useEffect(() => {
    console.log("prend effet")
  }, []);

  // downloadEpisode();

  return (
    <div className="App">
      <header className="App-header">

        <input className="rounded-lg text-gray-600" onChange={e => setSearch(e.target.value)}></input>
        <button
        className="rounded-xl bg-gray-600 hover:bg-gray-700 px-4 py-1 my-2 border-solid"
        onClick={() => getInfosEpisode(search)}>Download
        </button>
        {episode ? <p> Oui </p>: <p> Non </p>}
        <EpisodeTitle episode = {episode}/>
        <p></p>
      </header>
    </div>
  );
}

export default App;
