import React, { memo } from 'react';
import useSearchPage from '../useSearchPage';
import Header from '../../../components/header';
import FormComponent from './formComponent';
import MoviePoster from './moviePoster';

import { SearchScreenContainer, ScreenMessage } from './styles';

const SearchPage: React.FC = () => {
  const {
    movies,
    favorites,
    searchValue,
    setSearchValue,
    buttonPressed,
    isLoading,
    handleMovieSearch,
    handleSetFavorites,
  } = useSearchPage();

  return (
    <>
      <Header />
      <SearchScreenContainer>
        <FormComponent
          handleMovieSearch={handleMovieSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        {movies.length === 0 && isLoading && (
          <ScreenMessage>
            <h1>Carregando...</h1>
          </ScreenMessage>
        )}

        {movies.length === 0 && buttonPressed ? (
          <ScreenMessage>
            <h1>Nenhum filme encontrado...</h1>
          </ScreenMessage>
        ) : (
          movies.map(movie => (
            <MoviePoster
              key={movie.imdbID}
              handleSetFavorites={handleSetFavorites}
              favorites={favorites}
              movie={movie}
            />
          ))
        )}
      </SearchScreenContainer>
    </>
  );
};

export default memo(SearchPage);
