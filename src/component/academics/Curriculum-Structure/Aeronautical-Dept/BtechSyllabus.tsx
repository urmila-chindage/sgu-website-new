import React from 'react';
import Table from "react-bootstrap/Table";

const BtechSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>B. Tech</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>SY_Aero_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/aeronautical/btech-syllabus/SY_Aero_Full.pdf">SY_Aero_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>TY_Aero_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/aeronautical/btech-syllabus/TY_Aero_Full.pdf">TY_Aero_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Final Year_Aero_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/aeronautical/btech-syllabus/FINAL YEAR AERO SYLLABUS 2024-2025.pdf">Final Year_Aero_Structure_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Minor_Aero</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/aeronautical/btech-syllabus/SECOND YEAR MINOR SYLLABUS 2024-2025.pdf">Minor_Aero_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
              
          </tbody>
      </Table>

    </div>
  )
}

export default BtechSyllabus