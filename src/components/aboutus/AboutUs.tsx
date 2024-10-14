import React from 'react'
import Banner from '../common/Banner'
import aboutus from '@/assets/aboutus.png'
import DevelopmentSection from './Development'
import OurtechStack from './OurtechStack'
import TimelineWorks from './TimelineWorks'

export const AboutUs = () => {
  return (
    <div>
       <Banner 
        pageName="About Us" 
        title="Our designs solve problems" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        banner={aboutus}/>
       <DevelopmentSection />
       <OurtechStack />
       <TimelineWorks />
    </div>
  )
}
