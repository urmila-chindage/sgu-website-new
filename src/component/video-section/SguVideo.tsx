'use client'
import React from "react";
import { Nav, Tab } from "react-bootstrap";

const SguVideo = () => {
    return (
      <section className="tl-7-categories tl-7-section-spacing">
        <div className="container">
          <div className="tl-7-section-heading tl-7-categories-heading">
            <h2 className="tl-7-section-title">
              <span className="last-word">SGU Videos</span>.
            </h2>
          </div>
  
          <div className="tl-7-categories-row">
            <Tab.Container defaultActiveKey="tl-7-cat-1-tab">
              <Nav variant="tabs" className="nav nav-tabs" id="myTab" role="tablist">
                <Nav.Item>
                  <Nav.Link eventKey="tl-7-cat-1-tab">
                    <span className="tl-7-cate-title">The Blueprint of Success Mr. Sanjay Ghodawat TEDxWCE Sangli</span>
                   
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tl-7-cat-2-tab">
                    <span className="tl-7-cate-title">Sanjay Ghodawat University Video</span>
                   
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tl-7-cat-3-tab">
                    <span className="tl-7-cate-title">SGU LIVE 5th Convocation Ceremony</span>
                   
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tl-7-cat-4-tab">
                    <span className="tl-7-cate-title">Chairman Sanjay Ghodawat Birthday Massage for Student</span>
                   
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="tab-content" id="myTabContent">
                <Tab.Pane eventKey="tl-7-cat-1-tab">
                <iframe width="600" height="500" src="https://www.youtube.com/embed/v4G_a-R0Q48" title="The Blueprint of Success  Mr. Sanjay Ghodawat   TEDxWCE Sangli"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="tl-7-cat-2-tab">
                  <img src="assets/images/tl-7/cate-2.jpg" alt="Dance image" />
                </Tab.Pane>
                <Tab.Pane eventKey="tl-7-cat-3-tab">
                  <img src="assets/images/tl-7/cate-3.jpg" alt="Dance Image" />
                </Tab.Pane>
                <Tab.Pane eventKey="tl-7-cat-4-tab">
                  <img src="assets/images/tl-7/cate-4.jpg" alt="Dance Image" />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>
    );
  };
  
  export default SguVideo;
  
