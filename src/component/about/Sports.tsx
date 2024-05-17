"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function Sports() {
  return (
    <div className="pt-50 pb-50 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <h3 className="governing-body-title">University Board of Sports and Physical Culture</h3>
              <span>(As per statute 3.20)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST/CATEGORY</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>SECTION</p></th>
                </tr>
              </thead>
              <tbody>
              
              <tr>
                 <td>
                    <p>Prof. Dr. Udhav Bhosle</p> 
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:vc@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vc@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Vice-Chancellor,</p>
                      <p>Sanjay Ghodawat University, Kolhapur.</p>
                  </td>
                  <td><p>Chairman</p></td>
                  <td><p>3.20-2(i)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Suresh J. Farakte</p> 
                    <p>Kolhapur</p>
                    <a href="mailto:sureshfarakate@gmail.com" className="tl-def-btn-2">sureshfarakate@gmail.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Expert</p></td>
                  <td><p>Member Nominated by V.C</p></td>
                  <td><p>3.20-2(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Sushant T. Magdum</p> 
                    <p>A/P-Murgud, Tal- Kagal, Dist-Kolhapur</p>
                    <a href="mailto:sushantmagdum13@yahoo.in" className="tl-def-btn-2">sushantmagdum13@yahoo.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Expert</p></td>
                  <td><p>Member Nominated by V.C</p></td>
                  <td><p>3.20-2(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Mrs. Sarita P. Patil</p> 
                    <p>Department of Physics, <br/> Sanjay Ghodawat University, Kolhapur - 416 118</p>
                    <a href="mailto:patil.sr@sginstitute.in" className="tl-def-btn-2">patil.sr@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Member (BOM)</p></td>
                  <td><p>Member Nominated by B.O.M</p></td>
                  <td><p>3.20-2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Abid Salati</p> 
                    <p>“Ayesha” Flat no-9, Veera Appt.,Mahadik colony, Kolhapur <br/> Sanjay Ghodawat University, Kolhapur. 416 118</p>
                    <a href="mailto:salati.ay@sginstitute.in" className="tl-def-btn-2">salati.ay@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Member (BOM)</p></td>
                  <td><p>Member Nominated by B.O.M</p></td>
                  <td><p>3.20-2(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Shrishail. S. Salgare</p> 
                    <p>Department of Mathematics, <br/> Sanjay Ghodawat University, Kolhapur - 416 118</p>
                    <a href="mailto:salgare.ss@sginstitute.in" className="tl-def-btn-2">salgare.ss@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director of Students welfare</p></td>
                  <td><p>Member</p></td>
                  <td><p>3.20-2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. S. S. Patel</p> 
                    <p>Faculty of Management Bulding, <br/> SGU Campus, Atigre</p>
                    <a href="mailto:patel.ss@sginstitute.in" className="tl-def-btn-2">patel.ss@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director of Sports & Physical culture</p></td>
                  <td><p>Member Secretary</p></td>
                  <td><p>3.20-2(v)</p></td>
              </tr>

             
             </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
