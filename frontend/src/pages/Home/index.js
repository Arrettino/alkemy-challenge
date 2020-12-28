import React, { useState } from 'react';
import OperationsList from '../../components/OperationsTable';
import './home.css';

function Home() {
  const [operations] = useState([]);
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm' style={{ margin: '20px 100px' }}>
          <div className='card text-white bg-success text-center shadow'>
            <div className='card-body'>
              <h2>Balance Total</h2>
              <h3>$5000</h3>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <h2 className='text-center' style={{ margin: '0px 0px 30px 0px' }}>Ultimas 10 operaciones</h2>
          <OperationsList operations={operations} />
        </div>
      </div>
    </div>
  );
}

export default Home;
