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
        darkLogo="assets/images/sgulogo-white.jpg" 
        lightLogo="assets/images/sguu-logoo.png"
        headerStyle=''
        btnStyle='tl-def-btn'
        loginBtn={true}/>
      {children}
      <FooterSection7 style='' logo='assets/images/logos/sgulogo.jpg' descStyle='tl-footer-descr' socialStyle='tl-footer-socials'/>
    </div>
  )
}

export default Layout5