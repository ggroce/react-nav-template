import React from 'react';
import styled from 'styled-components';

const NavParent = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  padding: .1em;
  color: #FFFFFF;
  background: #402E32;
`;

function Header(props) {
  return(
    <>
    <NavParent>
      <h2>This is the Header.</h2>
    </NavParent>
    </>
  );
}

export default Header;
