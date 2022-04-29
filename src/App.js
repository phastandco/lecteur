import './App.css';

import ListEpisode from "./ListEpisode";
import Lecteur from "./Lecteur";

import { useEffect, useState} from 'react'
//

function App() {

  //Pas d'état initial puisqu'on a encore rien récupéré (null) ?
  const [episode, setEpisode] = useState(null)

  const ipLenovo = '192.168.0.38'
  const nodePort = ':8080'

  async function downloadEpisode(episodeNumber) {
    const params = {
      method: 'GET',
      mode: 'no-cors',
    }

    console.log('download ep : ', episodeNumber)
    
    //const url = ipLenovo + nodePort + '/episode/' + episodeNumber
    let response = await fetch('http://localhost:8080/episode/420', params)

    try {
      const ep = await response.json()
      console.log ("episode : " + ep.filname )
    } catch (e) {
      console.log("err : " + e)
    }
   
    //setEpisode(testFinal)
  }
  
  async function getInfosEpisode () {
      const response = await fetch ('http://localhost:8080/episode/422')
      const test = await response.json()
      console.log('test : ' + test.title)

  }

  useEffect(() => {
    console.log('prends effet')
  }, []);

  // downloadEpisode();

  return (
    <div className="App">
      <header className="App-header">

        <button
        className="rounded-xl bg-gray-600 hover:bg-gray-700 px-4 py-1 border-solid"
        onClick={() => downloadEpisode(420)}>Download
        </button>
        {episode && <p>Yoooo</p>}
      </header>
    </div>
  );
}

export default App;
