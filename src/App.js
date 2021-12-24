import logo from './logo.svg';
import './App.css';

import Lecteur from "./Lecteur";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lecteur />
        <p>
          <h1 className="text-3xl font-bold underline w-100 h-100"> One Piece numéro :</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
