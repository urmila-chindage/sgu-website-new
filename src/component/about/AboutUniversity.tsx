import Link from 'next/link'
import React from 'react'

const AboutUniversity = () => {
  return (
    <section className="tl-8-about tl-3-section-spacing">
        <div className="container">
            <div className="row g-0 justify-content-between align-items-center">
                <div className="col-xl-4 col-lg-4">
                    <div className="tl-8-about-img">
                        <img src="assets/images/tl-8/about-university.jpg" alt="Driving Image" className="tl-8-about-main-img"/>
                        <img src="assets/images/tl-8/sticker.png" alt="sticker" className="tl-8-about-sticker"/>
                    </div>
                </div>

                <div className="col-xl-7 col-lg-7">
                    <div className="tl-8-about-txt yellow-clr-hover">
                        <h2 className="tl-8-section-title">About University</h2>

                        <div className="tl-8-features">
                            <div className="tl-8-feature">
                               
                                <p className="tl-8-feature-descr">Sanjay Ghodawat University was established as a State Private University in the year 2017. Previously it was Sanjay Ghodawat Insitutes formed in the year 2009 by the Chairman of SG Group, Sanjay Ghodawat. The Institute had received NAAC A grade and also its programs were accredited by NBA and after this the natural progression was the evolvement of Sanjay Ghodawat University.<br/>

                                The University was formed to accomodate more students and give them a variety of choices for their career path. The University offers UG, PG and PhD programs in Technology, Management, Commerce, Science, Liberal Arts, Architecture, Pharmacy and Computer Applications.<br/>

                                The USP of the University is its curriculum in tandem with the requirements of the Industry plus choice based credit system that allows students to choose major as well minor in the subjects of their choice. It encourages multi - disciplinary approach that helps students’ creativity and productivity. The University also offers hand on experience with establishment of Tata Technology Centre, Mechatronics Lab Car, BOSCH Collaboration Centre, Centre of Space and Atmospheric Science etc.<br/>

                                The University campus is a state of art facility provided to students to help them study in a pristine environment. The 165 acres campus is replete with facilities like spacious classrooms, smart classrooms, well equipped labs, food court, amphitheatre, stadium with flood lights, swimming pool, horse riding, tennis court etc.<br/>

                                The School of Commerce and Management, SGU was recognized as Top Emerging B School by Times B School Survey 2020. School of Technology, SGU Ranked 4th in Top Emerging Engineering Institutes of the Nation, 9th in Placement Category and 2nd in Research Capabilities by Times Ranking 2020.</p>
                            </div>

                           
                        </div>

                       {/*  <a href="https://www.ghodawat.com/" className="tl-def-btn-2">More About Us <i className="fa-regular fa-arrow-right-long"></i></a>  */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUniversity