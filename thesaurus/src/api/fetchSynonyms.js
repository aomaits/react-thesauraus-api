import axios from 'axios'; // Import Axios
const API_URL = process.env.API_URL ?? `https://api.datamuse.com`

export const fetchSynonyms = async (word) => {
  try {
    const response = await axios.get(`${API_URL}/words?rel_syn=${word}`, {
      params: {
        rel_syn: word // Passing in word as the query parameter
      }
    });

    return (response.data); 
  } catch (error) {
    console.error('Error fetching synonyms: ', error);
    throw error;
  }
}