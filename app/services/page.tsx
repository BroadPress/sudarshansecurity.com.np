import React from 'react'
import ServiceClient from './ServiceClient'
import { Metadata } from 'next';

 export const metadata: Metadata = {
  title: "Services | Sudarshan Security Services",
  description: "Services offered by Sudarshan Security Pvt. Ltd.",
};

const page = () => {
  return (
    <div>
      <ServiceClient />

    </div>
  )
}

export default page
