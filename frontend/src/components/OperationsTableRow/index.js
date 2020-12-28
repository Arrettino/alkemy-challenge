import React from 'react';
import { Link } from 'react-router-dom';
import edit from '../../assets/pics/edit.svg';
import remove from '../../assets/pics/delete.svg';
import './operationsTableRow.css';

function OperationsTableRow({ id, concept, amount, date, type, actions }) {
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{concept}</td>
      <td>{amount}</td>
      <td>{date}</td>
      <td>{type}</td>
      {actions ?
        (
          <td>
            <Link to='/operations/update'>
              <img src={edit} alt='edit' className='mr-3 table-cursor-pointer' width='20' />
            </Link>
            <img src={remove} alt='edit' className='ml-3 table-cursor-pointer' width='20' />
          </td>

        ) :
        (
          null
        )}

    </tr>
  );
}

export default OperationsTableRow;
