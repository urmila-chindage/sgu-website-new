"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfManagement() {
  return (
    <div className="pt-50 pb-50 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <h3 className="governing-body-title dark-mode-white-color">Board of Management</h3>
              <span className="dark-mode-white-color">(As per section 22(1) of Maharashtra ACT No. XL OF 2017)</span>
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
                  <td><p>Chairperson</p></td>
                  <td><p>22(1) a</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Mr. Shrenik S. Ghodawat</p>
                    <p>28, Sushreya, Yashwant Co-Op Housing Society,</p>
                    <p>A/o: Jaysingpur - 416 101 Tal: Shirol, Dist: Kolhapur.</p>
                    <a href="mailto:shrenik@ghodawat.com" className="tl-def-btn-2">shrenik@ghodawat.com <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td>
                    <p>Secretary,</p>
                    <p>Sou. Sushila Danchand Ghodawat Charitable Trust.</p>
                    <p>Jaysingpur.</p>
                  </td>
                  <td><p>Member of GB Nominated by Sponsoring Body</p></td>
                  <td><p>22(1) b</p></td>
              </tr>

              <tr>
                 <td>
                      <p>Mr. Vinayak V. Bhosale</p>
                      <p>Plot No 630, Shahu Nagar, Sudarshan Chowk, Jaysingpur.</p>
                      <p>Tal: Shirol, Dist: Kolhapur - 416 101</p>
                      <a href="mailto:vinayak@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vinayak@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                      <a href="mailto:vinayak@sginstitute.in" className="tl-def-btn-2">vinayak@sginstitute.in <i className="fa-regular fa-arrow-right"></i></a>
                  </td>

                  <td>
                    <p>Trustee,</p>
                    <p>Sou. Sushila Danchand Ghodawat Charitable Trust,Jaysingpur.</p>
                  </td>

                  <td><p>Member of GB Nominated by Sponsoring Body</p></td>
                  <td><p>22(1) b</p></td>
              </tr>

              <tr>
                 <td>
                      <p>Prof. Dr. V .V. Kulkarni</p>
                      <p>SGU Campus, Atigre.</p>
                      <a href="mailto:vivek.kulkarni@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">vivek.kulkarni@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Science & Technology Director (Add. Charge)-School of Design,Jaysingpur.</p>
                      <p>Sanjay Ghodawat University</p>
                  </td>

                  <td><p>Dean Nominated by Vice-Chancellor</p></td>
                  <td><p>22(1) c</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Y. L. Giri </p>
                    <p>SGU Campus, Atigre.</p>
                      <a href="mailto:dean.scm@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">dean.scm@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                  </td>

                  <td><p>Dean,</p>
                      <p>Faculty of Management & Chairman, BOS & Director -Commerce & Management,<br/>Sanjay Ghodawat University</p>
                  </td>

                  <td><p>Dean Nominated by Hon. Vice-Chancellor</p></td>
                  <td><p>22(1) c</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. Ganpati D. Yadav Nathalal <br/>Parekh Marg, Matunga, Mumbai - 400019</p>
                    <a href="mailto:gd.yadav@ictmumbai.edu.in" className="tl-def-btn-2">gd.yadav@ictmumbai.edu.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                  </td>

                  <td><p>Vice-Chancellor,</p>
                      <p>Institute of Chemical Technology, Mumbai</p>
                  </td>

                  <td><p>Member who are not from GB, Nominated by Sponsoring Body</p></td>
                  <td><p>22(1) d</p></td>
              </tr>

              <tr>
                 <td>
                    <p>Dr. B.M. Hirdekar</p>
                </td>

                  <td><p>Ex- Registrar,<br/>
                  Former Director BOE, SUK Kolhapur Ex- Registrar,<br/>
                  SGU Educationist</p>
                  </td>
                  <td><p>Member who are not from GB, Nominated by Sponsoring Body</p></td>
                  <td><p>22(1) d</p></td>
              </tr>

              <tr>
                 <td>
                 <p>Dr. Revati Deshpande <br/>
                 C/o Sanjay Ghodawat University, B-Block A/P- Atigre, Tal-Hatkanangale, Dist - Kolhapur.</p>
                 <a href="mailto:revati.deshpande@@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">revati.deshpande@@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                  </td>

                  <td><p>Director,</p>
                  <p>Internal Quality Assurance Cell,<br/>
                  Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member who are not from GB, Nominated by Sponsoring Body</p></td>
                  <td><p>22(1) d</p></td>
              </tr>

              <tr>
                 <td>
                 <p>Mr. S. M. Ingale</p>
                
                 <a href="mailto:sanjaykumar.ingale@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">sanjaykumar.ingale@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                  </td>

                  <td><p>I/C Dean,</p>
                  <p>Faculty of Interdisciplinary,<br/>
                  Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Teacher, Nominated by Sponsoring Body</p></td>
                  <td><p>22(1) e</p></td>
              </tr>

              <tr>
                 <td>
                 <p>Dr. A. D. Sawant </p>
                
                 <a href="mailto:anand.sawant@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">anand.sawant@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                  </td>

                  <td><p>Associate Dean,</p>
                  <p>Physical & Chemical Science,<br/>
                  Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Teacher, Nominated by Sponsoring Body</p></td>
                  <td><p>22(1) e</p></td>
              </tr>

              <tr>
                 <td>
                 <p>Mr. Prakash A. Desai </p>
                
                 <a href="mailto:cfo@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">cfo@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                  </td>

                  <td><p>Chief Finance And Accounts Officer,<br/>
                  
                  Sanjay Ghodawat University</p>
                  </td>
                  <td><p>invitee</p></td>
                  <td></td>
              </tr>

              <tr>
                 <td>
                 <p>Dr. Vivek M. Kayande </p>
                
                 <a href="mailto:registrar@sanjayghodawatuniversity.ac.in" className="tl-def-btn-2">registrar@sanjayghodawatuniversity.ac.in <i className="fa-regular fa-arrow-right"></i></a> <br/>
                  </td>

                  <td><p>Registrar,<br/>
                  
                  Sanjay Ghodawat University</p>
                  </td>
                  <td><p>Member Secretary</p></td>
                  <td><p>16(3)</p></td>
              </tr>

	          </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardOfManagement;
