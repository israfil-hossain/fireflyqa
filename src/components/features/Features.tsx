import React from 'react'
import Banner from '../common/Banner'
import { aboutus, features } from '@/assets'

export const Features = () => {
  return (
    <div>
       <Banner 
        pageName="Features" 
        title="All the features you need" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        banner={features}/>
       <div className='bg-white h-60'>

       </div>
    </div>
  )
}
