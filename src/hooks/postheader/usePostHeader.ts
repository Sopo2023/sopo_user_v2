import { useState } from 'react';

interface SearchResult {
  id: number;
  title: string;
}

const fetchSearchResults = async (query: string): Promise<SearchResult[]> => {
  try {
    const response = await fetch(`/searchurl?q=${encodeURIComponent(query)}`);
    // 서버 서치 들어갈 자리입니당~~~*^^*
    if (!response.ok) {
      throw new Error('Network response error..ㅠㅜㅠㅜㅠㅜ');
    }
    return response.json();
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
      const results = await fetchSearchResults(searchTerm);
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