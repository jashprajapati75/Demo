import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import {
    Container,
    Navbar,
  } from "reactstrap";
import Navbar1 from './Navbar1';
import AssistantsHeader from './Assistants/AssistantsHeader';
  
function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <AssistantsHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Outlet context={{searchQuery}}/>
            </Container>
      </div>
    </React.Fragment>
  )
}

export default Index
