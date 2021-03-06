import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//components
import OperationsForm from '../../components/OperationsForm';
import Error from '../../components/Error';
//config
import { baseUrl } from '../../config';

function OperationsCreate() {
  const history = useHistory();
  const [error, setError] = useState(false);

  const createOperation = async (operation) => {
    try {
      const response = await fetch(`${baseUrl}/operations`, {
        method: 'POST',
        body: JSON.stringify(operation),
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (response.status === 200) {
        return (history.push('/operations'));
      }
      setError(true);
    } catch (err) {
      setError(true);
    }
  };

  const handleData = (operation) => {
    createOperation(operation);
  };

  if (error) {
    return (<Error />);
  }

  return (
    <>
      <div className='w-50  mt-5 mx-auto'>
        <OperationsForm handleData={handleData} />
      </div>
    </>
  );
}

export default OperationsCreate;
