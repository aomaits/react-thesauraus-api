import { fetchSynonyms } from "../api/fetchSynonyms";
import { useState } from "react";

//abstracting away the state from the App.js file
export const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState([]); // Initialize as empty array
  const [isLoading, setIsLoading] = useState(false);

  const getSynonyms = async (word) => {
    try {
      setIsLoading(true);
      const fetchedSynonyms = await fetchSynonyms(word);
      setSynonyms(fetchedSynonyms);
      setIsLoading(false);
    } catch (error) {
      console.error(error)
    }
  }


return { isLoading, synonyms, getSynonyms }
}