import React from 'react';
import styled from 'styled-components';

const HeaderParent = styled.div`
  position: sticky;
  top: 0;
  padding: .1em;
  color: #FFFFFF;
  background: #402E32;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1em;
  margin: 0;
  height: 3rem;

  li {
    padding: 20px;
  }

  a {
    color: #f5f5f6;
    text-decoration: none;
  }
`;

function Header(props) {
  return(
    <HeaderParent>
        <nav>
          <NavLinks>
              <li><a href="">List1</a></li>
              <li><a href="">List2</a></li>
              <li><a href="">About</a></li>
              <li style={{marginLeft: "auto"}}><a href="">Contacts</a></li>
          </NavLinks>
        </nav>
    </HeaderParent>
  );
}

export default Header;
