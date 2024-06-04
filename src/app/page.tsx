import AboutSection from '@/component/leadership-section/AboutSection'
import WhySGU from '@/component/why-sgu/WhySGU';
import Tatatechnologies from '@/component/ties-up/Tatatechnologies';
import SchoolsSlider from '@/component/schools/SchoolsSlider';
import Collaborations from '@/component/collaborations/Collaborations';
import Management from '@/component/management/Management';
import Applyonline from '@/component/apply-online/Applyonline';
import BannerSection from '@/component/banner/BannerSection';
import NewsandEvents from '@/component/latest-news/NewsandEvents';
import BlogSection6 from '@/component/blog/BlogSection6';
import CampusSection2 from '@/component/campus/CampusSection2';
import CourseSection2 from '@/component/course/CourseSection2';
import FooterSection7 from '@/component/footer/FooterSection7';
import HeaderSection8 from '@/component/header/HeaderSection8'
import VideoModal from '@/component/modal/VideoModal';
import PricingSection3 from '@/component/pricing/PricingSection3';
import TestimonialSection2 from '@/component/testimonial/TestimonialSection2';
import Recruiters from '@/component/our-recruiters/Recruiters';
import SguHIghlights from "@/component/Sgu-highlights/SguHIghlights";
import SguVideo from '@/component/video-section/SguVideo';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "SGU University",
    description: "Developed by Enark",
  };  
const Home10 = () => {
  return (
    <div className='home-10'>
        <HeaderSection8 
        style='tl-10-header'
        darkLogo="assets/images/sguu-logoo.png" 
        lightLogo="assets/images/sguu-logoo.png"
        headerStyle=''
        btnStyle='tl-def-btn'
        loginBtn={true}
        />
        <BannerSection />
        <AboutSection />
        <Tatatechnologies />
        <WhySGU/>
        <NewsandEvents/>
        <Collaborations/>
        <SchoolsSlider/>
        <Applyonline/>
        <SguHIghlights/>
        <Management/>
        <CampusSection2 />
        <TestimonialSection2 />
        <Recruiters style='tl-6-membership pt-50 pb-50' 
        slideStyle='' 
        swiperStyle=''/>
        <SguVideo/>
       
       {/* <PricingSection3 />
        <CourseSection2 />
        <BlogSection6 />  */}
        <FooterSection7 style='' logo='assets/images/logos/sgulogo.jpg' descStyle='tl-footer-descr' socialStyle='tl-footer-socials'/>
        <VideoModal />
    </div>
  )
}

export default Home10