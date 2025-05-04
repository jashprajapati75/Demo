import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import {
    Container,
    Navbar,
  } from "reactstrap";
import Navbar1 from './AssistantsHeader';
import A from './Assistants';
// import Teams from './Teams';
import Teams from './Hello/Teams'
import Assistants from './Assistants';
  
function Index() {
const {pathname}=useLocation();
  return (
    <React.Fragment>
      <div className="mt-4">
        <Container fluid>
          <Navbar1/>
          {pathname == '/assistants'&&<Assistants/>}
          {pathname == '/assistants/teams'&&<Teams/>}
            </Container>

      </div>
    </React.Fragment>
  )
}

export default Index
