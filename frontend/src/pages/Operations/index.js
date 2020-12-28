import React, { useState } from 'react';
import OperationTable from '../../components/OperationsTable';
import './operations.css';

function Operations() {
  const [operations] = useState([]);
  return (
    <div className='mt-5'>
      <button type='button' className='btn btn-success float-right mb-3 mr-3'>
        Crear
      </button>
      <OperationTable operations={operations} actions />
    </div>
  );
}

export default Operations;
