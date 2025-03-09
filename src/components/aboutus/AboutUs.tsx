import React from 'react'
import Banner from '../common/Banner'
import aboutus from '@/assets/aboutus.png'
import DevelopmentSection from './Development'
import OurtechStack from './OurtechStack'
import TimelineWorks from './TimelineWorks'
import MissonVission from './MissonVission'
import { Newsletter } from '../common/Newsletter'

export const AboutUs = () => {
  return (
    <div>
       <Banner 
        pageName="/ about-us" 
        title="Our designs solve problems" 
        subtitle="We deliver bespoke web development and design solutions that help businesses grow, engage customers, and scale effectively. From intuitive interfaces to seamless functionality, trust FlowenTech to transform your startup’s digital presence with cutting-edge technology and expert design."
        banner={aboutus}/>
       <DevelopmentSection />
       <OurtechStack />
       <TimelineWorks />
       <MissonVission />
       <Newsletter />
    </div>
  )
}
