import { Features } from '@/components/features/Features'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feature | Flowentech",
  description:
    "Leading software development agency offering custom web, mobile, and cloud solutions. We provide cutting-edge digital transformation services to boost your business.",
};

export default function Page() {
  return <Features />
}
