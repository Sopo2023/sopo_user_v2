import { useState } from 'react';
import axios from 'axios';

interface SearchResult {
  id: number;
  title: string;
}

const getSearchResults = async (query: string): Promise<SearchResult[]> => {
  try {
    const response = await axios.get('/searchurl', {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

const useSearchResults = (initialQuery: string = '') => {
  const [searchTerm, setSearchTerm] = useState<string>(initialQuery);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      const results = await getSearchResults(searchTerm);
      setSearchResults(results);
    }
  };

  return {
    searchTerm,
    searchResults,
    handleSearchChange,
    handleSearchSubmit,
  };
};

export default useSearchResults;