/* eslint-disable no-unused-vars */
import { FormEvent, useCallback, useState } from 'react';
import api from '../../services/api';

interface Movie {
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
}

interface searchPageData {
  movies: Movie[];
  searchValue: string;
  setSearchValue(searchValue: string): void;
  buttonPressed: boolean;
  handleMovieSearch(event: FormEvent<HTMLFormElement>): void;
}

export default function useSearchPage(): searchPageData {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleMovieSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setButtonPressed(true);
      api.get('', { params: { s: searchValue } }).then(response => {
        const formattedMovies = response.data.Search
          ? response.data.Search.map((movie: Movie) => ({
              Title: movie.Title,
              Type: movie.Type,
              Year: movie.Year,
              Poster: movie.Poster,
            }))
          : [];

        setMovies([...formattedMovies]);
      });
    },
    [searchValue, setMovies],
  );

  return {
    movies,
    searchValue,
    setSearchValue,
    buttonPressed,
    handleMovieSearch,
  };
}
