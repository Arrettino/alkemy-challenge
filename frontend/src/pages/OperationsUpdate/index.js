import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../config';
import OperationsForm from '../../components/OperationsForm';

function OperationsUpdate() {
  const [operation, setOperation] = useState({});
  const { Id } = useParams();

  const findOperation = async () => {
    const response = await fetch(`${baseUrl}/operations/${Id}`);
    const operation = await response.json();
    setOperation(operation);
  };

  useEffect(() => {
    findOperation();
  }, []);

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
