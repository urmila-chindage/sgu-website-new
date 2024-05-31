import React from 'react';
import Table from "react-bootstrap/Table";

const MtechSyllabus = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>M.Tech</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>First Year</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/aeronautical/mtech-syllabus/FIRST YEAR M.Tech  SYLLABUS 2024-2025.pdf">SY_Aero_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Second Year</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/aeronautical/mtech-syllabus/SECOND YEAR M.Tech  SYLLABUS 2024-2025.pdf">TY_Aero_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
            
          </tbody>
      </Table>

    </div>
  )
}

export default MtechSyllabus