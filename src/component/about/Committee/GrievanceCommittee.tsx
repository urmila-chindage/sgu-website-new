"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function GrievanceCommittee() {
  return (
    <div className="pt-50 pb-50 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <h3 className="governing-body-title">Grievance Readressal Committee</h3>
              <span>(As per Statute No 4.7)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST/CATEGORY</p></th>
                  <th><p>DESIGNATION</p></th>
                  <th><p>STATUTE NO</p></th>
                </tr>
              </thead>
              <tbody>
              <tr>
                 <td>
                    <p>Prof. Dr. Udhav Bhosle</p> 
                     <a href="mailto:vc@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vc@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Vice-Chancellor,</p>
                      <p>Sanjay Ghodawat University, Kolhapur.</p>
                  </td>
                  <td><p>Chairman</p></td>
                  <td><p>4.7-2(i)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Prof. Dr. Yogeshwari L. Giri.</p> 
                     <a href="mailto:yogeshwari.giri@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">yogeshwari.giri@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Commerce & Management</p>
                  </td>
                  <td><p>Member <br/> (Faculty Dean, Nominated by Board of Management)</p></td>
                  <td><p>30(2)(ii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Prof. Dr. Vivek V. Kulkarni</p> 
                     <a href="mailto:vivek.kulkarni@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vivek.kulkarni@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director Innovation & Incubation Center</p></td>
                  <td><p>Member <br/> (From Board of management)</p></td>
                  <td><p>30(2)(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Sanjaykumar M. Ingale</p> 
                     <a href="mailto:sanjaykumar.ingale@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">sanjaykumar.ingale@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td>
                      <p>Associate Professor,</p>
                      <p>Sanjay Ghodawat University, Kolhapur</p>
                  </td>
                  <td><p>Member <br/> (From Board of management)</p></td>
                  <td><p>30(2)(iii)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Chetan S. Patil.</p> 
                     <a href="mailto:chetan.patil@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">chetan.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td>
                      <p>Associate Professor & Dean Student Welfare</p>
                      <p>Sanjay Ghodawat University, Kolhapur</p>
                  </td>
                  <td><p>Member <br/> (University Teacher Nominated by Vice Chancellor)</p></td>
                  <td><p>4.7-2(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Vidhyarani S. Khot</p> 
                     <a href="mailto:vidyarani@sanjayghodawatuniveristy.ac.in" className="tl-def-btn-2">vidyarani@sanjayghodawatuniveristy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Assistant Prof School of <br/> Pharmaceutical Science</p></td>
                  <td><p>Member <br/> (University female Teacher Nominated by Vice Chancellor)</p></td>
                  <td><p>30(2)(iv)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Mahesh K. Patwardhan</p> 
                     <a href="mailto:mahesh.patwardhan@sanjayghodawatuniveristy.ac.in" className="tl-def-btn-2">mahesh.patwardhan@sanjayghodawatuniveristy.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Asst. Registrar</p><p>Sanjay Ghodawat University, Kolhapur</p></td>
                  <td><p>Member <br/> ( Non Teaching Staff Nominee by Vice Chancellor)</p></td>
                  <td><p>4.7-2(v)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Pallavi Bhange</p> 
                     <a href="mailto:pallavi.bhange@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">pallavi.bhange@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Director</p><p>School of Physical and Chemical sciences</p></td>
                  <td><p>Member <br/> (from Academic Council)</p></td>
                  <td><p>4.7-2 (vi)</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Vivek M. Kayande</p> 
                     <a href="mailto:registrar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">registrar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Registrar,</p><p>Sanjay Ghodawat University, Kolhapur</p></td>
                  <td><p>Member Secretary</p></td>
                  <td><p>4.7-2 (iii)</p></td>
              </tr>
            </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrievanceCommittee;
