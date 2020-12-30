
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import RouterConfig from './router/RouterConfig';
import 'bootstrap/dist/css/bootstrap.css';

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
