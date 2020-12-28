import React from 'react';
import OperationsForm from '../../components/OperationsForm';

function Operations() {
  const handleData = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className='w-50  mt-5 mx-auto'>
        <OperationsForm handleData={handleData} />
      </div>
    </>
  );
}

export default Operations;
