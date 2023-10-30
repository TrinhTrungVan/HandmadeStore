'use client'

import React, {useEffect, useState} from 'react'

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'

import Image from 'next/image'
import useRegisterModal from '@/hooks/use-register-modal'
import useLoginModal from '@/hooks/use-login-modal'
import useUser from '@/hooks/use-user'

const ProfileButton = () => {
  const [mounted, setMounted] = useState(false)
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const {user, setUserLogout} = useUser()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>
            <Image fill src={'/images/avatar_placeholder.jpg'} alt="User" />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] mr-[80px]">
        {!user && (
          <>
            <div
              onClick={registerModal.onOpen}
              className="font-bold cursor-pointer p-2 rounded transition hover:bg-zinc-100">
              Sign up
            </div>
            <div
              onClick={loginModal.onOpen}
              className="font-bold cursor-pointer p-2 rounded transition hover:bg-zinc-100">
              Log in
            </div>
          </>
        )}
        {user && (
          <>
            <div className="font-bold p-2 rounded">{user.username}</div>
            <div
              // onClick={loginModal.onOpen}
              className="cursor-pointer p-2 rounded transition hover:bg-zinc-100">
              Profile
            </div>
            <div
              onClick={setUserLogout}
              className="font-bold cursor-pointer p-2 rounded transition hover:bg-zinc-100 text-red-500">
              Logout
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default ProfileButton
