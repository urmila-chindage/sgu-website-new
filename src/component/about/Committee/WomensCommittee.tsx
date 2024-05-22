"use client";
import CentralCommitteePage from "@/app/central-purchase/page";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function WomensCommittee() {
  return (
    <div className="pt-50 pb-50 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <h3 className="governing-body-title">Womens Empowerment Centre Committee</h3>
              <span>(As per Statute No 4.7)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>POST/CATEGORY</p></th>
                  <th><p>DESIGNATION</p></th>
                 
                </tr>
              </thead>
              <tbody>
              <tr>
                 <td>
                    <p>Mrs. Deepika V. Patil</p> 
                    <a href="mailto:deepika.patil@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">deepika.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Prof. & Department Coordinator <br/> (School of Computer Science & Engineering.)</p></td>
                  <td><p>Chairperson</p></td>
              </tr>
              <tr>
                 <td>
                    <p>Prof. Dr. Yogeshwari L. Giri.</p> 
                    <a href="mailto:yogeshwari.giri@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">yogeshwari.giri@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Professor & Dean , <br/> Commerce & Management</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Ms. Prajakta P. Desai</p> 
                    <a href="mailto:prajakta.desai@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">prajakta.desai@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (Mechanical Engineering, School of Technology)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Jyoti M. Waykule</p> 
                    <a href="mailto:jyoti.waykule@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">jyoti.waykule@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (Electrical and Electronics Engg.School of Technology)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Adnya Manjrekar</p> 
                    <a href="mailto:adnya.manjarekar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">adnya.manjarekar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (Civil Engineering Department, School of Technology)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Surbhi I. Gaikwad</p> 
                    <a href="mailto:surabhi.gaikwad@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">surabhi.gaikwad@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (School of Computer Science & Engineering)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Sangita A. Kumbhar</p> 
                    <a href="mailto:sangita.kumbhar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">sangita.kumbhar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (School of Pharmacy)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Ms. Priya A. Patil</p> 
                    <a href="mailto:priya.patil@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">priya.patil@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Professor, <br/> (Faculty of Liberal Arts.)</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mrs. Amruta A. Handur</p> 
                    <a href="mailto:amruta.handur@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">amruta.handur@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Officer, <br/> Global Engagement Center</p></td>
                  <td><p>Member</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Sonali B. Suryawanshi</p> 
                    <a href="mailto:sonali.suryawanshi@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">sonali.suryawanshi@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>
                  <td><p>Asst. Prof, <br/> (Dept. of Physics, Faculty of Science)</p></td>
                  <td><p>Member Secretary</p></td>
              </tr>
          </tbody>
          </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomensCommittee;
