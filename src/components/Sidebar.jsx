import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItems from './SidebarItems';

const SidebarParent = styled.div`
  position: sticky;
  background: #BBA79C;
  top: 0;
  width: 200px;
  height: 100vh;
`;

const SidebarItem = styled.div`
padding: 2px 3px;
transition: all 0.25s ease-in-out;
background: ${props => props.active ? "#ECCFBF" : ""};
margin: 1px 20px;
border-radius: 4px;

a {
  text-decoration: none;
}

p {
  color: white;
  font-weight: bold;
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

      </SidebarParent>
    </>
  );
}

export default Sidebar;
