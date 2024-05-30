import React from 'react'
import AboutTestimonialSlider from '../slider/AboutTestimonialSlider'

const TestimonialSection2 = () => {
  return (
    <section className="tl-10-testimonial tl-testimonial pb-50">
    <div className="container">
        <div className="tl-10-section-heading">
            <h2 className="tl-section-title">
                Trusted by over 40,000+ Students Have To Say
                
            </h2>
        </div>
        <AboutTestimonialSlider pageStyle="tl-10-single" singleCardStyle="tl-10-single-testimony" navStyle='tl-10'/>
        </div>
    </section>
  )
}

export default TestimonialSection2