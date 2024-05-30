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
                  <td><p>SY_Civil_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/civil/btech-syllabus/SY_Civil_Fill.pdf">SY_Civil_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>TY_Civil_Structure and Syllabus</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/aeronautical/btech-syllabus/TY_Civil_Full.pdf">sTY_Civil_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Minor_Civil</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/aeronautical/btech-syllabus/Minor_Civil_Full.pdf">Minor_Civil_Structure and Syllabus <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             
          </tbody>
      </Table>

    </div>
  )
}

export default BtechSyllabus