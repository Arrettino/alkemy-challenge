import React from 'react';
import logo from '../../assets/pics/logo.svg';

function NavBar({ operations }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/#'>
          <img src={logo} alt='' height='50' className='d-inline-block align-top' />
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/#'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#'>Operaciones</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
