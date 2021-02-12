import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const SelectedPageParent = styled.div`
  background: #B5CCB8;
  margin-left: 175px;
  margin-top: 50px;

  min-height: calc(100vh - 130px);
`;

function Layout(props) {
  return(
    <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
      <Sidebar history={props.history}/>
      <Header />
      <SelectedPageParent>
        {props.children}
      </SelectedPageParent>
      <Footer />
    </div>
  )
}

export default Layout;
