import React from 'react';
import styled from 'styled-components';

const DashboardParent = styled.div`
  background: #B5CCB8;
  height: 100vh;
  width: 100vw;
`;

function Dashboard(props) {
  return(
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard here, reporting for duty.</p>
    </div>
  );
}

export default Dashboard;
