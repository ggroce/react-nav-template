import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const SelectedPageParent = styled.div`
  background: #B5CCB8;
`;

function Layout(props) {
  return(
    <div style={{display: "flex"}}>
      <Sidebar history={props.history}/>
      <div style={{flexGrow: "1"}}>
        <Header />
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
