import styled from 'styled-components';
import { shade } from 'polished';

export const ScreenMessage = styled.div`
  margin-top: 10px;
`;

export const SearchScreenContainer = styled.div`
  background-color: grey;
  max-width: 960px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    font: 16px sans-serif;
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
    background: #ff9000;
    border: 0;
    color: #3e3b47;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  input {
    border-radius: 5px;
    padding: 5px;
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
