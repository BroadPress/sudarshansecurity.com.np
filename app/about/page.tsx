import React from 'react'
import AboutClient from './AboutClient'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Sudarshan Security | Sudarshan Security Services",
  description: "About our managament team",
};

const About = () => {
  return (
    <div>
      <AboutClient/>
    </div>
  )
}

export default About
