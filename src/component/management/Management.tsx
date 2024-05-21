import { teacherList } from "@/data/Data";
import Link from "next/link";
import React from "react";

const Management = () => {
  return (
    <section className="tl-2-teachers pt-120 pb-120">
      <div className="container">
        <div className="tl-2-section-heading">
          <h2 className="tl-2-section-title">Management</h2>
        </div>

        <div className="row justify-content-center tl-2-teachers-row">
           
        <div className="col-lg-3 col-sm-6 col-6 col-xxs-12">
            <div className="tl-2-teacher">
              <img src="assets/images/tl-2/team1.jpg" alt="Management Image" />
              <div className="tl-2-teacher-txt">
                <ul className="tl-2-teacher-socials">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <div className="tl-2-teacher-info">
                  <a href="/president"><h5 className="tl-2-teacher-title">
                  Mr. Sanjay Ghodawat
                  </h5></a>
                  <h6 className="tl-2-teacher-sub-title">President</h6>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-3 col-sm-6 col-6 col-xxs-12">
            <div className="tl-2-teacher">
              <img src="assets/images/tl-2/team2.jpg" alt="Management Image" />
              <div className="tl-2-teacher-txt">
                <ul className="tl-2-teacher-socials">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <div className="tl-2-teacher-info">
                  <a href="/secretary"><h5 className="tl-2-teacher-title">
                  Mr. Shrenik Ghodawat
                  </h5></a>
                  <h6 className="tl-2-teacher-sub-title">Secretary</h6>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-3 col-sm-6 col-6 col-xxs-12">
            <div className="tl-2-teacher">
              <img src="assets/images/tl-2/team3.jpg" alt="Management Image" />
              <div className="tl-2-teacher-txt">
                <ul className="tl-2-teacher-socials">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <div className="tl-2-teacher-info">
                  <a href="/trustee"><h5 className="tl-2-teacher-title">
                  Mr. Vinayak V Bhosale
                  </h5></a>
                  <h6 className="tl-2-teacher-sub-title">Trustee</h6>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-3 col-sm-6 col-6 col-xxs-12">
            <div className="tl-2-teacher">
              <img src="assets/images/tl-2/team4.jpg" alt="Management Image" />
              <div className="tl-2-teacher-txt">
                <ul className="tl-2-teacher-socials">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <div className="tl-2-teacher-info">
                 <a href="/vice-chancellor"> <h5 className="tl-2-teacher-title">
                  Dr. Udhav Bhosle
                  </h5></a>
                  <h6 className="tl-2-teacher-sub-title">Vice Chancellor</h6>
                
                </div>
              </div>
            </div>
          
          </div> 
      
          
        </div>
      </div>
    </section>
  );
};

export default Management
