import React from 'react';
import styled from 'styled-components';

const HeaderParent = styled.div`
  position: sticky;
  top: 0;
  padding: .1em;
  color: #FFFFFF;
  background: #402E32;
`;

function Header(props) {
  return(
    <>
    <HeaderParent>
      <h2>This is the Header.</h2>
    </HeaderParent>
    </>
  );
}

export default Header;
