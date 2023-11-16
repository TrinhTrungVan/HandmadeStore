import React from 'react'
import Navbar from '@/components/admin/navbar'

const AdminLayout = async ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-10 hidden h-full w-[240px] flex-col md:flex ">
        <Navbar />
      </div>
      <main className="h-full md:pl-[240px]">{children}</main>
    </div>
  )
}

export default AdminLayout
