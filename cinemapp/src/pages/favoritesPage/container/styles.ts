import styled from 'styled-components';

export const FavoritesScreenContainer = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;

  h1 {
    font: 16px sans-serif;
    color: white;
  }

  h2 {
    color: white;
  }

  svg {
    color: white;
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

  p {
    color: white;
    margin: 50px auto;
  }

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
