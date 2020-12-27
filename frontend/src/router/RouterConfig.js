import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../container/home';
import Operations from '../container/operations';
import NotFound from '../container/notFound';

function RouterConfig() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/operations' component={Operations} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default RouterConfig;
