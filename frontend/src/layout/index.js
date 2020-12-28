import React from 'react';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );

}

export default Layout;
