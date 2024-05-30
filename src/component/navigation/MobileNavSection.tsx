import React, { useState } from "react";
import NavLink from "./NavLink";
interface DropdownState {
  home: boolean;
  leadership: boolean,
  statutoryboard : boolean,
  committee : boolean,
  infrastructure : boolean,
  admissions : boolean,
  feestructure : boolean,
  courses: boolean;
  page: boolean;
  blog: boolean;
  about: boolean;
  staff: boolean;
  event: boolean;
  contact: boolean;
  blogPages: boolean;
  auth: boolean;
}

const MobileNavSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownState>({
    home: false,
    leadership: false,
    statutoryboard:false,
    committee : false,
    infrastructure : false,
    admissions : false,
    feestructure : false,
    courses: false,
    blog: false,
    page: false,
    about: false,
    staff: false,
    event: false,
    contact: false,
    blogPages: false,
    auth: false,
  });

  // Define the function for handling dropdown toggle
  const handleDropdownToggle = (dropdownName: keyof DropdownState) => {
    setTimeout(() => {
      setIsDropdownOpen((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }, 100);
  };
  return (
    <nav className="mean-nav">
      <ul className="justify-content-center">
        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.home ? "dropdown-open" : ""}>
            About Us{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.home ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("home")}
            >
              {isDropdownOpen.home ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.home ? "d-block" : "d-none"
            }`}
          >
            <li>
              <NavLink href="/about-group">About Sanjay Ghodawat Group</NavLink>
            </li>
            <li>
              <NavLink href="/about-logo">About Logo</NavLink>
            </li>
            <li>
              <NavLink href="/about-university">About University</NavLink>
            </li>

            <li  className="tl-nav-item tl-dropdown">
            <a className={isDropdownOpen.leadership ? "dropdown-open" : ""}>
            Leadership{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.leadership ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("leadership")}
            >
              {isDropdownOpen.leadership ? "-" : "+"}
            </span>
          </a>

               <ul className={`tl-submenu ${
              isDropdownOpen.leadership ? "d-block" : "d-none"
            }`}>
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

              <li  className="tl-nav-item tl-dropdown">
            <a className={isDropdownOpen.statutoryboard ? "dropdown-open" : ""}>
            Statutory Boards{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.statutoryboard ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("statutoryboard")}
            >
              {isDropdownOpen.statutoryboard ? "-" : "+"}
            </span>
          </a>

               <ul className={`tl-submenu ${
              isDropdownOpen.statutoryboard ? "d-block" : "d-none"
            }`}>
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

              <li  className="tl-nav-item tl-dropdown">
            <a className={isDropdownOpen.committee ? "dropdown-open" : ""}>
            Committee{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.committee ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("committee")}
            >
              {isDropdownOpen.committee ? "-" : "+"}
            </span>
          </a>

               <ul className={`tl-submenu ${
              isDropdownOpen.committee ? "d-block" : "d-none"
            }`}>
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

              <li  className="tl-nav-item tl-dropdown">
            <a className={isDropdownOpen.infrastructure ? "dropdown-open" : ""}>
            Infrastructure{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.infrastructure ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("infrastructure")}
            >
              {isDropdownOpen.infrastructure ? "-" : "+"}
            </span>
          </a>

               <ul className={`tl-submenu ${
              isDropdownOpen.infrastructure ? "d-block" : "d-none"
            }`}>
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

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.admissions ? "dropdown-open" : ""}>
            Admissions{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.admissions ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("admissions")}
            >
              {isDropdownOpen.admissions ? "-" : "+"}
            </span>
          </a>

          <ul className={`tl-submenu ${
              isDropdownOpen.admissions ? "d-block" : "d-none"
            }`}>
                <li>
                    <NavLink href="/school-of-engineering">Programs Offered & Intake</NavLink>
                </li>

                <li  className="tl-nav-item tl-dropdown">
            <a className={isDropdownOpen.feestructure ? "dropdown-open" : ""}>
            Fee Structure{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.feestructure ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("feestructure")}
            >
              {isDropdownOpen.feestructure ? "-" : "+"}
            </span>
          </a>

               <ul className={`tl-submenu ${
              isDropdownOpen.feestructure ? "d-block" : "d-none"
            }`}>
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
                    <NavLink href="/assets/docs/admission-cutoff-23-24/admission-cutoff-23-24.pdf">Admission Cut Off 2023-2024 </NavLink>
                </li>
          </ul>

       
        </li>

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.courses ? "dropdown-open" : ""}>
            Courses{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.courses ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("courses")}
            >
              {isDropdownOpen.courses ? "-" : "+"}
            </span>
          </a>

       
        </li>

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.page ? "dropdown-open" : ""}>
            Pages{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.page ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("page")}
            >
              {isDropdownOpen.page ? "-" : "+"}
            </span>
          </a>
          <ul
            className={`tl-submenu ${
              isDropdownOpen.page ? "d-block" : "d-none"
            }`}
          >
            <li className="tl-dropdown-2">
              <a className={isDropdownOpen.about ? "inner-dropdown-open" : ""}>
                About{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.about ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("about")}
                >
                  {isDropdownOpen.about ? "-" : "+"}
                </span>
              </a>
              <ul
                className={`tl-submenu tl-submenu-2 ${
                  isDropdownOpen.about ? "d-block" : "d-none"
                }`}
              >
                <li>
                  <NavLink href="/about-7">About Us</NavLink>
                </li>
              
              </ul>
            </li>
           
          </ul>
        </li>

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.blog ? "dropdown-open" : ""}>
            Blogs{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.blog ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("blog")}
            >
              {isDropdownOpen.blog ? "-" : "+"}
            </span>
          </a>
        
        </li>

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.contact ? "dropdown-open" : ""}>
            Contact{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.contact ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("contact")}
            >
              {isDropdownOpen.contact ? "-" : "+"}
            </span>
          </a>
          <ul
            className={`tl-submenu ${
              isDropdownOpen.contact ? "d-block" : "d-none"
            }`}
          >
          
            <li className="mean-last">
              <NavLink href="/contact-2">Contact Us</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavSection;
