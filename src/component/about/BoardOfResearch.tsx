"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfResearch() {
  return (
    <div className="pt-50 pb-50 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <h3 className="governing-body-title">Board of Research</h3>
              <span>()</span>
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
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Prof. Dr. V .V. Kulkarni</p> 
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:vivek.kulkarni@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vivek.kulkarni@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Science & Technology Director (Add. Charge)-School of Design,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A. D. Sawant</p> 
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:anand.sawant@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">anand.sawant@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Associate Dean,</p>
                      <p>Physical & Chemical Science,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Y. L. Giri</p> 
                    <p>SGU Campus, Atigre</p>
                    <a href="mailto:dean.scm@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">dean.scm@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Management & Chairman, BOS & Director -Commerce & Management,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. S. M. Ingale</p> 
                   
                    <a href="mailto:sanjaykumar.ingale@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">sanjaykumar.ingale@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>I/C Dean,</p>
                      <p>Faculty of Interdisciplinary,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. A. D. Sawant</p> 
                   
                    <a href="mailto:anand.sawant@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">anand.sawant@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>Associate Dean,</p>
                      <p>Physical & Chemical Science,</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. U. P. Jadhav</p> 
                    <p>C-Block, SGU Campus, Atigre.</p>
                    <a href="mailto:uttam.jadhav@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">uttam.jadhav@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td><p>I/C Dean,</p>
                      <p>Faculty of Humanities & Social Science & BOS Chairma of Faculty of Liberal Arts. Director-Knowledge Resource Center Director-School of Social Sciences</p>
                     
                  </td>
                  <td><p>Member</p></td>
                  <td><p></p></td>
              </tr>

              <tr>
                <td colSpan={4}><p className="text-center">Four Eminent Scholars</p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Mr. Sangram Patil</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Prof. Dr. C. D. Lokhande</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Dr. P. P. Wadgaonkar</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Dr. Sandeep Shiyekar</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Dr. Srinivasan Iyengar (Management)</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p className="text-center">Dr. Shirish Ambavdekar (Pharmacy)</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p>(Law)</p></td>
                <td></td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p></p></td>
                <td>(Social Sciences)</td>
                <td><p>Member</p></td>
                <td><p></p></td>
              </tr>

              <tr>
                 <td><p></p></td>
                <td>Director (Innovation, Incubation and Research)</td>
                <td><p>Member Secretary</p></td>
                <td><p></p></td>
              </tr>
             
             

	          </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfResearch;
