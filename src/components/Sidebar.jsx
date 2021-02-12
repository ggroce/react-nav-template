import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItems from './SidebarItems';

const SidebarParent = styled.div`
  position: fixed;
  width: 175px;
  height: 100vh;
  max-width: 175px;
  background: #BBA79C;
  
  a {
    text-decoration: none;
  }
  
  // & > div {
  //   width: 200px;
  //   height: 100vh;
  // }
  
  // .fillgap-on-scroll {
  //   width: 200px;
  // }
`;

const SidebarItem = styled.div`
padding: 2px 3px;
transition: all 0.25s ease-in-out;
background: ${props => props.active ? "#ECCFBF" : ""};
margin: 5px 20px;
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
  const location = props.history.location;
  const lastActiveIndex = Number(localStorage.getItem("lastActiveIndex"));
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex  || defaultActive);

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getRoutePath(path) {
    return (path.charAt(0) === '/') ? path : '/' + path;
  }

  useEffect(() => {
    const activePage = SidebarItems.findIndex(page => getRoutePath(page.route) === getRoutePath(location.pathname));
    changeActiveIndex(activePage);
  }, [location]);

  return(
    <SidebarParent>
      <div style={{position: 'fixed'}}>
        <div style={{height: "100px", marginLeft: "10px"}}>
          <p>Image goes here?</p>
        </div>
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
      {/* <div className="fillgap-on-scroll"/> */}
    </SidebarParent>
  );
}

export default Sidebar;
