import Link from 'next/link'
import React from 'react'

const Awards = () => {
  return (
    <section className="tl-12-subjects approved-section-spacing">
        <div className="container">
            <div className="tl-12-section-heading">
                <h2 className="tl-12-section-title">Awards and Accolades</h2>
            </div>

            <div className="tl-12-subjects-row">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-5">
                            <h5 className="approved-subj-title">SGU is Recognised in the band "PROMISSING" under the category "University & Deemed to be University (Private / Self Financed)(Technical)" in Atal Ranking Institutions on Innovation Achievement (ARIIA) 2021.</h5>
                            <Link href="/assets/docs/certificate/certificate.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15">Certificate</Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-6">
                            <h5 className="approved-subj-title">SGU Awarded All India 4th Rank for Top Emerging Engineering Institute by Times Engineering Survey-2021.</h5>
                            
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-7">
                            <h5 className="approved-subj-title">SGU Awarded All India 5th Rank for Emerging Engineering Institute : Placement by Times Engineering Survey-2021.</h5>
                            
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-4">
                            <h5 className="approved-subj-title">SGU Awarded All India 2nd Rank for Emerging Engineering Institute : Research Capability by Times Engineering Survey-2021.</h5>
                           
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-3">
                            <h5 className="approved-subj-title">SGU Awarded for Top Emerging Private University of India by Times B-School Survey-2020.</h5>
                          
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-2">
                            <h5 className="approved-subj-title">SGU Awarded for Best Emerging Private University of Maharashtra by Navbharat times at Nagpur</h5>
                            <Link href="/assets/docs/certificate/best-emerging.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Awards