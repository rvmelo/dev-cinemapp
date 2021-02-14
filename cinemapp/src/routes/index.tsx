import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from '../pages/searchPage/container';
import FavoritesPage from '../pages/favoritesPage/container';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SearchPage} />
    <Route path="/favorites" component={FavoritesPage} />
  </Switch>
);

export default Routes;
