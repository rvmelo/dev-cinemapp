import React, { memo } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import useSearchPage from './useSearchPage';
import Header from '../../components/header';

import {
  Form,
  MovieContainer,
  SearchScreenContainer,
  ScreenMessage,
} from './styles';

const SearchPage: React.FC = () => {
  const {
    movies,
    favorites,
    searchValue,
    setSearchValue,
    buttonPressed,
    handleMovieSearch,
    handleSetFavorites,
  } = useSearchPage();

  return (
    <>
      <Header />
      <SearchScreenContainer>
        <Form onSubmit={handleMovieSearch}>
          <input
            value={searchValue}
            type="text"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Digite o nome do filme"
          />
          <button type="submit">Buscar</button>
        </Form>

        {movies.length === 0 && buttonPressed ? (
          <ScreenMessage>
            <h1>Nenhum filme encontrado...</h1>
          </ScreenMessage>
        ) : (
          movies.map(movie => (
            <MovieContainer key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
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
          ))
        )}
      </SearchScreenContainer>
    </>
  );
};

export default memo(SearchPage);
