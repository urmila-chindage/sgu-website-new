import React from "react";
import Link from "next/link";
import Table from "react-bootstrap/Table";

const IntakeData = () => {
  return (
    
           <div className="accordion mt-20" id="accordionExample">
              <div className="tl-event-details-area tl-course-details-curriculum">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                   
                    aria-controls="collapseOne"
                  >
                    Intake 2024-25
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  <h3 className="accordion-table-title dark-mode-white-color">Academic Year 2024-25</h3>
                <Table striped bordered responsive className="governing-table">
                    <thead>
                        <tr>
                            <th><p>Course Name</p></th>
                            <th><p>Intake</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>LAW (LLB)</p></td>
                            <td><p>60</p></td>
                        </tr>
                        <tr>
                            <td><p>LAW (B.A.LLB) Hons.</p></td>
                            <td><p>60</p></td>
                        </tr>
                        <tr>
                            <td><p>LAW (BBA LLB) Hons.</p></td>
                            <td><p>60</p></td>
                        </tr>
                       
                    </tbody>
                </Table>

               
                  </div>
                </div>
              </div>
          


              
          
            </div>
          
   
  );
};

export default IntakeData;
