import React from 'react'
import ContactClient from './ContactClient'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Contact | Sudarshan Security Services",
  description: "Contact  Sudarshan Security Services Pvt. Ltd., ",
};
const Contact = () => {
  return (
    <div>
      <ContactClient/>
    </div>
  )
}

export default Contact
