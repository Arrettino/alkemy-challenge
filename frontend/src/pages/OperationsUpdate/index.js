import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import OperationsForm from '../../components/OperationsForm';

function OperationsUpdate() {
  const [operation, setOperation] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const findOperation = async () => {
    try {
      const response = await fetch(`${baseUrl}/operations?id=${id}`);
      const operation = await response.json();
      setOperation(operation);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    findOperation();
  }, []);
  const updateOperation = async (operation) => {
    await fetch(`${baseUrl}/operations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(operation),
      headers: {
        'Content-type': 'application/json',
      },
    });
  };

  const handleData = (operation) => {
    updateOperation(operation);
  };

  if (error) {
    return (
      <Error />
    );
  }

  if (loading) {
    return (
      <Loading />
    );
  }

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
