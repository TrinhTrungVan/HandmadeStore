'use client'

import useUser from '@/hooks/use-user'
import {usePathname, useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

const AuthProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  const {user} = useUser()
  const router = useRouter()
  const pathname = usePathname()
  const isAdmin = user?.isAdmin

  useEffect(() => {
    if (isAdmin) {
      return router.push('/admin')
    }

    router.push('/')
  }, [router, isAdmin, pathname])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return null
}

export default AuthProvider
