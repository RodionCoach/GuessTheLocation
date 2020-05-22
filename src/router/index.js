import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { actions } from 'redux/game';
import { useDispatch } from 'react-redux';

import NavBar from 'components/NavBar';

const Play = lazy(() => import('pages/Play'));
const Scores = lazy(() => import('pages/Scores'));

const AppRouter = () => {
  const dispatch = useDispatch();
  dispatch(actions.getFromStorage());
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/play" component={Play} />
          <Route path="/scores" component={Scores} />
          <Redirect from="/" to="/play" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
