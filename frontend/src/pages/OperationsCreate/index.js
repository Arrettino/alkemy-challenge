import React from 'react';
import OperationsForm from '../../components/OperationsForm';
import { baseUrl } from '../../config';

function OperationsCreate() {

  const createOperation = async (operation) => {
    await fetch(`${baseUrl}/operations`, {
      method: 'POST',
      body: JSON.stringify(operation),
      headers: {
        'Content-type': 'application/json',
      },
    });
  };

  const handleData = (operation) => {
    console.log(operation);
    createOperation(operation);
  };
  return (
    <>
      <div className='w-50  mt-5 mx-auto'>
        <OperationsForm handleData={handleData} />
      </div>
    </>
  );
}

export default OperationsCreate;
