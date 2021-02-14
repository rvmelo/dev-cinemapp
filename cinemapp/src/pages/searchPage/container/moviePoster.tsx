/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { MovieContainer } from './styles';
import { Movie } from '../useSearchPage';

interface MoviePosterProps {
  movie: Movie;
  favorites: Movie[];
  handleSetFavorites(movie: Movie): void;
}

const MoviePoster: React.FC<MoviePosterProps> = ({
  movie,
  favorites,
  handleSetFavorites,
}) => (
  <MovieContainer key={movie.imdbID}>
    {movie.Poster !== 'N/A' ? (
      <img src={movie.Poster} alt={movie.Title} />
    ) : (
      <p>Imagem não disponível</p>
    )}
    <div>
      <h1>{movie.Title}</h1>
      <h1>
        Year:
        {movie.Year}
      </h1>
      <h1>
        Type:
        {movie.Type}
      </h1>

      <button type="submit" onClick={() => handleSetFavorites(movie)}>
        {favorites.find(
          favoriteMovie => favoriteMovie.imdbID === movie.imdbID,
        ) ? (
          <BsStarFill size={20} color="yellow" />
        ) : (
          <BsStar size={20} />
        )}
      </button>
    </div>
  </MovieContainer>
);

export default memo(MoviePoster);
