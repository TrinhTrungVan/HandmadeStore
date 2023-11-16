'use client'

import React, {useEffect, useState} from 'react'
import ProfileButton from './profile-button'
import {Button} from '../ui/button'
import {useRouter} from 'next/navigation'
import {ShoppingBag} from 'lucide-react'
import useCart from '@/hooks/use-cart'

const NavbarActions = () => {
  const router = useRouter()
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="mr-4 flex flex-row space-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full px-4 py-2 ">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      <ProfileButton />
    </div>
  )
}

export default NavbarActions
