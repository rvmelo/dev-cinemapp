import styled from 'styled-components';
import { shade } from 'polished';

export const ScreenMessage = styled.div`
  margin-top: 10px;
`;

export const SearchScreenContainer = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;

  h1 {
    font: 16px sans-serif;
    color: white;
  }

  button {
    background: transparent;
    border: none;
    margin-top: 10px;
  }

  svg {
    color: yellow;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 10px;
    padding: 5px 50px;
    border-radius: 5px;
    background: #e50914;
    border: 0;
    color: white;

    &:hover {
      background: ${shade(0.2, '#e50914')};
    }
  }

  input {
    border-radius: 5px;
    padding: 5px;
  }

  @media (max-width: 380px) {
    max-width: 200px;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;

  div {
    padding: 20px;
    background-color: #e50914;
    text-align: center;
  }

  @media (max-width: 380px) {
    max-width: 200px;
    img {
      width: 100%;
    }

    div {
      padding: 20px 0;
    }
  }
`;
