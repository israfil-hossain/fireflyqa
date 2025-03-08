import Link from 'next/link'
import React from 'react'

const ScheduleButton = () => {
  return (
    <div>
         <Link
          href="https://calendly.com/flowentech"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium bg-gradient-to-r from-[#5454D4] border to-tintblue w-32 lg:w-40 px-4  py-2 rounded-full hover:from-[#5d98ea] hover:to-[#023070] transition-colors lg:text-[16px] text-[12px]"
        >
          Schedule a Call
        </Link>
    </div>
  )
}

export default ScheduleButton