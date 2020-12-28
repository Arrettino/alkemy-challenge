import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Operations from '../pages/Operations';
import OperationsCreate from '../pages/OperationsCreate';
import OperationsUpdate from '../pages/OperationsUpdate';
import NotFound from '../pages/NotFound';

function RouterConfig() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/operations' component={Operations} />
      <Route exact path='/operations/create' component={OperationsCreate} />
      <Route exact path='/operations/update' component={OperationsUpdate} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default RouterConfig;
