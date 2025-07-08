import React from 'react'
import Banner from '../common/Banner'
import { mission } from '@/assets'
import { FrequentlyQuestion } from '../common/FrequentlyQuestion'
import FeaturePreview from './FeaturePreview'
import ContactSection from '../common/ContactSection'
import Marque from './Marque'
import OurService from '../home/OurService'

export const Features = () => {
  return (
    <div>
       <Banner 
        pageName="/ our-services" 
        title={
          <>
            Contracting & , <br />
            <span className="font-uncut text-primary">
              Hospitality Solutions 
            </span>
          </>
        }
        subtitle="Comprehensive contracting and hospitality solutions including MEP, HVAC, BAS, renovation, installation, maintenance, and skilled manpower supply."
        banner={mission}/>
        <Marque />
        {/* <Benefits /> */}
        <OurService />
        <FeaturePreview />
        <FrequentlyQuestion />
        <ContactSection />
    </div>
  )
}
