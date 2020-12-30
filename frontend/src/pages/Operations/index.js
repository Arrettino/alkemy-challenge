import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
//components
import Loading from '../../components/Loading';
import OperationTable from '../../components/OperationsTable';
import Error from '../../components/Error';
//config
import { baseUrl } from '../../config';
//assets
import './operations.css';

function Operations() {
  const [operations, setOperations] = useState([]);
  const [operationsFiltred, setOperationsFiltred] = useState([]);
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getOperations = async () => {
    try {
      const response = await fetch(`${baseUrl}/operations`);
      const data = await response.json();
      const dataReverse = await data.reverse();
      setOperations(dataReverse);
      setOperationsFiltred(dataReverse);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetch(`${baseUrl}/operations/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (err) {

      setError(true);
      setLoading(false);
    }
  };

  useEffect(async () => {
    await getOperations();
    await getCategories();
    setLoading(false);
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

  const handleChange = (e) => {
    if (e.target.value === '0') {
      setOperationsFiltred(operations);
    } else {
      const categoriesIdNumber = parseInt(e.target.value, 10);
      const filtedOperations = operations.filter((operation) => operation.categoriesId === categoriesIdNumber);
      setOperationsFiltred(filtedOperations);
    }
  };

  if (error) {
    return (<Error />);
  }

  if (loading) {
    return (<Loading />);
  }

  return (
    <div className='mt-5'>
      <div className='mb-3 row'>
        <div className='col-md-6'>
          <label htmlFor='categories' className='ml-3'>Filtrar por categoria</label>
          <select className='form-control w-50 ml-3' id='categories' name='categoriesId' onChange={handleChange} searchable='Search here..'>
            <option value='0'>Sin filtro</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className='col-md-6'>
          <Link to='/operations/create'>
            <button type='button' className='btn btn-success float-right mt-4 mr-3'>
              Crear
            </button>
          </Link>
        </div>
      </div>
      <OperationTable operations={operationsFiltred} actions handleDelete={handleDelete} />
    </div>
  );
}

export default Operations;
