import React from 'react';
import Routes from '../routes';
import Nav from './Nav';
import Sidebar from './Sidebar';

function Layout(props) {
  return(
    <>
      <div style={{display: "flex"}}>
        <Sidebar />
        <div style={{maxWidth: "800px"}}>
          <Nav />
          <Routes />
        </div>
      </div>
    </>
  )
}

export default Layout;
