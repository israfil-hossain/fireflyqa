import React from 'react'
import BannerSlider from '../common/BannerSlider'
import { ServiceData } from '@/constants/serviceData'

export const OurService = () => {
  return (
    <div className="text-center  items-center py-8">
        <div className="text-center mb-8 items-center flex flex-col justify-center">
          <h2 className="text-gray-600">Service</h2>
          <h3 className="text-3xl font-semibold text-tintblue max-w-lg">
           Service We Offer
          </h3>
        </div>
        <BannerSlider data={ServiceData}/> 
    </div>
  )
}
