import React from 'react';
import Table from "react-bootstrap/Table";

const BPharmacy = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>B. Pharmacy</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>FY B_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/bpharmacy/01. FY Syllabus_ B_Pharm 23-24.pdf">	FY B_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>SY B_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/bphamacy/02. SY Syllabus_ B_Pharm 23-24.pdf">SY B_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>TY B_Pharms</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/bpharmacy/03. TY Syllabus_ B_Pharm 23-24.pdf">TY B_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Final Year B_Pharm</p></td>
                  <td><a rel="noopener noreferrer" target="_blank" href="/assets/docs/curriculum-and-syllabus/bpharmacy/04. Final Year Syllabus_ B_Pharm 23-24.pdf">Final Year B_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
              
          </tbody>
      </Table>

    </div>
  )
}

export default BPharmacy