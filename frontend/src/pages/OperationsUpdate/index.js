import React, { useState } from 'react';
import OperationsForm from '../../components/OperationsForm';

function OperationsUpdate() {
  const [operation] = useState({});
  const handleData = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className='w-50  mt-5 mx-auto'>
        <OperationsForm
          concept={operation.concept}
          amount={operation.amount}
          date={operation.date}
          type={operation.type}
          handleData={handleData}
          update
        />
      </div>
    </>
  );
}

export default OperationsUpdate;
