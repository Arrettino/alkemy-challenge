import React from 'react';
import TableRow from '../OperationsTableRow';

function OperationTable({ operations, actions }) {
  return (
    <div className='table-responsive'>
      <table className='table table-striped'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Concepto</th>
            <th scope='col'>Monto</th>
            <th scope='col'>Fecha</th>
            <th scope='col'>Tipo</th>
            {actions ?
              (
                <th scope='col'>Acciones</th>
              ) :
              (
                null
              )}

          </tr>
        </thead>
        <tbody>
          {operations.map(({ id, concept, amount, date, type }) => (
            <TableRow id={id} concept={concept} amount={amount} date={date} type={type} actions={actions} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OperationTable;
