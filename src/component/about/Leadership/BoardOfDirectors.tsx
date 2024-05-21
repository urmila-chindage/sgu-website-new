'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const BoardOfDirectors = () => {
    const {displayedTeams} = useTalimContext()
  return (
    <section className="tl-1-teachers pt-50 pb-50">
        <div className="container">
            <div className="row g-4">
            <h2 className="tl-8-section-title">Our Inspiration</h2>
                {displayedTeams.map((item) => (
                  <div className="col-lg-3 col-sm-6 col-6 col-xxs-12" key={item.id}>
                    <div className="tl-2-teacher">
                        <img src={item.imgSrc} alt="Teacher Image"/>
                        <div className="tl-2-teacher-txt">
                           {/*  <ul className="tl-2-teacher-socials">
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>  */}
                            <div className="tl-2-teacher-info">
                                <h5 className="tl-2-teacher-title">{item.name}</h5>
                                <h6 className="tl-2-teacher-sub-title">{item.position}</h6>
                            </div>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default BoardOfDirectors