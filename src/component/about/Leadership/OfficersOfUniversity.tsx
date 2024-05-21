import { courseList } from "@/data/Data";
import Link from "next/link";
import React from "react";

const OfficersOfUniversity = () => {
  return (
    <div className="tl-blog-details pt-50 pb-50">
    <div className="container">
    <div className="tl-course-details-top-courses tl-event-details-area mt-0">
      <h3 className="tl-event-details-area-title">
      Officers of the University
      </h3>
     
      <div className="row g-4">
       
         <div className="col-md-4">
          <div className="tl-1-course">
            <div className="tl-1-course-img">
              <img src="/assets/images/tl-2/registrar.png" alt="Registrar Image"/>
             </div>

            <div className="tl-1-course-txt">
              <span className="tl-1-course-author">
              Dr. Vivek M. Kayande
              </span>
              <h4 className="tl-1-course-title">
              Registrar
              </h4>
              <h4 className="tl-1-course-title">
              Sanjay Ghodawat University, Kolhapur
              </h4>
              <h4 className="tl-1-course-title">
              <Link href="/assets/images/tl-2/profile-registrar.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn"> Profile </Link>
              </h4>
            </div>
          </div>
        </div>  

        <div className="col-md-4">
          <div className="tl-1-course">
            <div className="tl-1-course-img">
              <img src="/assets/images/tl-2/ceo.jpg" alt="CEO Image"/>
             </div>

            <div className="tl-1-course-txt">
              <span className="tl-1-course-author">
              Dr. N.K Patil
              </span>
              <h4 className="tl-1-course-title">
              Controller of Examination
              </h4>
              <h4 className="tl-1-course-title">
              Sanjay Ghodawat University, Kolhapur
              </h4>
              <h4 className="tl-1-course-title">
              <Link href="/assets/images/tl-2/ceo-profile.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn"> Profile </Link>
              </h4>
            </div>
          </div>
        </div>   

        <div className="col-md-4">
          <div className="tl-1-course">
            <div className="tl-1-course-img">
              <img src="/assets/images/tl-2/cfo11.jpg" alt="CFO Image"/>
             </div>

            <div className="tl-1-course-txt">
              <span className="tl-1-course-author">
              Mr. P. A. Desai
              </span>
              <h4 className="tl-1-course-title">
              Chief Finance & Account Officer
              </h4>
              <h4 className="tl-1-course-title">
              Sanjay Ghodawat University, Kolhapur
              </h4>
              <h4 className="tl-1-course-title">
              <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-def-btn"> Profile </Link>
              </h4>
            </div>
          </div>
        </div>    
       
        
      </div>
    </div>
    </div>
    </div>
  );
};

export default OfficersOfUniversity;
