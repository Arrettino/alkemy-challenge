import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OperationTable from '../../components/OperationsTable';
import { baseUrl } from '../../config';
import './operations.css';

function Operations() {
  const [operations, setOperations] = useState([]);

  const getOperations = async () => {
    const response = await fetch(`${baseUrl}/operations`);
    const data = await response.json();
    setOperations(data);
  };

  useEffect(() => {
    getOperations();
  }, []);
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
