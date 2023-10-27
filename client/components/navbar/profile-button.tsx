import React from 'react'

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'

import Image from 'next/image'
import useRegisterModal from '@/hooks/use-register-modal'
import useLoginModal from '@/hooks/use-login-modal'

const ProfileButton = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

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
      </PopoverContent>
    </Popover>
  )
}

export default ProfileButton
