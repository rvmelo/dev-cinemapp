import React, { memo } from 'react';
import { BsTrash } from 'react-icons/bs';
import useFavoritesPage from './useFavoritesPage';
import Header from '../../components/header';

import { MovieContainer, FavoritesScreenContainer } from './styles';

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
          <MovieContainer key={favoriteMovie.imdbID}>
            <img src={favoriteMovie.Poster} alt={favoriteMovie.Title} />
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

              <button
                type="submit"
                onClick={() => handleRemoveFavorite(favoriteMovie)}
              >
                <BsTrash size={20} />
              </button>
            </div>
          </MovieContainer>
        ))}
      </FavoritesScreenContainer>
    </>
  );
};

export default memo(FavoritesPage);
