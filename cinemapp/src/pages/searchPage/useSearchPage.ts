/* eslint-disable no-unused-vars */
import { FormEvent, useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface searchPageData {
  movies: Movie[];
  favorites: Movie[];
  searchValue: string;
  setSearchValue(searchValue: string): void;
  buttonPressed: boolean;
  handleMovieSearch(event: FormEvent<HTMLFormElement>): void;
  handleSetFavorites(movie: Movie): void;
}

export default function useSearchPage(): searchPageData {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const favoriteMovies = localStorage.getItem('@cinemapp:favoriteMovies');

    if (favoriteMovies) {
      return JSON.parse(favoriteMovies);
    }

    return [];
  });
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
              Year: movie.Year,
              imdbID: movie.imdbID,
              Type: movie.Type,
              Poster: movie.Poster,
            }))
          : [];

        setMovies([...formattedMovies]);
      });
    },
    [searchValue, setMovies],
  );

  useEffect(() => {
    localStorage.setItem('@cinemapp:favoriteMovies', JSON.stringify(favorites));
  }, [favorites]);

  const handleSetFavorites = useCallback(
    (movie: Movie) => {
      if (!favorites.find(favorite => favorite.imdbID === movie.imdbID)) {
        setFavorites(prev => [...prev, movie]);
      }
    },
    [favorites],
  );

  return {
    movies,
    favorites,
    searchValue,
    setSearchValue,
    buttonPressed,
    handleMovieSearch,
    handleSetFavorites,
  };
}
