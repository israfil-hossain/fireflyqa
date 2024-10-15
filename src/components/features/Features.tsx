import React from 'react'
import Banner from '../common/Banner'
import { aboutus, features } from '@/assets'
import { FrequentlyQuestion } from '../common/FrequentlyQuestion'
import FeaturePreview from './FeaturePreview'
import Benefits from './Benefits'
import ContactSection from '../common/ContactSection'
import Marque from './Marque'

export const Features = () => {
  return (
    <div>
       <Banner 
        pageName="Features" 
        title="All the features you need" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        banner={features}/>
        <Marque />
        <Benefits />
        <FeaturePreview />
        <FrequentlyQuestion />
        <ContactSection />
    </div>
  )
}
