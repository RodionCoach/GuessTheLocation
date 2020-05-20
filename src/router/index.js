import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Play = lazy(() => import('pages/Play'));
const Scores = lazy(() => import('pages/Scores'));
const NotFound = lazy(() => import('pages/NotFound'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Play} />
          <Route path="/scores" component={Scores} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
