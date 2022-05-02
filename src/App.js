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

  const ipLenovo = '192.168.0.38'
  const nodePort = ':8080'

  async function getInfosEpisode(episodeNumber) {
        
    //const url = ipLenovo + nodePort + '/episode/' + episodeNumber
    console.log("Nb ep souhaité : ", episodeNumber)
    const url = "http://localhost:8080/episode/" + episodeNumber
    let response, episode

    const params = {
      method: 'GET',
      mode: 'no-cors',
    };

    try {
      response = await fetch(url, params)
      episode ? episode = await response.json() : 
      console.log ("episode : " + episode.filname )
      setEpisode(episode)
    } catch (e) {
      console.log("e : " + e)
    }
      
  }

  useEffect(() => {
    console.log('prends effet')
  }, [])

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
