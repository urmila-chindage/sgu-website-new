import React from 'react';
import Table from "react-bootstrap/Table";

const ComputerScience = () => {
  return (
    <div>
        <Table responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>Computer Science and Engineering</p></th>
                  <th><p>Curriculum Structure and Syllabus</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>First year B.Tech CSE</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/computer-science/First year B.Tech CSE.pdf">	First year B.Tech CSE <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Second Year B.Tech CSE</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/computer-science/Second Year B.Tech CSE.pdf">Second Year B.Tech CSE <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Third Year B. Tech. CSE</p></td>
                  <td><a rel="noopener noreferrer" className="syllabus-link" target="_blank" href="/assets/docs/curriculum-and-syllabus/computer-science/Third Year B. Tech. CSE.pdf">Third Year B. Tech. CSE <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
             <tr>
                  <td><p>Final Year B. Tech CSE</p></td>
                  <td><a rel="noopener noreferrer" target="_blank" href="/assets/docs/curriculum-and-syllabus/computer-science/Final Year B. Tech CSE.pdf">Final Year B. Tech CSE <i className="fa-regular fa-arrow-right-long"></i></a></td>
             </tr>
              
          </tbody>
      </Table>

    </div>
  )
}

export default ComputerScience