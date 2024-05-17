'use client';
import React from "react";
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CampusSection2 = () => {
  const imageGallery = [
    {id:1,image:"/assets/images/tl-10/gallery-image1.jpg"},
    {id:2,image:"/assets/images/tl-10/gallery-image2.jpg"},
    {id:3,image:"/assets/images/tl-10/gallery-image3.jpg"},
    {id:4,image:"/assets/images/tl-10/gallery-image4.jpg"},
    {id:5,image:"/assets/images/tl-10/gallery-image5.jpg"},
    {id:6,image:"/assets/images/tl-10/gallery-image6.jpg"},
    {id:7,image:"/assets/images/tl-10/gallery-image7.jpg"},
    {id:8,image:"/assets/images/tl-10/gallery-image8.jpg"},
    {id:9,image:"/assets/images/tl-10/gallery-image9.jpg"},
    {id:10,image:"/assets/images/tl-10/gallery-image10.jpg"},
  ]
  return (
    <section className="tl-10-campus-section p-120">
      <div className="container">
        <div className="tl-10-section-heading">
          <h2 className="tl-section-title tl-10-campus-section-title">
            <span className="last-word">Campus</span> Life
          </h2>
          <p className="tl-10-secton-descr">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some.
          </p>
        </div>

        <div className="row align-items-center gy-3">
        {/* <Swiper 
            className="tl-6-members tl-9-members owl-carousel"
            slidesPerView={5}
            autoplay={{delay: 2000, disableOnInteraction: true}}
            modules={[Autoplay]}
            >
                {imageGallery.map((item) => (
                    <SwiperSlide className="tl-6-member tl-9-member" key={item.id}>
                        <img src={item.image} alt="Member logo"/>
                    </SwiperSlide>
                ))}
                <div className="tl-6-members-nav">
                <button className="tl-6-members-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button className="tl-6-members-next">
                    <i className="fa-regular fa-arrow-right"></i>
                </button>
                </div>
              </Swiper>  */}
         <div className="col-lg-3 col-6">
            <div className="tl-10-campus-section-single-img">
              <a data-fslightbox href="assets/images/tl-10/campus-image1.jpg">
                <img
                  src="assets/images/tl-10/campus-image1.jpg"
                  alt="Campus Picture"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="tl-10-campus-section-single-img">
              <a data-fslightbox href="assets/images/tl-10/campus-image2.jpg">
                <img
                  src="assets/images/tl-10/campus-image2.jpg"
                  alt="Campus Picture"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="tl-10-campus-section-single-img">
              <a data-fslightbox href="assets/images/tl-10/campus-image3.jpg">
                <img
                  src="assets/images/tl-10/campus-image3.jpg"
                  alt="Campus Picture"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="tl-10-campus-section-single-img">
              <a data-fslightbox href="assets/images/tl-10/campus-image4.jpg">
                <img
                  src="assets/images/tl-10/campus-image4.jpg"
                  alt="Campus Picture"
                />
              </a>
            </div>
  </div>  
        </div>

        <div className="tl-10-campus-section-txt">
          <div className="row align-items-center justify-content-center justify-content-lg-start gy-2">
            <div className="col-lg-4 col-9">
              <p>
                Our university takes full advantage of its location in one of
                the most vibrant and diverse cities in the world.
              </p>
            </div>

            <div className="col-lg-4 col-12 text-center">
              <a href="#" className="tl-def-btn-2 tl-10-campus-section-btn">
                More Information <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection2;
