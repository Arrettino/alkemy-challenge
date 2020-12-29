import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import OperationTable from '../../components/OperationsTable';
import Error from '../../components/Error';
import { baseUrl } from '../../config';
import './operations.css';

function Operations() {
  const [operations, setOperations] = useState([]);
  const [error, setError] = useState(false);

  const getOperations = async () => {
    try {
      const response = await fetch(`${baseUrl}/operations`);
      const data = await response.json();
      setOperations(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getOperations();
  }, []);

  const handleDelete = async (Id) => {
    try {
      const result = await Swal.fire({
        title: '¿Estas seguro?',
        text: 'No se va a poder revertir esta acción',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar',
      });
      if (result.isConfirmed) {
        const response = await fetch(`${baseUrl}/operations/${Id}`, {
          method: 'DELETE',
        });
        if (response.status === 200) {
          await getOperations();
          return (Swal.fire(
            'Eliminado!',
            'La operación ha sido eliminada.',
            'success',
          ));
        }
        return (setError(true));
      }
    } catch (err) {
      setError(true);
    }
  };

  if (error) {
    return (<Error />);
  }
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
