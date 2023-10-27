import Link from 'next/link'

import MainNav from './main-nav'
import NavbarActions from './navbar-actions'
import Image from 'next/image'
import Container from '../container'

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex flex-row items-center min-w-[40px]">
              <Image
                alt="Logo"
                width="68"
                height="32"
                src="/images/logo.svg"
                priority={true}
              />
              <h3 className="hidden md:block lg:block font-bold text-xl bg-gradient-to-r from-[#00BFFF] to-[#5459FF] bg-clip-text text-transparent">
                KiriStore
              </h3>
            </Link>
          </div>
          <MainNav />
          <div className="flex items-center">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
