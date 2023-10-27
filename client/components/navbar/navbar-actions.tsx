'use client'

import React, {useEffect, useState} from 'react'
import ProfileButton from './profile-button'

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="mr-4">
      <ProfileButton />
    </div>
  )
}

export default NavbarActions
