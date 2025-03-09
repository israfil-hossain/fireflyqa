import Banner from '@/components/common/Banner'
import ContactForm from '@/components/contact/ContactFrom'
import { contactus } from '@/constants/assets'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Banner 
        pageName="/ contact-us" 
        title="Contact Us" 
        subtitle="We are here to help and answer any questions you might have. Here is how you can reach us."
        banner={contactus}
        className="rounded-full mb-8 py-3"
      />
        <ContactForm />
    </div>
  )
}
