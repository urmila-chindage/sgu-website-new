import Link from 'next/link'
import React from 'react'

const AboutSGGroup = () => {
  return (
    <section className="tl-8-about tl-3-section-spacing">
        <div className="container">
            <div className="row g-0 justify-content-between align-items-center">
                <div className="col-xl-5 col-lg-5">
                    <div className="tl-8-about-img">
                        <img src="assets/images/tl-8/sggroup.jpg" alt="Driving Image" className="tl-8-about-main-img"/>
                        <img src="assets/images/tl-8/sticker.png" alt="sticker" className="tl-8-about-sticker"/>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="tl-8-about-txt yellow-clr-hover">
                        <h2 className="tl-8-section-title">About Sanjay Ghodawat Group</h2>

                        <div className="tl-8-features">
                            <div className="tl-8-feature">
                               
                                <p className="tl-8-feature-descr">Sanjay Ghodawat Group is a popular conglomerate that spans its products and services from Salt to Airlines in various sectors. It was commenced in the decade of 90s by the Chairman of the Group, Hon. Sanjay Ghodawat who himself is a Mechanical Engineer, Trained and certified pilot, Educational Entrepreneur and Industrialist. The Group today boasts of a strength of more than 10,000 employees under its aegis. Consumer Goods, Real Estate, Floriculture, Wind Turbines, Energy, Education, Airlines, Marble Mining, Textiles, Beverages, Softech etc are some of its verticals that the Group has forayed into. Enhancing Lives Globally is its maxim and true to its philosophy the Group is focussed on bettering and enhancement of human lives through its products and services.</p>
                            </div>

                           
                        </div>

                        <a href="https://www.ghodawat.com/" className="tl-def-btn-2">More About Us <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSGGroup