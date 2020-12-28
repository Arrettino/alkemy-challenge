import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OperationTable from '../../components/OperationsTable';
import './operations.css';

function Operations() {
  const [operations] = useState([]);
  return (
    <div className='mt-5'>
      <Link to='/operations/create'>
        <button type='button' className='btn btn-success float-right mb-3 mr-3'>
          Crear
        </button>
      </Link>
      <OperationTable operations={operations} actions />
    </div>
  );
}

export default Operations;
