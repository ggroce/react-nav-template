import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const SelectedPageParent = styled.div`
  background: #B5CCB8;
  height: 100vh;
  width: 100vw;
`;

function Layout(props) {
  return(
    <>
      <div style={{display: "flex"}}>
        <Sidebar />
        <div style={{maxWidth: "800px"}}>
          <Header />
          <SelectedPageParent>
            {props.children}
          </SelectedPageParent>
        </div>
      </div>
    </>
  )
}

export default Layout;
