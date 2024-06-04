import React from "react";

const AboutSection = () => {
  return (
    <section className="tl-10-about-section p-50">
      <div className="container">
        <div className="row gy-5 align-items-center">
          {/* <div className="col-lg-6">
            <div className="tl-10-about-img">
              <img src="assets/images/about-us/aboutus-image1.jpg" alt="students" />

            </div>
          </div> */}
                  <div className="col-lg-6">
            {/* <div className="tl-10-about-img">
              <img src="assets/images/about-us/about-universityy.jpg" alt="university" />

            </div> */}
                       <div className="tl-10-about-img">
              <img src="assets/images/about-us/aboutus-image01.png" alt="university" />

              {/* <span className="bottom-img">
                <img src="assets/images/about-us/about-university02.png" alt="university" />
              </span> */}

              {/* <div className="tl-10-users">
                <div className="tl-10-users-img">
                  <img src="assets/images/tl-10/04.png" alt="user" />
                  <img src="assets/images/tl-10/03.png" alt="user" />
                  <img src="assets/images/tl-10/02.png" alt="user" />
                  <span className="last-img">
                    <img src="assets/images/tl-10/01.png" alt="user" />
                    <span className="last-img-txt">2k+</span>
                  </span>
                </div>

                <h6 className="tl-10-users-txt">
                  More Than <br /> 2k+ Tutors
                </h6>
              </div> */}
            </div>
          </div>

          
          <div className="col-lg-6">
        <div className="tl-10-about-txt">
          <h2 className="tl-section-title">
          Explore <span className="last-word">Excellence</span> at Sanjay Ghodawat University
          </h2>
          <p className="tl-10-about-descr tl-about-descr">
            Established in 2017, Sanjay Ghodawat University (SGU) offers top-tier education with NAAC A grade and NBA accredited programs.
          </p>
          <p className="tl-10-about-descr tl-about-descr">
            Our industry-aligned curriculum and choice-based credit system foster creativity and productivity.
          </p>
          <p className="tl-10-about-descr tl-about-descr">
            The 165-acre campus features advanced labs, smart classrooms, and premier sports facilities.
          </p>
          <a href="/about-university" target="_blank" className="tl-def-btn-2">
            Learn More{" "}
            <i className="fa-regular fa-arrow-right"></i>
          </a>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
