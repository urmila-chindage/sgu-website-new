import React from "react";
import MenuList from '@/component/academics/University-library/Reusable-components/MenuList'
import NavLinks from '@/component/academics/University-library/Reusable-components/Navlinks';

const LibraryPlan = () => {
   return(
    <div className="schools-section pt-50 pb-50">
        <div className="container">
            <div className="row">
                <h2 className="universityobject-heading dark-mode-white-color">SGU Library</h2>
                <MenuList dept="Schools" subMenu={NavLinks}/>
                    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 col-lg-8 dept-content" data-target="#menu-navbar" data-offset="0">
                         <ul className="tl-event-details-infos">
                            <li className="tl-event-details-info">
                                <span className="key">Reading hall area</span> <span className="ml-20">400.00 sq.mtr.</span> 
                            </li>

                            <li className="tl-event-details-info">
                                <span className="key">Stack section</span> <span className="ml-20">400.00 sq.mtr.</span> 
                            </li>

                            <li className="tl-event-details-info">
                                <span className="key">Reference section, Periodical Section and Staff Reading Section</span> <span className="ml-20">100.00 sq.mtr.</span> 
                            </li>

                            <li className="tl-event-details-info">
                                <span className="key">Issue counters office and stores</span> <span className="ml-20">90.00 sq.mtr.</span> 
                            </li>

                            <li className="tl-event-details-info">
                                <span className="key">Digital Library</span> <span className="ml-20">50.00 sq.mtr.</span> 
                            </li>
               
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
      
      
      
   )
}

export default LibraryPlan