/* eslint-disable no-unused-vars */
import React, { FormEvent, memo } from 'react';

import { Form } from './styles';

interface FormComponentProps {
  handleMovieSearch(event: FormEvent<HTMLFormElement>): void;
  setSearchValue(searchValue: string): void;
  searchValue: string;
}

const FormComponent: React.FC<FormComponentProps> = ({
  handleMovieSearch,
  setSearchValue,
  searchValue,
}) => (
  <Form onSubmit={handleMovieSearch}>
    <input
      value={searchValue}
      type="text"
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Digite o nome do filme"
    />
    <button type="submit">Buscar</button>
  </Form>
);

export default memo(FormComponent);
