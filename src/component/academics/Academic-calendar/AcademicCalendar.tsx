import React from "react";

const AcademicCalendar = () => {
   return(
    <div className="tl-event-details-container pt-50 pb-50 tl-10-about-section" >
        <div className="container">
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-12">
                    <h2 className="universityobject-heading">Academic Calendar</h2>
                    <div className="tl-event-details-left">
                        <h4>Academic Calendar Odd Semester 2023-24</h4>
                        <div className="tl-event-details-key-content tl-event-details-area">
                               <ul className="tl-event-details-key-content-list phd-container">
                                    <li><a rel="noopener noreferrer" target="_blank" href="/assets/docs/academic-calendar/odd-sem/ACADEMIC CALENDAR 2023-24.pdf">ACADEMIC CALENDAR 2023-24 Odd Semester <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                    <li><a rel="noopener noreferrer" target="_blank" href="/assets/docs/academic-calendar/odd-sem/COMMENCED FROM 7th AUGUST 2023 (ACADEMIC CALENDAR).pdf">COMMENCED FROM 7th AUGUST 2023-2024 (ACADEMIC CALENDAR) Odd Semester <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="tl-event-details-left mt-30">
                        <h4>Academic Calendar EVEN Semester 2023-24</h4>
                        <div className="tl-event-details-key-content tl-event-details-area">
                               <ul className="tl-event-details-key-content-list phd-container">
                                    <li><a rel="noopener noreferrer" target="_blank" href="/assets/docs/academic-calendar/even-sem/Academic Calendar 2023-24 Even Sem.pdf">Academic Calendar 2023-24 Even Sem <i className="fa-regular fa-arrow-right-long"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   )
}

export default AcademicCalendar