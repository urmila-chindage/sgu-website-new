'use client'
import React from 'react'
import Slider from 'react-slick';
interface AboutProps{
    padding: string;
    margin: string;
}
const AboutCampus:React.FC<AboutProps> = ({padding,margin}) => {
    const settingsReverse = {
        dots: false,
        arrows: false,
        infinite: true, // Set to true to enable infinite loop
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        rtl: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
      const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4800,
        autoplaySpeed: 0,
        cssEase: "linear",
        vertical: true,
        pauseOnHover: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    
        <div className="container">
            <div className={`tl-7-about-content ${margin}`}>
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-7-about-campus-cards">
                            <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-1 reverse-slider"
                            {...settingsReverse}
                            >
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-8/about-university.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-8/about-university.jpg" alt="Dance Image"/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-8/aboutus-image.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-8/sggroup.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                            </Slider>

                          {/*  <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-2"
                            {...settings}
                            >
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-7/about-2.jpg" alt="Dance Image"/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card tl-7-about-stat-card">
                                        <img src="assets/images/tl-7/kb-about-stat-icon.png" alt="Icon"/>

                                        <h6><span className="number">23<i className="fa-regular fa-sharp fa-plus"></i></span> years of experience</h6>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-7/about-2.jpg" alt="Dance Image"/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card tl-7-about-stat-card">
                                        <img src="assets/images/tl-7/kb-about-stat-icon.png" alt="Icon"/>

                                        <h6><span className="number">23<i className="fa-regular fa-sharp fa-plus"></i></span> years of experience</h6>
                                    </div>
                                </div>
                            </Slider>  */}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-7-section-heading tl-7-about-heading yellow-clr">
                          
                            <h2 className="tl-7-section-title">About Campus</h2>
                            <ul className="tl-section-ul">
                                <li className="tl-7-about-timing"><i className="fa-regular fa-star"></i>Classification of Land - Category -RURAL</li>
                                <li className="tl-7-about-timing"><i className="fa-regular fa-star"></i>Letter Issued by - Gram Vikas Adhikari - A/P. Atigre Taluka - Hatkanangale Sarpanch A/P. Atigre Taluka - Hatkanangale</li>
                                <li className="tl-7-about-timing"><i className="fa-regular fa-star"></i>Land Use Certificate Issued by - Tahsildar - Taluka : Hatkanangale</li>
                                <li className="tl-7-about-timing"><i className="fa-regular fa-star"></i>Details of Building Plan Approved by- Gram Vikas Adhikari - A/P. Atigre, Taluka - Hatkanangale, Sarpanch A/P. Atigre Taluka - Hatkanangale</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
  )
}

export default AboutCampus