import './App.css';

import ListEpisode from "./ListEpisode";
import Lecteur from "./Lecteur";

import { useEffect, useState} from 'react'
//

function App() {

  //Pas d'état initial puisqu'on a encore rien récupéré (null) ?
  const [episode, setEpisode] = useState(null)

  async function downloadEpisode(episodeNumber) {
    const params = {
      method: 'GET'
    }
    console.log("download ep", episodeNumber)
    const test = await fetch('https://dumbstockapi.com/stock?exchanges=NYSE')
    const testFinal = await test.json()

    setEpisode(testFinal)
  }

  useEffect(() => {
    return downloadEpisode(420)
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
