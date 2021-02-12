import React from 'react';
import styled from 'styled-components';

const FooterParent = styled.div`
  bottom: 0;
  width: 100%;
  padding: .1em;
  color: #FFFFFF;
  background: #402E32;
  margin: 0;
  height: 60px;
  z-index: 10;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1em;
  margin: 0;

  li {
    padding-left: 30px;
    padding-top: 20px;
  }

  a {
    color: #f5f5f6;
    text-decoration: none;
  }
`;

function Footer(props) {
  return(
    <FooterParent>
      <footer>
        <nav>
          <NavLinks>
              <li><a href="">List1</a></li>
              <li><a href="">List2</a></li>
              <li><a href="">About</a></li>
              <li style={{marginLeft: "auto"}}><a href="">Contacts</a></li>
          </NavLinks>
        </nav>
      </footer>
    </FooterParent>
  );
}

export default Footer;
