import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Loading from '../Loading';
import Error from '../Error';
import { baseUrl } from '../../config';

const OperationSchema = yup.object().shape({
  concept: yup.string()
    .required('Concepto es requerido')
    .min(3, 'Concepto debe tener por lo menos 3 caracteres')
    .max(30, 'Concepto debe tener menos de 30 caracteres'),
  amount: yup.number()
    .typeError('Monto debe se un numero')
    .required('Monto es requerido')
    .positive('Monto debe ser un numero positivo')
    .integer('Monto debe ser un numero entero'),
  date: yup.string().required('Fecha es requerida'),
});

function OperationsForm({ concept, amount, date, type, handleData, update, categoryId }) {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(OperationSchema),
  });

  const getCategories = async () => {
    try {
      const response = await fetch(`${baseUrl}/operations/categories`);
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (err) {

      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const onSubmit = (data) => {
    const operation = { ...data, amount: parseInt(data.amount, 10), categoriesId: parseInt(data.categoriesId, 10) };
    handleData(operation);
  };

  if (error) {
    return (<Error />);
  }
  if (loading) {
    return (<Loading />);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='concept'>Concepto</label>
          <input type='text' className='form-control' defaultValue={concept} name='concept' id='concept' ref={register} />
          {errors.concept && <p className='alert alert-danger mt-3'>{errors.concept.message}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Monto</label>
          <input type='text' className='form-control' defaultValue={amount} id='amount' name='amount' ref={register} />
          {errors.amount && <p className='alert alert-danger mt-3'>{errors.amount.message}</p>}
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='date'>Fecha</label>
            <input type='date' className='form-control' defaultValue={date} id='date' name='date' ref={register} />
            {errors.date && <p className='alert alert-danger mt-3'>{errors.date.message}</p>}
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='type'>Tipo</label>
            <select className='form-control' id='type' defaultValue={type} name='type' ref={register}>
              <option value='Ingreso'>Ingreso</option>
              <option value='Egreso'>Egreso</option>
            </select>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='categories'>Categoria</label>
            <select className='form-control' id='categories' defaultValue={categoryId} name='categoriesId' searchable='Search here..' ref={register}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            {errors.date && <p className='alert alert-danger mt-3'>{errors.date.message}</p>}
          </div>
          <div className='form-group col-md-6' />
        </div>
        {update ?
          <button type='submit' className='btn btn-success float-right'>Guardar</button> :
          <button type='submit' className='btn btn-success float-right'>Crear</button> }
        <Link to='/operations'>
          <button type='submit' className='btn btn-primary'>Volver</button>
        </Link>
      </form>
    </>
  );
}

export default OperationsForm;
