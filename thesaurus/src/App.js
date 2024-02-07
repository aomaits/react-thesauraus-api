import { useState } from 'react';
import './App.css';
import { fetchSynonyms } from './api/fetchSynonyms';
import { useGetSynonyms } from './hooks/useGetSynonyms'

function App() {
  const [word, setWord] = useState('');
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();

  const handleFetchSynonyms = async (e) => {
    e.preventDefault();
    getSynonyms(word);
  };


  const handleSynonymClicked = async (newWord) => {
    if (newWord !== word) {
      setWord(newWord);
      getSynonyms(newWord);
    }
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

        {isLoading ? (
          <div class="loading">Loading...</div>
        ) : (
          <ul>
            {synonyms.length > 0 && synonyms.map((synonym) => {
              return <li onClick={() => handleSynonymClicked(synonym.word)} key={synonym.word}>{synonym.word}</li>
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
