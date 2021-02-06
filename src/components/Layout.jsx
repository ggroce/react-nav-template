import React from 'react';
import Routes from '../routes';
import Sidebar from './Sidebar';

function Layout(props) {
  return(
    <div>
      <p>
        This is the main window, (Layout()).
      </p>
      <div>
        <Sidebar />
        <Routes />
      </div>
    </div>
  )
}

export default Layout;
