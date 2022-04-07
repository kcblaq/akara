import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import Logo from '../public/akaralogo.png';

export default function Nav() {
  return (
    <nav className="relative container mx-auto p-6 w-full bg-black text-offwhite">
          <div className="flex items-center justify-between">
            <div className="pt-2">
              <Image src={Logo} alt="The Logo" />
            </div>

            <div className="hidden space-x-6 md:flex">
              <Link href='/'>
              <a className="hover:text-tetiary active:text-white">
              Home
              </a>
              </Link>
              <Link href='/works'>
              <a className="hover:text-tetiary active:text-white">
              How it works
              </a>
              </Link>
              <Link href='/market-place'>
              <a className="hover:text-tetiary active:text-white">
              Market place
              </a>
              </Link>
              <Link href='/about'>
              <a className="hover:text-tetiary active:text-white">
              About
              </a>
              </Link>
            </div>

            <a
              href="#"
              className="hidden p-3 px-6 pt-2 text-white bg-akara w-auto baseline hover:bg-white hover:text-black md:block">
              Join our slack community
            </a>
        
          </div>
            
          <div className="md:hidden">
            <div
              className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
              <a href="/">Home</a>
              <a href="/works">How it works</a>
              <a href="#">Market place</a>
              <a href="#">About</a>
            </div>
          </div>
        </nav>
  )
}
