import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import {
    Container,
    Navbar,
  } from "reactstrap";
import AssistantsHeader from '../Assistants1/Assistants/AssistantsHeader';
// import A from './Assistants';
import Teams from '../Assistants1/Assistants/Teams';
import Assistants from '../Assistants1/Assistants/Assistants';
  
function Index() {
const {pathname}=useLocation();
  return (
    <React.Fragment>
      <div className="mt-4">
        <Container fluid>
          <AssistantsHeader/>
          {pathname == '/assistants'&&<Assistants/>}
          {pathname == '/assistants/teams'&&<Teams/>}
            </Container>

      </div>
    </React.Fragment>
  )
}

export default Index
