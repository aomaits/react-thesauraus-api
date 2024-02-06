import {useState} from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('');

  return (
    <div className="App">
      <form>
        <label htmlFor="word-input">Your Word Here:</label>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          id="word-input"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
