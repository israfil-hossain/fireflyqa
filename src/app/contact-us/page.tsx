import Banner from '@/components/common/Banner'
import ContactForm from '@/components/contact/ContactFrom'
import { contactus } from '@/constants/assets'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact-Us | Fireflyqa",
  description:
    "Leading software development agency offering custom web, mobile, and cloud solutions. We provide cutting-edge digital transformation services to boost your business.",
};


export default function Page() {
  return (
    <div>
      <Banner 
        pageName="/ contact-us" 
        title="Contact Us" 
        subtitle="We are here to help and answer any questions you might have. Here is how you can reach us."
        banner={contactus}
        className="rounded-full mb-8 py-3"
        isSchedule={true}
      />
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">
          Whether you have a question about our services, need assistance, or just want to say hello, we would love to hear from you!
        </p>
      </div>
        <ContactForm />
    </div>
  )
}
