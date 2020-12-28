import React from 'react';
import edit from '../../assets/pics/edit.svg';
import remove from '../../assets/pics/delete.svg';
import './operationsTableRow.css';

function OperationsTableRow({ id, concept, amount, date, type }) {
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{concept}</td>
      <td>{amount}</td>
      <td>{date}</td>
      <td>{type}</td>
      <td>
        <img src={edit} alt='edit' className='mr-3 table-cursor-pointer' width='20' />
        <img src={remove} alt='edit' className='ml-3 table-cursor-pointer' width='20' />
      </td>
    </tr>
  );
}

export default OperationsTableRow;
