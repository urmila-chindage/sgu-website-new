'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import MenuList from '../Reusable-components/MenuList';
import NavLinks from '../Reusable-components/Navlinks';
import OnlineResources from './OnlineResources';
import DigitalLibrary from './DigitalLibrary';


const EResources = () => {
  return (
    <div className="schools-section pt-50 pb-50">
    <div className="container">
    <div className="row">
    <h2 className="universityobject-heading dark-mode-white-color">SGU Library</h2>
    <MenuList dept="Schools" subMenu={NavLinks}/>
    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 col-lg-8" data-target="#menu-navbar" data-offset="0">
   

    <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">Online Resources</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="curriculum-tab">Digital Library (Digitized Collection)</Nav.Link>
        </Nav.Item>
       
      </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
          <OnlineResources/>
        </Tab.Pane>

        <Tab.Pane eventKey="curriculum-tab">
          <DigitalLibrary/>
        </Tab.Pane>
   </Tab.Content>
    </Tab.Container>
    </div>
    </div>
     
    </div>    
  </div>
  )
}

export default EResources