'use client'
import React from 'react'
import Slider from 'react-slick';

const Recruiters = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        vertical: false,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
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
    <>
    <div className="tl-2-section-heading">
          <h2 className="tl-2-section-title text-center">Our Recruiters</h2>
        </div>
    <Slider className="tl-13-about-features" {...settings}>
         
       <div className="tl-13-about-feature" > <img src="assets/images/tl-1/engg01.jpg" alt="Recruiters-image" /></div>
        <img src="assets/images/tl-1/engg02.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg03.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg04.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        <img src="assets/images/tl-1/engg05.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg06.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg07.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg08.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        <img src="assets/images/tl-1/engg09.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg10.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg11.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg12.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        <img src="assets/images/tl-1/engg14.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg15.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg16.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg17.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        <img src="assets/images/tl-1/engg18.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg21.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg33.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg36.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        <img src="assets/images/tl-1/engg37.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/engg38.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba01.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba02.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        <img src="assets/images/tl-1/mba04.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba05.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba07.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba10.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        <img src="assets/images/tl-1/mba11.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba12.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba14.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba15.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        <img src="assets/images/tl-1/mba16.jpg" className="tl-13-about-feature" alt="Recruiters-image" />
        <img src="assets/images/tl-1/mba18.jpg" className="tl-13-about-feature" alt="Recruiters-image" />

        
    </Slider>
    </>
  )
}

export default Recruiters