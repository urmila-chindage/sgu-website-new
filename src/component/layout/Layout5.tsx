import React from 'react'
import HeaderSection5 from '../header/HeaderSection5';
import HeaderSection8 from '../header/HeaderSection8';
import FooterSection7 from '../footer/FooterSection7';

interface LayoutProps {
    children: any;
}
const Layout5:React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <HeaderSection8  style='tl-10-header'
        darkLogo="assets/images/logos/logo-banner-image.png" 
        lightLogo="assets/images/logos/logo-banner-image.png"
        headerStyle=''
        btnStyle='tl-def-btn'
        loginBtn={true}/>
      {children}
      <FooterSection7 
      logo="assets/images/logos/sgulogo.jpg"
      style='tl-6-footer'
      descStyle="tl-5-footer-descr"
      socialStyle='tl-3-footer-socials tl-6-footer-socials'
      />
    </div>
  )
}

export default Layout5