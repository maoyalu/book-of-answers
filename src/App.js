import React, {useState} from 'react';
import './App.css';

import Home from './Home'
import Ask from './Ask'

function App() {
  let [start, setStart] = useState(false);

  return (
    <div className="App">
      <main className="App-Content">
        {start
          ? <Ask />
          : <Home onClick={() => {setStart(true)}}/>
        }
      </main>
      <footer>Made with <span role="img" aria-label="heart">❤️</span> by YALU</footer>
    </div>
  );
}

export default App;
