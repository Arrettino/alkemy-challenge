import React from 'react';
import './home.css';

function Home() {
  return (
    <div className='home_container'>
      <p>Home</p>
      <div style={{ width: '300px' }}>
        <div className='card text-white bg-success text-center shadow'>
          <div className='card-body'>
            <h2>Balance Total</h2>
            <h3>$5000</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
