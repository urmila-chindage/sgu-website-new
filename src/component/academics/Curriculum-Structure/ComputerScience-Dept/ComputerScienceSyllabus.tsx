'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import MenuList from '@/component/academics/Curriculum-Structure/Reusable-components/MenuList'
import NavLinks from '@/component/academics/Curriculum-Structure/Reusable-components/Navlinks';
import ComputerScience from './ComputerScience';


const ComputerScienceSyllabus = () => {
  return (
    <div className="schools-section pt-50 pb-50">
    <div className="container">
    <div className="row">
    <h2 className="universityobject-heading">Curriculum Structure and Syllabus</h2>
    <MenuList dept="Schools" subMenu={NavLinks}/>
    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#menu-navbar" data-offset="0">
   

    <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">Computer Science and Engineering</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
          <ComputerScience/>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
    </div>
    </div>
     
    </div>    
  </div>
  )
}

export default ComputerScienceSyllabus