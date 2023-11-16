import Link from 'next/link'

import MainNav from './main-nav'
import Image from 'next/image'
import ProfileButton from '../navbar/profile-button'

const Navbar = async () => {
  return (
    <div className="flex h-full w-full flex-col justify-between border-b p-4 bg-[#DADADA]">
      <div className="space-y-4">
        <Link href="/admin" className="flex flex-row items-center">
          <Image
            alt="Logo"
            width="68"
            height="32"
            src="/images/logo.svg"
            priority={true}
          />
          <h3 className="font-bold text-xl bg-gradient-to-r from-[#00BFFF] to-[#5459FF] bg-clip-text text-transparent">
            KiriStore
          </h3>
        </Link>
        <MainNav />
      </div>
      <div className="flex flex-row items-center">
        <ProfileButton />
      </div>
    </div>
  )
}

export default Navbar
