'use client';
import React from "react";
import Table from "react-bootstrap/Table";

const ForeignUniversity = () => {
   return(
    <div className="tl-event-details-container pt-50 pb-50 tl-10-about-section" >
        <div className="container">
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                    <h2 className="universityobject-heading dark-mode-white-color">Our Global Connections - Foreign University Collaborations</h2>
                    <div className="tl-event-details-left">
                        <div className="tl-event-details-key-content tl-event-details-area">
                        <Table responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p><strong className="table-head-color">Name of University</strong></p></th>
                                    <th><p><strong className="table-head-color">Country</strong></p></th>
                                    <th><p><strong className="table-head-color">Details of Collaboration</strong></p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p><strong className="table-tr-color">San Jose State University, California</strong></p></td>
                                    <td><p>USA</p></td>
                                    <td><p>Articulation Of Program <br/> M.S/M.Tech Aerospace Engineering. <br/> 1+1 <br/> M.Tech(SGU)+M.S(SJSU) <br/> 3+1+1 <br/> B.Tech(SGU)+M.S (SJSU)</p></td>
                                </tr>

                                <tr>
                                    <td><p><strong className="table-tr-color">Teesside University</strong></p></td>
                                   
                                    <td><p>U.K</p></td>
                                    <td><p>Articulation of B. Design <br/> Programs 3+1 (U.G) in Product Design/Space Design/Interior Design/Graphic Design <br/> M.S Disaster Management <br/> *Possible start up July 2024</p></td>
                                </tr>

                                <tr>
                                <td><p><strong className="table-tr-color">Victorian Institute of Technology, Melbourne</strong></p></td>
                                  
                                    <td><p>Australia</p></td>
                                    <td><p>Study Abroad Program</p></td>
                                </tr>

                                <tr>
                                <td><p><strong className="table-tr-color">University of the Highlands and Islands, Scotland</strong></p></td>
                                    
                                    <td><p>United Kingdom (U.K.)</p></td>
                                    <td><p>Develop Academic and Educational Collaboration</p></td>
                                </tr>

                                <tr>
                                <td><p><strong className="table-tr-color">Chonnam National University</strong></p></td>
                                    
                                    <td><p>South Korea</p></td>
                                    <td><p>Establish Framework for Education and Research</p></td>
                                </tr>

                                <tr>
                                <td><p><strong className="table-tr-color">Yeungnam University, Gyeongbuk</strong></p></td>
                                 
                                    <td><p>Republic of Korea</p></td>
                                    <td><p>Establish Framework for Education and Research</p></td>
                                </tr>

                                <tr>
                                <td><p><strong className="table-tr-color">Teesside University</strong></p></td>
                                   
                                    <td><p>UK</p></td>
                                    <td><p>Student & Faculty Exchange</p></td>
                                </tr>

                                <tr>
                                <td><p><strong className="table-tr-color">University of South Carolina Aiken</strong></p></td>
                                  
                                    <td><p>USA</p></td>
                                    <td><p>Student & Faculty Exchange</p></td>
                                </tr>

                                <tr>
                                <td><p><strong className="table-tr-color">Northumbria University</strong></p></td>
                                   
                                    <td><p>UK</p></td>
                                    <td><p>Student & Faculty Exchange</p></td>
                                </tr>
            
                            </tbody>
                        </Table>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default ForeignUniversity