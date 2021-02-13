/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface favoritesPageData {
  favorites: Movie[];
  handleRemoveFavorite(favoriteMovie: Movie): void;
}

export default function useFavoritesPage(): favoritesPageData {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const favoriteMovies = localStorage.getItem('@cinemapp:favoriteMovies');

    if (favoriteMovies) {
      return JSON.parse(favoriteMovies);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@cinemapp:favoriteMovies', JSON.stringify(favorites));
  }, [favorites]);

  const handleRemoveFavorite = useCallback(
    (favoriteMovie: Movie) => {
      setFavorites(
        favorites.filter(movie => movie.imdbID !== favoriteMovie.imdbID),
      );
    },
    [favorites],
  );

  return {
    favorites,
    handleRemoveFavorite,
  };
}
