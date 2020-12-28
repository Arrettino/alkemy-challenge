import React from 'react';
import TableRow from '../OperationsTableRow';

function ListOperations({ operations }) {
  return (
    <table className='table table-striped'>
      <thead className='thead-dark'>
        <tr>

          <th scope='col'>Id</th>
          <th scope='col'>Concepto</th>
          <th scope='col'>Monto</th>
          <th scope='col'>Fecha</th>
          <th scope='col'>Tipo</th>
          <th scope='col'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {operations.map(({ id, concept, amount, date, type }) => (
          <TableRow id={id} concept={concept} amount={amount} date={date} type={type} />
        ))}
      </tbody>
    </table>
  );
}

export default ListOperations;
