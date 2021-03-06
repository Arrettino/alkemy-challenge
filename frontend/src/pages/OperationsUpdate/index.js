import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
//components
import OperationsForm from '../../components/OperationsForm';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import NotFound from '../NotFound';
//config
import { baseUrl } from '../../config';

function OperationsUpdate() {
  const [operation, setOperation] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const findOperation = async () => {
    try {
      const response = await fetch(`${baseUrl}/operations?id=${id}`);
      if (response.status === 200) {
        const newOperation = await response.json();
        setOperation(newOperation);
        setLoading(false);
      } else {
        setNotFound(true);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    findOperation();
  }, []);

  const updateOperation = async (newOperation) => {
    try {
      const result = await Swal.fire({
        title: '¿Guardar cambios?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, guardar',
      });
      if (result.isConfirmed) {
        const response = await fetch(`${baseUrl}/operations/${id}`, {
          method: 'PUT',
          body: JSON.stringify(newOperation),
          headers: {
            'Content-type': 'application/json',
          },
        });
        if (response.status === 200) {
          return (history.push('/operations'));
        }(
          setError(true)
        );
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleData = (newOperation) => {
    updateOperation(newOperation);
  };

  if (error) {
    return (
      <Error />
    );
  }

  if (notFound) {
    return (
      <NotFound />
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
          categoryId={operation.categories.id}
        />
      </div>
    </>
  );
}

export default OperationsUpdate;
