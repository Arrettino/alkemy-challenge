import React from 'react';

function Operation({ id, concept, amount, date, type }) {
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{concept}</td>
      <td>{amount}</td>
      <td>{date}</td>
      <td>{type}</td>
      <td>a  a</td>
    </tr>
  );
}

export default Operation;
