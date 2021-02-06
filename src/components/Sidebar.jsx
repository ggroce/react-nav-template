import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarItems from './SidebarItems';

const SidebarParent = styled.div`
  background: #c34a36;
  width: 250px;
  height: 100vh;
`;

const SidebarItem = styled.div`
padding: 2px 3px;
transition: all 0.25s ease-in-out;
background: ${props => props.active ? "#b15b00" : ""};
margin: 1px 4px;
border-radius: 4px;

p {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

&:hover {
  cursor:pointer;
}

&:hover:not(:first-child) {
  background: #c34a36;
}
`;

function Sidebar(props, { defaultActive }) {
  const [activeIndex, setActiveIndex] = useState(defaultActive || 1);

  return(
    <>
      <SidebarParent>
        <p>
          this is the sidebar.
        </p>
        {
          SidebarItems.map((page, index) => {
            return(
              <SidebarItem key={page.name} active={index === activeIndex}>
                <p>{page.name}</p>
              </SidebarItem>
            );
          })
        }
      </SidebarParent>
    </>
  );
}

export default Sidebar;
