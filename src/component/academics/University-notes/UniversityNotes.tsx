"use client";
import Link from "next/link";
import React from "react";
import Table from "react-bootstrap/Table";

function UniversityNotes() {
  return (
    <div className="pt-50 pb-50 tl-10-about-section tl-10-about-img">
      <div className="container">
        <div className="row gx-0 tl-blog-details-row">
          <div className="col-lg-12">
            <div className="governing-body">
              <h3 className="governing-body-title">University Notes</h3>
             
            </div>

            <Table striped bordered hover responsive className="governing-table">
              <thead>
                <tr>
                  <th><p>Date</p></th>
                  <th><p>Particulrs</p></th>
                  <th><p>Type</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>04.10.2023</p></td>
                  <td><a href="/assets/docs/university-notice/04.10.2023.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Fees of the AY 2023-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>07.06.2023</p></td>
                  <td><a href="/assets/docs/university-notice/07.06.2023.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Fees of the AY 2023-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>07.06.2023</p></td>
                  <td><a href="/assets/docs/university-notice/07.06.2023-1.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Fees of the AY 2023-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>21.10.2023</p></td>
                  <td><a href="/assets/docs/university-notice/21.10.2023.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Fees of the AY 2023-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

                <tr>
                  <td><p>22.09.2023</p></td>
                  <td><a href="/assets/docs/university-notice/22.09.2023.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn-2">Fees of the AY 2023-2024 <i className="fa-regular fa-arrow-right"></i></a></td>
                  <td><p>NOTICE</p></td>
                </tr>

               
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversityNotes;
