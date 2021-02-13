import styled from 'styled-components';
import { shade } from 'polished';

export const HeaderContainer = styled.header`
  display: flex;
  background-color: #ff9000;
  padding: 10px 80px;
  justify-content: space-between;
  align-items: center;

  .is-active {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    margin: 0 20px;
    color: white;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, 'white')};
    }
  }

  h1 {
    color: white;
  }
`;
