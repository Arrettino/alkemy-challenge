
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './router/RouterConfig';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouterConfig />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
