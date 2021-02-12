import React, { useState, useCallback, FormEvent } from 'react';
import api from '../../services/api';
import { Form, MovieContainer, SearchScreenContainer } from './styles';

interface Movie {
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
}

const SearchPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleMovieSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
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

  return (
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

      {movies.map(movie => (
        <MovieContainer>
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
          </div>
        </MovieContainer>
      ))}
    </SearchScreenContainer>
  );
};

export default SearchPage;
