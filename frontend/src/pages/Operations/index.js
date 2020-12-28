import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OperationTable from '../../components/OperationsTable';
import './operations.css';

function Operations() {
  const [operations] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div className='mt-5'>
      <Link to='/operations/create'>
        <button type='button' className='btn btn-success float-right mb-3 mr-3'>
          Crear
        </button>
      </Link>
      <OperationTable operations={operations} actions handleDelete={handleDelete} />
    </div>
  );
}

export default Operations;
