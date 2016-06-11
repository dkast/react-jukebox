import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import ExplorePage from './containers/ExplorePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ExplorePage}></IndexRoute>
  </Route>
);
