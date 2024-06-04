"use client";
import Link from "next/link";
import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "@/context/TalimContext";

interface HeaderProps {
  style: string;
  lightLogo: string;
  darkLogo: string;
  headerStyle: string;
  btnStyle: string;
  loginBtn: boolean;
}
const HeaderSection8: React.FC<HeaderProps> = ({
  style,
  lightLogo,
  darkLogo,
  headerStyle,
  btnStyle,
  loginBtn,
}) => {
  const { isHeaderFixed, isDarkTheme, handleSidebarOpen } = useTalimContext();
  return (
<div className="nav-mainnnnnn"> 
     <div className="container containerrr-logo logo col-lg-10 d-flex justify-content-between d-lg-block d-none no-top-padding" >
            <Link href="/" style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
              <img src={isDarkTheme ? lightLogo : darkLogo} alt="Logo" width={90} />
              <div style={{ width: '100%' }} className="d-lg-block noneeeeeee">    <span className="text-centerrr"><span className="navlogo-titleeeee1">Sanjay Ghodawat University,</span>  <span className="kolhapurrr">Kolhapur</span>  <br /> <span className="centerrrr">Empowering Lives Globally! </span></span>
                <p className="below-paraaaa d-lg-block d-none">Established under section 2 (f) of UGC Act 1956 <br /> Sanjay Ghodawat University Act XL of 2017 of Govt. of Maharashtra <span className="rednav-boxxxx"></span> Approved by PCI, COA & AICTE</p> </div>
            </Link>
            <div className="col-lg-2 col-2 logoooo-nav d-lg-block d-none" style={{
          display: 'flex', gap: '10px',
          alignItems: 'center'
        }}>
       
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
              <div className="d-lg-none d-flex justify-content-end col-12">
                <button
                  className="tl-hamburger navbar-toggler"
                  onClick={handleSidebarOpen}
                >
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
<div
      className={`tl-header  ${headerStyle} ${isHeaderFixed ? "sticky" : ""
        } ${style}`}
    // style={{border:'1px solid black'}}
    >
      {/*  <div className="container-fluid banner-bg">
        <div className="container">
      <div className="row g-0 justify-content-between align-items-center">
           <div className="col-lg-4">
           <Link href="/">
              <img src="assets/images/logos/logo-banner-image.png"/>
            </Link>
           </div>
           
           <div className="col-lg-4 text-right">
           <Link href="/">
              <img src="assets/images/logos/logo-banner.jpg"/>
            </Link>
           </div>
        </div>
    </div> 
    </div>    */}
      {/* <div className="col-lg-12 col-6">
                <div className="logo" >
                  <Link href="/" style={{display:'flex', gap:'10px'}}>
                    <img src={isDarkTheme ? lightLogo : darkLogo} alt="Logo" width={80} />
                    <span>Sanjay Ghodawat University, Kolhapur Empowering Lives Globally!</span>
                  </Link>
                </div>
              </div> */}
      <div className="container less-marginnnn" >
      <div className="container less-marginnnn containerrr-logo col-lg-10 d-lg-none d-flex  justify-content-between" >
            <Link href="/" style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
              <img src={isDarkTheme ? lightLogo : darkLogo} alt="Logo" width={70} />
              <div style={{ width: '100%' }} className="d-lg-block noneeeeeee">    <span className="text-centerrr"><span className="navlogo-titleeeee1">Sanjay Ghodawat University,</span>  <span className="kolhapurrr">Kolhapur</span>  <br /> <span className="centerrrr">Empowering Lives Globally! </span></span>
                <p className="below-paraaaa d-lg-block d-none">Established under section 2 (f) of UGC Act 1956 <br /> Sanjay Ghodawat University Act XL of 2017 of Govt. of Maharashtra <span className="rednav-boxxxx"></span> Approved by PCI, COA & AICTE</p> </div>
            </Link>
            <div className="col-lg-2 col-2 logoooo-nav" style={{
          display: 'flex', gap: '10px',
          alignItems: 'center'
        }}>
       
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
              <div className="d-lg-none d-flex justify-content-end col-12">
                <button
                  className="tl-hamburger navbar-toggler"
                  onClick={handleSidebarOpen}
                >
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
        <div className="row g-4 col-lg-12 align-items-center" >


          <div className="col-10">
            <div className="tl-nav-menu">
              <NavSection ulPosition="" liStyle="" />
            </div>
          </div>

          <div className="col-2 d-lg-block d-none admission-opeeen">
            <div className="tl-header-actions d-flex justify-content-end">
              {loginBtn ? (
                <>
                  {/* <form action="#" className="tl-nav-search-form">
                    <input
                      type="search"
                      name="Search"
                      className="tl-nav-search"
                      placeholder="Search items"
                    />
                    <button className="tl-searh-btn">
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
              </form>  */}
                  <Link href="/login"  className={btnStyle}>
                    Admission Open
                  </Link>
                </>
              ) : (
                <>
                  {/* <form
                    action="#"
                    className="tl-nav-search-form kb-10-nav-search-form"
                  >
                    <input
                      type="search"
                      name="Search"
                      className="tl-nav-search kb-10-nav-search"
                      placeholder="Search items"
                    />
                    <button className="tl-searh-btn kb-searh-btn-10">
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
              </form>  */}
                  <Link href="/register" className="kb-10-def-btn">
                    Subscribe
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default HeaderSection8;
