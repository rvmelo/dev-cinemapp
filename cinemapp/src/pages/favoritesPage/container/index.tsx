import React, { memo } from 'react';
import useFavoritesPage from '../useFavoritesPage';
import Header from '../../../components/header';
import MoviePoster from './moviePoster';

import { FavoritesScreenContainer } from './styles';

const FavoritesPage: React.FC = () => {
  const { favorites, handleRemoveFavorite } = useFavoritesPage();

  return (
    <>
      <Header />
      <FavoritesScreenContainer>
        {favorites.length === 0 ? (
          <h1>Nenhum filme selecionado como favorito ...</h1>
        ) : (
          <h2>Filmes Favoritos</h2>
        )}
        {favorites.map(favoriteMovie => (
          <MoviePoster
            key={favoriteMovie.imdbID}
            handleRemoveFavorite={handleRemoveFavorite}
            favoriteMovie={favoriteMovie}
          />
        ))}
      </FavoritesScreenContainer>
    </>
  );
};

export default memo(FavoritesPage);
