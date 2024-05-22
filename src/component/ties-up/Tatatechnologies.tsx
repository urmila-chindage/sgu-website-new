'use client'
import React from 'react'
interface CtaProps {
    style: string;
}
const Tatatechnologies:React.FC<CtaProps> = ({style}) => {
  return (
    <div className={`tl-7-cta ${style}`}>
    <div className="tl-7-cta-bg container">
        <div className="row align-items-center justify-content-between">
            <div className="col-xxl-9 col-lg-9">
                <h2 className="tl-7-cta-title">SANJAY GHODAWAT UNIVERSITY TIES UP WITH TATA TECHNOLOGIES TO SET UP A CENTRE OF EXCELLENCE</h2>
            </div>

           <div className="col-xxl-3 col-lg-3 col-5 text-start text-md-end">
                <a href="#" className="tl-7-def-btn">Details</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Tatatechnologies