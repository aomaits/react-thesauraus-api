import { useState } from 'react';
import './App.css';
import axios from 'axios'; // Import Axios

function App() {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState([]); // Initialize as empty array

  const handleFetchSynonyms = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.datamuse.com/words?rel_syn=${word}`, {
        params: {
          rel_syn: word // Passing in word as the query parameter
        }
      });

      setSynonyms(response.data); // Setting synonyms w/ API response data
    } catch (error) {
      console.error('Error fetching synonyms: ', error);
    }
    // fetch()
    // .then((response) => response.json())
    // .then(setSynonyms);
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={handleFetchSynonyms}>
          <label htmlFor="word-input">Your Word Here:</label>
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            id="word-input"
          ></input>
          <button>Submit</button>
        </form>

        <ul>
          {synonyms.length > 0 && synonyms.map((synonym) => {
            return <li key={synonym.word}>{synonym.word}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
