import React, { useEffect, useState } from 'react';
import OperationsList from '../../components/OperationsTable';
import { baseUrl } from '../../config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

function Home() {
  const [operationsFiltred, setOperationsFiltred] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [loading, setLoadig] = useState(true);
  const [error, setError] = useState(false);

  const getOperations = async () => {
    try {
      const response = await fetch(`${baseUrl}/operations`);
      const operations = await response.json();
      const operationsReverse = operations.reverse();
      const newOperationsFiltred = operationsReverse.slice(0, 10);
      setOperationsFiltred(newOperationsFiltred);
    } catch (err) {
      setError(true);
    }
  };

  const findTotalBalance = async () => {
    try {
      const response = await fetch(`${baseUrl}/operations/totalbalance`);
      const data = await response.json();
      const totalBalanceAmount = data[0].amount;
      setTotalBalance(totalBalanceAmount);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(async () => {
    await getOperations();
    await findTotalBalance();
    setLoadig(false);
  }, []);

  if (error) {
    return (<Error />);
  }

  if (loading) {
    return (<Loading />);
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm' style={{ margin: '20px 100px' }}>
          <div className='card text-white bg-success text-center shadow'>
            <div className='card-body'>
              <h2>Balance Total</h2>
              <h3>
                $
                {totalBalance}
              </h3>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <h2 className='text-center' style={{ margin: '0px 0px 30px 0px' }}>Ultimas 10 operaciones</h2>
          <OperationsList operations={operationsFiltred} />
        </div>
      </div>
    </div>
  );
}

export default Home;
