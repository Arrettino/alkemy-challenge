
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './router/RouterConfig';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
