import Link from 'next/link'
import React from 'react'

const AboutLogo = () => {
  return (
    <section className="tl-8-about tl-3-section-spacing">
        <div className="container">
            <div className="row g-0 align-items-center">
                <div className="col-xl-5 col-lg-5">
                    <div className="tl-8-about-img">
                        <img src="assets/images/tl-8/aboutlogo.jpg" alt="Driving Image"/>
                       
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="tl-8-about-txt yellow-clr-hover">
                        <h2 className="tl-8-section-title">About Logo</h2>

                        <div className="tl-8-features">
                            <div className="tl-8-feature">
                               
                                <p className="tl-8-feature-descr">Sanjay Ghodawat University has a remarkable logo with a shield like shape bearing five stars and the symbol of the Sun. The logo has an aura of excellence and richness in its presentation. The shield stands for the defense of great moral force that Nature contains in it. The five stars that are on the top of the logo stand for five great values of commitment, excellence, innovation, dynamism and morality. In the middle the acronym SGU stands for the name of the University. The symbol of the Sun portrays the supremacy of the institution in educational field as the sun in our planetary system. The red color expresses the commitment that the institution has towards the society in providing the best education for the betterment of the society. In the logo, the white background suggests the spiritual strength on which the institution stands.</p>
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

export default AboutLogo