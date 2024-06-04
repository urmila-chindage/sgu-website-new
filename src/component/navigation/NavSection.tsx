import React from 'react'
import NavLink from './NavLink';
interface NavProps {
    ulPosition: string;
    liStyle: string;
}
const NavSection:React.FC<NavProps> = ({ulPosition,liStyle}) => {
  return (
    <ul className={ulPosition} style={{display:'flex', justifyContent:'center'}}>
        <li className={`tl-nav-item ${liStyle}`}> 
        {/* <NavLink href="/">Home</NavLink> */}
        <a href="/" role="button">
            Home
            </a>
        </li>
        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            About Us <i className="fa-regular fa-angle-down"></i>
            </a>
          <ul className="tl-submenu">
            <li>
                <NavLink href="/about-group">About Sanjay Ghodawat Group</NavLink>
            </li>
            <li>
                <NavLink href="/about-logo">About Logo</NavLink>
            </li>
            <li>
                <NavLink href="/about-university">About University</NavLink>
            </li>
           
          <li className="tl-dropdown-2">
                <a>
                LeaderShip <i className="fa-regular fa-angle-right"></i>
                </a>

               <ul className="tl-submenu tl-submenu-2">
               <li>
                    <NavLink href="/about-trust">About Trust</NavLink>
                </li>
                <li>
                    <NavLink href="/board-of-directors">Trust Board of Directors</NavLink>
                </li>
                <li>
                    <NavLink href="/president">President</NavLink>
                </li>
                <li>
                    <NavLink href="/secretary">Secretary</NavLink>
                </li>
                <li>
                    <NavLink href="/trustee">Trustee</NavLink>
                </li>
                <li>
                    <NavLink href="/vice-chancellor">Vice Chancellor</NavLink>
                </li>
                <li>
                    <NavLink href="/officers-of-university">Officers of University</NavLink>
                </li>
              </ul>
            </li>

            <li className="tl-dropdown-2">
                <a>
                Statutory Boards <i className="fa-regular fa-angle-right"></i>
                </a>

               <ul className="tl-submenu tl-submenu-2">
               <li>
                    <NavLink href="/governing-body">Governing Body</NavLink>
                </li>

                <li>
                    <NavLink href="/board-of-management">Board of Management</NavLink>
                </li>

                <li>
                    <NavLink href="/board-of-national">Board of National & International Linkages</NavLink>
                </li>
                <li>
                    <NavLink href="/board-of-university">Board of University Teaching and Research</NavLink>
                </li>

                <li>
                    <NavLink href="/board-of-research">Board of Research</NavLink>
                </li>
                <li>
                    <NavLink href="/academic-council">Academic Council</NavLink>
                </li>
                <li>
                    <NavLink href="/board-of-examination">Board of Examination</NavLink>
                </li>
                <li>
                    <NavLink href="/board-of-student">Board of Student Development</NavLink>
                </li>
                <li>
                    <NavLink href="/planning-and-monitoring">Planning & Monitoring Board</NavLink>
                </li>
                <li>
                    <NavLink href="/sports-physical-culture">University Board of Sports and Physical Culture</NavLink>
                </li>
               
              </ul>
            </li>

            <li className="tl-dropdown-2">
                <a>
                Committee <i className="fa-regular fa-angle-right"></i>
                </a>

               <ul className="tl-submenu tl-submenu-2">
               <li>
                    <NavLink href="/internal-complaint">Internal Complaint</NavLink>
                </li>
                <li>
                    <NavLink href="/grievance-cell">Grievance Readressal Cell</NavLink>
                </li>
                 <li>
                    <NavLink href="/central-purchase">Central Purchase</NavLink>
                </li>
                <li>
                    <NavLink href="/womens-committee">Womens Empowerment Centre Committee</NavLink>
                </li>
                <li>
                    <NavLink href="/anti-ragging">Anti Ragging Committee</NavLink>
                </li>  
             </ul>
            </li>

            <li className="tl-dropdown-2">
                <a>
                Infrastructure <i className="fa-regular fa-angle-right"></i>
                </a>

               <ul className="tl-submenu tl-submenu-2">
               <li>
                    <NavLink href="/about-campus">About Campus</NavLink>
                </li>
                <li>
                    <NavLink href="/campus-images">Campus Images</NavLink>
                </li>
                 <li>
                    <NavLink href="/facilities">Facilities</NavLink>
                </li>
                
             </ul>
            </li>

            <li>
                <NavLink href="/university-object">University Aspects & Objects</NavLink>
            </li>

            <li>
                <NavLink href="/affiliations">Affiliations & Certifications</NavLink>
            </li>
            <li>
                <NavLink href="/awards">Awards and Accolades</NavLink>
            </li>
            <li>
                <NavLink href="/vision-mision">Vision and Mission</NavLink>
            </li>
            <li>
                <NavLink href="/quality-policy">Quality Policy and Objective</NavLink>
            </li>
            <li>
                <NavLink href="/core-values">Core Values</NavLink>
            </li>
            <li>
                <NavLink href="/social-responsibilities">Social Responsibilities</NavLink>
            </li>
            </ul> 
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">Admissions <i className="fa-regular fa-angle-down"></i></a>
             <ul className="tl-submenu">
                <li>
                    <NavLink href="/school-of-engineering">Programs Offered & Intake</NavLink>
                </li>
                <li className="tl-dropdown-2">
                <a>
                Fee Structure <i className="fa-regular fa-angle-right"></i>
                </a>

               <ul className="tl-submenu tl-submenu-2">
               <li>
                    <NavLink href="/academic-year-24-25">Academic Year 2024-25</NavLink>
                </li>
                <li>
                    <NavLink href="/academic-year-23-24">Academic Year 2023-24</NavLink>
                </li>
            </ul>
            </li>

                <li>
                    <NavLink href="/phd-admissions">Ph.D Admission</NavLink>
                </li>
                <li>
                    <NavLink href="/scholarships">Scholarships</NavLink>
                </li>
                <li>
                    <NavLink href="/how-to-apply">How to Apply</NavLink>
                </li>
                <li>
                    <NavLink href="/facilities">Facilities Provided</NavLink>
                </li>
                <li>
                    <NavLink href="/online-admission-enquiry">Online Admission Enquiry</NavLink>
                </li>
                <li>
                    <NavLink href="/admission-fee-bank-details">Admission Fee Bank Details</NavLink>
                </li>
                <li>
                    <NavLink href="/eligibility-criteria">Eligibility Criteria & Selection Process</NavLink>
                </li>
                <li>
                    <NavLink href="/document-required">Documents Required</NavLink>
                </li>
                <li>
                    <NavLink href="/admission-policy">Admission Policy</NavLink>
                </li>
                <li>
                    <NavLink href="/reservation-policy">Reservation Policy</NavLink>
                </li>
                <li>
                    <NavLink href="/sgu-entrance">SGU Entrance Test</NavLink>
                </li>
                <li>
                    <NavLink href="/contact-admission">Contact Admission & Marketing Cell</NavLink>
                </li>
                <li>
                    <NavLink href="/assets/docs/admission-cutoff-23-24/admission-cutoff-23-24.pdf">Admission Cut Off 2023-2024</NavLink>
                </li>
                <li>
                    <NavLink href="faq">FAQ's</NavLink>
                </li>
            </ul> 
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">Academics <i className="fa-regular fa-angle-down"></i></a>
             <ul className="tl-submenu">
                <li>
                    <NavLink href="/prospectus">Prospectus</NavLink>
                </li>
                <li>
                    <NavLink href="/aeronautical-dept-syllabus">Curriculum Structure and Syllabus</NavLink>
                </li>
                <li>
                    <NavLink href="/academic-calendar">Academic Calendar</NavLink>
                </li>
                <li>
                    <NavLink href="/university-notes">University Notes</NavLink>
                </li>
                <li>
                    <NavLink href="/foreign-university">Foreign University Collaborations</NavLink>
                </li>
                <li>
                    <NavLink href="/industry-collaborations">Industry Collaborations</NavLink>
                </li>
                <li>
                    <NavLink href="/sgu-library">University Library</NavLink>
                </li>
            </ul>
        </li>

        {/* <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">Courses <i className="fa-regular fa-angle-down"></i></a>
             <ul className="tl-submenu">
                <li>
                    <NavLink href="/course-3">Courses</NavLink>
                </li>
              </ul>  
        </li>*/}

      

       {/*  <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">Blog <i className="fa-regular fa-angle-down"></i></a>
        </li>  */}

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a>Contact <i className="fa-regular fa-angle-down"></i></a>
                <ul className="tl-submenu">
                    <li>
                        <NavLink href="/contact-2">Contact Us</NavLink>
                    </li>
                </ul>   
    </li> 
    </ul>
  )
}

export default NavSection