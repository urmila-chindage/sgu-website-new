import Link from 'next/link'
import React from 'react'
interface FooterProp {
    logo: string;
    style: string;
    descStyle: string;
    socialStyle: string;
}
const FooterSection7:React.FC<FooterProp> = ({logo, style, descStyle, socialStyle}) => {
  return (
    <footer className={`tl-footer ${style}`}>
        <div className="tl-footer-top">
            <div className="container">
                <div className="row gy-5 justify-content-center">
                    <div className="col-xxl-7 col-xl-6">
                        <div className="row gy-5 justify-content-between">
                            <div className="col-md-5 col-sm-6 col-12">
                                <div className="tl-footer-widget">
                                    <Link href="/" className="logo">
                                        <img src={logo} alt="Logo"/>
                                    </Link>

                                    <p className={descStyle}>The Sanjay Ghodawat University stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life.</p>

                                    <ul className={socialStyle}>
                                        <li><a href="https://twitter.com/SGUniversityKop" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="https://www.facebook.com/SGUniversityKolhapur" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dia-Km9XXP4" target="_blank"><i className="fa-brands fa-square-youtube"></i></a></li>
                                        <li><a href="https://www.sanjayghodawatuniversity.ac.in/sgu-exam" target="_blank"><i className="fa-brands fa-square-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-12 text-md-start text-sm-end">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">Get in touch</h5>

                                    <ul className="tl-footer-links tl-footer-contact-infos">

                                    <li><a href="mailto:registrar@sanjayghodawatuniversity.ac.in" target="_blank" className="tl-footer-number">registrar@sanjayghodawatuniversity.ac.in</a></li>

                                        <li className="tl-footer-number">Toll Free : 1800 31300 1566</li>
                                        <li className="tl-footer-number">+91 90110 39800 / 90110 22567</li> <br/>
                                        
                                        <li>
                                            <p className="tl-footer-address">Sanjay Ghodawat University,<br/>Kolhapur - Sangli Highway, <br/> A/p Atigre - 416 118, <br/>Tal. - Hatkanangale, <br/> Dist. - Kolhapur,Maharashtra, India</p>
                                        </li>

                                        <li><a href="https://www.sanjayghodawatuniversity.ac.in/contact-location" target="_blank" className="tl-6-footer-map-btn">Get Directions <i className="fa-light fa-arrow-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-5 col-xl-6">
                        <div className="row gy-5">
                            <div className="col-sm-6 col-6 col-xxs-12">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">About Us</h5>
                                    <ul className="tl-footer-links">
                                        <li><Link href="/about-university" target="_blank">About SGU</Link></li>
                                        <li><Link href="/university-object" target="_blank">University Aspects & Objects</Link></li>
                                        <li><Link href="/vision-mision" target="_blank">Vision & Mission</Link></li>
                                        <li><Link href="/quality-policy" target="_blank">Quality Policy & Objective</Link></li>
                                        <li><Link href="/core-values" target="_blank">Core Values</Link></li>
                                        <li><Link href="/social-responsibilities" target="_blank">Social Responsibilities </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-6 col-xxs-12 text-md-start text-sm-center">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">Academics</h5>
                                    <ul className="tl-footer-links">
                                        <li><a href="https://www.sanjayghodawatuniversity.ac.in/academic-brochure" target="_blank">Academic Brochure</a></li>
                                        <li><a href="https://www.sanjayghodawatuniversity.ac.in/academic-framework" target="_blank">Academic Framework</a></li>
                                        <li><a href="/foreign-university" target="_blank">Foreign University Collaborations</a></li>
                                        <li><a href="/industry-collaborations" target="_blank">Industry Collaborations</a></li>
                                        <li><a href="https://www.sanjayghodawatuniversity.ac.in/library-about" target="_blank">University Library</a></li>
                                        <li><a href="https://www.sanjayghodawatuniversity.ac.in/beyond-studies" target="_blank">Beyond Studies</a></li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-footer-bottom">
            <div className="container">
                <p className="tl-copyright-txt m-0 text-center">Copyright &copy; 2024 All Rights Reserved by Enark</p>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection7