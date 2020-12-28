import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function OperationsForm({ concept, amount, date, type, handleData, update }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => handleData(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='concept'>Concepto</label>
          <input type='text' className='form-control' defaultValue={concept} name='concept' id='concept' ref={register} />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Monto</label>
          <input type='text' className='form-control' defaultValue={amount} id='amount' name='amount' ref={register} />
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='date'>Fecha</label>
            <input type='date' className='form-control' defaultValue={date} id='date' name='date' ref={register} />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='type'>Tipo</label>
            <select className='form-control' id='type' defaultValue={type} name='type' ref={register}>
              <option value='Ingreso'>Ingreso</option>
              <option value='Egreso'>Egreso</option>
            </select>
          </div>
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
