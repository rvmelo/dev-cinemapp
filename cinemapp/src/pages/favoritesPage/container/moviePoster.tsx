/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { BsTrash } from 'react-icons/bs';
import { MovieContainer } from './styles';
import { Movie } from '../useFavoritesPage';

interface MoviePosterProps {
  favoriteMovie: Movie;
  handleRemoveFavorite(favoriteMovie: Movie): void;
}

const MoviePoster: React.FC<MoviePosterProps> = ({
  favoriteMovie,
  handleRemoveFavorite,
}) => (
  <MovieContainer key={favoriteMovie.imdbID}>
    {favoriteMovie.Poster !== 'N/A' ? (
      <img src={favoriteMovie.Poster} alt={favoriteMovie.Title} />
    ) : (
      <p>Imagem não disponível</p>
    )}
    <div>
      <h1>{favoriteMovie.Title}</h1>
      <h1>
        Year:
        {favoriteMovie.Year}
      </h1>
      <h1>
        Type:
        {favoriteMovie.Type}
      </h1>

      <button type="submit" onClick={() => handleRemoveFavorite(favoriteMovie)}>
        <BsTrash size={20} />
      </button>
    </div>
  </MovieContainer>
);

export default memo(MoviePoster);
