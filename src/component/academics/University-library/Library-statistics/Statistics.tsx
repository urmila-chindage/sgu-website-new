import React from 'react';
import Table from "react-bootstrap/Table";

const Statistics = () => {
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
          Books Statistics 2023-2024
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
      
      <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>School Name</p></th>
                  <th><p>Total Titles</p></th>
                  <th><p>Total Volume	</p></th>
                  <th><p>Total Cost</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>SCHOOL OF TECHNOLOGY</p></td>
                  <td><p>5640	</p></td>
                  <td><p>19682</p></td>
                  <td><p>9368701.00</p></td>
              </tr>
              <tr>
                  <td><p>SCHOOL OF COMMERCE & MANAGEMENT</p></td>
                  <td><p>1249</p></td>
                  <td><p>5217</p></td>
                  <td><p>2438149.90</p></td>
              </tr>
              <tr>
                  <td><p>SCHOOL OF COMPUTER SCIENCE AND ENGINEERING</p></td>
                  <td><p>1575</p></td>
                  <td><p>5364</p></td>
                  <td><p>2818327.55</p></td>
              </tr>
              <tr>
                  <td><p>SCHOOL OF SCIENCE</p></td>
                  <td><p>282</p></td>
                  <td><p>787</p></td>
                  <td><p>445480</p></td>
              </tr>
              <tr>
                  <td><p>SCHOOL OF LIBERAL ARTS</p></td>
                  <td><p>681</p></td>
                  <td><p>1280</p></td>
                  <td><p>417638.00</p></td>
              </tr>
              <tr>
                  <td><p>SCHOOL OF DESIGN AND ARCHITECTURE</p></td>
                  <td><p>384</p></td>
                  <td><p>713</p></td>
                  <td><p>1457631.88</p></td>
              </tr>
              <tr>
                  <td><p>SCHOOL OF PHARMACEUTICAL SCIENCES</p></td>
                  <td><p>787</p></td>
                  <td><p>3929</p></td>
                  <td><p>3270306.28</p></td>
              </tr>
              <tr>
                  <td><p>SCHOOL OF ALLIED HEALTH SCIENCE</p></td>
                  <td><p>11</p></td>
                  <td><p>37</p></td>
                  <td><p>17521.00</p></td>
              </tr>
              <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>10609</strong></p></td>
                  <td><p><strong>37009</strong></p></td>
                  <td><p><strong>20233755.61</strong></p></td>
              </tr>
          </tbody>
      </Table>

     
        </div>
      </div>
    </div>
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
         Journal Statistics 2023-2024
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>School Name</p></th>
                  <th><p>National Journal	</p></th>
                  <th><p>International Journal</p></th>
                 
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>SCHOOL OF TECHNOLOGY</p></td>
                  <td><p>31</p></td>
                  <td><p>9</p></td>
                 
              </tr>
              <tr>
                  <td><p>SCHOOL OF COMMERCE & MANAGEMENT</p></td>
                  <td><p>6</p></td>
                  <td><p>6</p></td>
                 
              </tr>
              <tr>
                  <td><p>SCHOOL OF COMPUTER SCIENCE AND ENGINEERING</p></td>
                  <td><p>8</p></td>
                  <td><p>4</p></td>
                 
              </tr>
              <tr>
                  <td><p>SCHOOL OF SCIENCE</p></td>
                  <td><p>6</p></td>
                  <td><p>0</p></td>
                 
              </tr>
              <tr>
                  <td><p>SCHOOL OF LIBERAL ARTS</p></td>
                  <td><p>5</p></td>
                  <td><p>1</p></td>
                 
              </tr>
              <tr>
                  <td><p>SCHOOL OF DESIGN AND ARCHITECTURE</p></td>
                  <td><p>5</p></td>
                  <td><p>2</p></td>
                 
              </tr>
              <tr>
                  <td><p>SCHOOL OF PHARMACEUTICAL SCIENCES</p></td>
                  <td><p>10</p></td>
                  <td><p>5</p></td>
                 
              </tr>
              <tr>
                  <td><p>MAGAZINE</p></td>
                  <td><p>9</p></td>
                  <td><p>0</p></td>
                 
              </tr>
              <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>80</strong></p></td>
                  <td><p><strong>27</strong></p></td>
                  
              </tr>
          </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
         Books Statistics 2020-2021
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>School Name</p></th>
                  <th><p>Total Titles</p></th>
                  <th><p>Total Volume</p></th>
                  <th><p>Total Cost</p></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>School of Technology</p></td>
                  <td><p>4418 + 1767</p></td>
                  <td><p>17490+5116</p></td>
                  <td><p>7445392+2678343</p></td>
              </tr>
              <tr>
                  <td><p>School of Liberal Arts</p></td>
                  <td><p>90</p></td>
                  <td><p>188</p></td>
                  <td><p>118925</p></td>
              </tr>

              <tr>
                  <td><p>School of Commerce & Management</p></td>
                  <td><p>1575</p></td>
                  <td><p>5364</p></td>
                  <td><p>2818327.55</p></td>
              </tr>

              <tr>
                  <td><p>School of Science</p></td>
                  <td><p>282</p></td>
                  <td><p>787</p></td>
                  <td><p>445480</p></td>
              </tr>
              <tr>
                  <td><p>School of Architecture</p></td>
                  <td><p>331</p></td>
                  <td><p>654</p></td>
                  <td><p>1197787</p></td>
              </tr>

              <tr>
                  <td><p>School of Pharmacy</p></td>
                  <td><p>526</p></td>
                  <td><p>2623</p></td>
                  <td><p>2206840</p></td>
              </tr>
              <tr>
                  <td><p>Ph. D.</p></td>
                  <td><p>17</p></td>
                  <td><p>55</p></td>
                  <td><p>48038</p></td>
              </tr>
              <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>8949</strong></p></td>
                  <td><p><strong>32450</strong></p></td>
                  <td><p><strong>16988589</strong></p></td>
              </tr>
              
              
          </tbody>
      </Table>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
         Journal Statistics 2020-2021
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <Table striped bordered responsive className="governing-table">
          <thead>
              <tr>
                  <th><p>School Name</p></th>
                  <th><p>National Journal	</p></th>
                  <th><p>International Journal</p></th>
                 
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>School of Technology</p></td>
                  <td><p>64</p></td>
                  <td><p>24</p></td>
                  
              </tr>
              <tr>
                  <td><p>School of Liberal Arts</p></td>
                  <td><p>5</p></td>
                  <td><p>0</p></td>
                 
              </tr>
              <tr>
                  <td><p>School of Commerce & Management</p></td>
                  <td><p>6</p></td>
                  <td><p>6</p></td>
                 
              </tr>
              <tr>
                  <td><p>School of Science</p></td>
                  <td><p>5</p></td>
                  <td><p>0</p></td>
                 
              </tr>
              <tr>
                  <td><p>School of Architecture</p></td>
                  <td><p>6</p></td>
                  <td><p>0</p></td>
                 
              </tr>
              <tr>
                  <td><p>School of Pharmacy</p></td>
                  <td><p>10</p></td>
                  <td><p>5</p></td>
                 
              </tr>
              <tr>
                  <td><p>Magazines</p></td>
                  <td><p>10</p></td>
                  <td><p>0</p></td>
                 
              </tr>
              <tr>
                  <td><p><strong>Total</strong></p></td>
                  <td><p><strong>106</strong></p></td>
                  <td><p><strong>35</strong></p></td>
                 
              </tr>
              
          </tbody>
      </Table>
        </div>
      </div>
    </div>

   
</div>
  )
}

export default Statistics