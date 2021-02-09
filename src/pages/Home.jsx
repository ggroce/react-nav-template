import React from 'react';
import styled from 'styled-components';

const HomeParent = styled.div`
  background: #B5CCB8;
  h1 {
    margin: auto 0;
  }
`;

function Home(props) {
  return(
    <HomeParent>
      <h1>Home</h1>
      <p>Home here, reporting for duty.</p>
    </HomeParent>
  );
}

export default Home;
