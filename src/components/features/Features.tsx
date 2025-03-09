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
        pageName="/ features" 
        title="Everything You Need, All in One Place" 
        subtitle="Discover a comprehensive suite of features designed to elevate your business. From seamless integrations to advanced customization, we provide the tools you need to succeed."
        banner={features}/>
        <Marque />
        <Benefits />
        <FeaturePreview />
        <FrequentlyQuestion />
        <ContactSection />
    </div>
  )
}
