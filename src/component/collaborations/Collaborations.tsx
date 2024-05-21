import { eventList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const Collaborations = () => {
  return (
    <section className="tl-3-events tl-3-section-spacing">
        <div className="container">
           <div className="tl-3-events-cards">
                <div className="row">
                  <div className="col-md-3">
                        <div className="tl-3-single-event">
                           <p className="collaborations-icons"><i className="fa-regular fa-handshake"></i></p>
                                <div className="tl-3-single-event-txt">
                                   <Link href="#" className="tl-3-single-event-title">Collaborations</Link>
                                   <p>SGU has collaborations with Foreign Universities, Industries .....</p>
                                </div>
                        </div>
                    </div>  

                    <div className="col-md-3">
                        <div className="tl-3-single-event">
                           <p className="collaborations-icons"><i className="fa-regular fa-th"></i></p>
                                <div className="tl-3-single-event-txt">
                                   <Link href="#" className="tl-3-single-event-title">Credit Based Evaluation (CBE) System</Link>
                                   <p>Student have the flexibility to pursue</p>
                                </div>
                        </div>
                    </div> 

                    <div className="col-md-3">
                        <div className="tl-3-single-event">
                           <p className="collaborations-icons"><i className="fa-regular fa-book"></i></p>
                                <div className="tl-3-single-event-txt">
                                   <Link href="#" className="tl-3-single-event-title">Job Oriented Programmes</Link>
                                   <p>Industry Oriented Programmes for job opportunities</p>
                                </div>
                        </div>
                    </div> 

                    <div className="col-md-3">
                        <div className="tl-3-single-event">
                           <p className="collaborations-icons"><i className="fa-regular fa-clipboard"></i></p>
                                <div className="tl-3-single-event-txt">
                                   <Link href="#" className="tl-3-single-event-title">Outcome Based Education (OBE) System</Link>
                                   <p>Best Practices in Teaching - Learning</p>
                                </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collaborations