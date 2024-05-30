import Link from 'next/link'
import React from 'react'

const Affiliations = () => {
  return (
    <section className="tl-12-subjects approved-section-spacing">
        <div className="container">
            <div className="tl-12-section-heading">
                <h2 className="tl-12-section-title">Approvals</h2>
            </div>

            <div className="tl-12-subjects-row">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-5">
                            <h5 className="approved-subj-title">Approved First Statutes- GOM -29-9-2022.</h5>
                            <Link href="/assets/docs/approvals/Approved First Statutes- GOM -29-9-2022.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15"> View Details </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-6">
                            <h5 className="approved-subj-title">SGU Act XL - 2017 GR Dt 03-05-2017</h5>
                            <Link href="/assets/docs/approvals/SGU Act XL - 2017 GR Dt 03-05-2017.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15"> View Details </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-7">
                            <h5 className="approved-subj-title">SGU-FIRST GOM APPROVED ORDINANCE</h5>
                            <Link href="/assets/docs/approvals/SGU-FIRST GOM APPROVED ORDINANCE.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15"> View Details </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-4">
                            <h5 className="approved-subj-title">Approval Letter of AICTE for 2020-21.</h5>
                            <Link href="#" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15"> View Details </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-3">
                            <h5 className="approved-subj-title">Approval Letter of COA for 2020-21.</h5>
                            <Link href="/assets/docs/approvals/COA Approval 2020-21.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15"> View Details </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-2">
                            <h5 className="approved-subj-title">Approval Letter of PCI for 2021-22..</h5>
                            <Link href="/assets/docs/approvals/PCI Approval 2021-22.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15"> View Details </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                        <div className="tl-12-subj text-center tl-12-subj-1">
                            <h5 className="approved-subj-title">Established as a State Private University under Govt. of Maharashtra Act No. XL dated 3rd May 2017</h5>
                            <Link href="/assets/docs/approvals/ms-act.pdf" rel="noopener noreferrer" target="_blank" className="tl-def-btn mt-15"> View Details </Link>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Affiliations