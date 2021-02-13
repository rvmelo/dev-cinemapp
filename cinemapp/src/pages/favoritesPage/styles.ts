import styled from 'styled-components';

export const FavoritesScreenContainer = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;
  h1 {
    font: 16px sans-serif;
  }
  button {
    background: transparent;
    border: none;
    margin-top: 10px;
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
    background-color: #ff9000;
    text-align: center;
  }
`;
