"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function BoardOfStudent() {
  return (
    <div className="pt-50 pb-50 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <h3 className="governing-body-title dark-mode-white-color">Board of Student Development</h3>
              <span className="dark-mode-white-color">(As per statute 3.20)</span>
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>NAME OF THE MEMBER</p></th>
                  <th><p>DESIGNATION</p></th>
                </tr>
              </thead>
              <tbody>

              <tr>
                 <td>
                    <p>Vice-Chancellor,</p> 
                    <p>Sanjay Ghodawat University, Kolhapur.</p>
                </td>

                <td><p>Chairman</p></td>
            </tr>

            <tr>
                <td><p>Performing Arts Dr. Rajesh Khatavkar</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Fine Arts Mr. Dalvi Ajay</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Dr. A. D. Katdare</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Student Representative Shivtej Khot</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Student Representative - Ms. Surabhi Gaikwad</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Student Representative Mr. Abhijeet Patil</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Student Representative (Girls) Mr. Mousam Sing</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Director, NSS - Mr. B. B. Pujari</p></td>
                <td><p>Member</p></td>
            </tr>

            <tr>
                <td><p>Director, Student Development</p></td>
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

export default BoardOfStudent;
