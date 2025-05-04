import { Projects } from '@/components/projects/Projects'
import React from 'react'

import { Metadata } from "next";
import { getProjects } from '@/lib/query';

export const metadata: Metadata = {
  title: "Projects | Flowentech",
  description:
    "Leading software development agency offering custom web, mobile, and cloud solutions. We provide cutting-edge digital transformation services to boost your business.",
};

export default async function Page() {

  return <Projects />
}
