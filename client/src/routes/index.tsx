import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const TopRanked = lazy(() => import('../pages/top-ranked'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/top-ranked" component={TopRanked} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
