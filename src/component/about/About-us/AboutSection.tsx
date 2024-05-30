import React from "react";

const AboutSection = () => {
  return (
    <section className="tl-10-about-section p-120">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <div className="tl-10-about-img">
              <img src="assets/images/about-us/aboutus-image1.jpg" alt="students" />

            </div>
          </div>

          <div className="col-lg-6">
            <div className="tl-10-about-txt">
              <h2 className="tl-section-title tl-10-about-title">
                Leadership The Educupt Global{" "}
                <span className="last-word">Education</span>.
              </h2>
              <p className="tl-10-about-descr tl-about-descr">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected randomised words which don't look even slightly
                believable.
              </p>
              <a href="#" className="tl-def-btn-2">
                University Overview{" "}
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
