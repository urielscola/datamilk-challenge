import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
