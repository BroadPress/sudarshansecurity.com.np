import React from 'react'
import OurTeam from './TeamClient'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Team | Sudarshan Security Services",
  description: "Our team",
};

const Team = () => {
  return (
    <div>
      <OurTeam/>
    </div>
  )
}

export default Team
