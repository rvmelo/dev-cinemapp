import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './styles';

const Header: React.FC = () => (
  <HeaderContainer>
    <h1>Cinemapp</h1>

    <div>
      <NavLink to="/" exact activeClassName="is-active">
        Buscar
      </NavLink>
      <NavLink to="/favorites" activeClassName="is-active">
        Favoritos
      </NavLink>
    </div>
  </HeaderContainer>
);

export default Header;
