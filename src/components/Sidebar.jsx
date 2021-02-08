import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItems from './SidebarItems';

const SidebarParent = styled.div`
  background: #BBA79C;

  a {
    text-decoration: none;
  }
  
  & > div {
    width: 200px;
    height: 100vh;
  }
  
  .fillgap-on-scroll {
    width: 200px;
  }
`;

const SidebarItem = styled.div`
padding: 2px 3px;
transition: all 0.25s ease-in-out;
background: ${props => props.active ? "#ECCFBF" : ""};
margin: 1px 20px;
border-radius: 4px;

p {
  color: white;
  font-weight: bold;
  margin: 0;
}

&:hover {
  cursor:pointer;
}

&:hover:not(:first-child) {
  background: #B4DDD4;
}
`;

function Sidebar(props, { defaultActive }) {
  const [activeIndex, setActiveIndex] = useState(defaultActive || 1);

  return(
    <>
      <SidebarParent>
        <div style={{position: 'fixed'}}>
          {
            SidebarItems.map((page, index) => {
              return(
                <SidebarItem key={page.name} active={index === activeIndex}>
                  <Link to={page.route}>
                      <p>{page.name}</p>
                  </Link>
                </SidebarItem>
              );
            })
          }
        </div>
        <div className="fillgap-on-scroll"/>
      </SidebarParent>
    </>
  );
}

export default Sidebar;
