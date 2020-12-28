import React, { useState } from 'react';
import OperationTable from '../../components/OperationsTable';
import './operations.css';

function Operations() {
  const [operations] = useState([]);
  return (
    <div className='mt-5'>
      <OperationTable operations={operations} />
    </div>
  );
}

export default Operations;
