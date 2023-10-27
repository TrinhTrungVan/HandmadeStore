import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const SetupLayout = async ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default SetupLayout
