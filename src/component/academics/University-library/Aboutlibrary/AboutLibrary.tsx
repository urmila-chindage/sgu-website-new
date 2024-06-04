import React from "react";
import MenuList from '@/component/academics/University-library/Reusable-components/MenuList'
import NavLinks from '@/component/academics/University-library/Reusable-components/Navlinks';

const AboutLibrary = () => {
   return(
    <div className="schools-section pt-50 pb-50">
        <div className="container">
            <div className="row">
                <h2 className="universityobject-heading dark-mode-white-color">SGU Library</h2>
                <MenuList dept="Schools" subMenu={NavLinks}/>
                    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 col-lg-8 dept-content" data-target="#menu-navbar" data-offset="0">
                        <div className="tl-event-details-left">
                            <div className="tl-event-details-key-content tl-event-details-area">
                                <h4 className="dark-mode-white-color">About Library</h4>
                                <p className="dark-mode-white-color">SGU Central Library provides a safe, comfortable and friendly environment enabling learning and advancement of knowledge. The vision of the Central Library is to be a leader and partner in providing worldwide information in creating and implementing ideas and services that advance research, teaching and learning. The library has 37009 Books, 107 Journals and magazines, 3 e-journal packages which contain 4000 e-journals, approx 1600+ CD ROM, 12,000+ IIT Video lectures, 13 Newspapers and 50,000+ IIT Web Courses.</p>
                                <h5 className="dark-mode-white-color"><strong>Vision</strong></h5>
                                <p className="dark-mode-white-color">The University library will be leader and partner in providing world wide information in creating and implementing ideas, services that advance research, teaching and learning.</p>

                                <h5 className="dark-mode-white-color"><strong>Mission</strong></h5>
                                <p className="dark-mode-white-color">To facilitate creation of new knowledge through acquisition, organization and dissemination of knowledge resources and providing value added services for bringing effectiveness in teaching, learning and research.</p>
                            </div>
                        </div>

                        <div className="tl-event-details-left mt-20">
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <h4 className="dark-mode-white-color">Library Automation</h4>
                               <p className="dark-mode-white-color">The Library uses SLIM 21 software package which is an integrated multi-user Library management system that supports all in-house operations of the Library. The SLIM 21 consists of modules on acquisition, cataloguing, circulation, serial control, utilities and OPAC. Retrospective conversion of bibliographic records has been completed and more than 35,200 bibliographic records of books available in the library can now be accessed through the SLIM 21 OPAC. The database of books available in the Library is being updated on day to day basis with details of recently acquired books. Records of all the Library patrons have also been created in the SLIM 21 software.</p>
                               
                            </div>
                        </div>

                        <div className="tl-event-details-left mt-20">
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <h4 className="dark-mode-white-color">IT Infrastructure</h4>
                               <p className="dark-mode-white-color">Central Library is a part of the University-wide network built around a fiber optic Ethernet backbone comprising of five routing switches. The library is connected to the backbone through one of the routing switches. University backbone in turn is connected to 100 mbps of Internet band width on leased links from BSNL. The Digital Library has 2 servers, 20 PCs and other accessories adequate to cater to the needs of users. PCs are meant for users to access OPAC, databases, e-books, e-journals and other e-resources. Currently the reading areas in the Library have Wi-Fi enabled to provide wireless access to the Internet. Users are welcome to use their laptops in the Library. Also all 20 PCs are connected to links of NPTEL video lectures, which includes approximate 12,000+ video lectures for students and faculty members. Apart from above 20PC's library is having 7 more computers exclusively used for library administrative work.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      
   )
}

export default AboutLibrary