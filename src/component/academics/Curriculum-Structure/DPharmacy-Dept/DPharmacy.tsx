import React from 'react';
import Table from "react-bootstrap/Table";

const DPharmacy = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>D. Pharmacy</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>FY _D_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/dpharmacy/01. Updated FY _D_Pharm Curriculum ER2020 (1).pdf">FY _D_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>SY _ D_Pharm</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/dpharmacy/02. Updated SY _ D_Pharm Curriculum ER2020.pdf">SY _ D_Pharm <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
            
              
          </tbody>
      </Table>

    </div>
  )
}

export default DPharmacy