import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const SelectedPageParent = styled.div`
  background: #b5ccb8;
  margin-left: 175px;
  margin-top: 50px;
  flex: 1;
`

function Layout(props) {
  return (
    <div id="parent">
      <Header />
      <Sidebar history={props.history} />

      <main>
        <div className="scroll-wrapper">
          {props.children}
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Layout
