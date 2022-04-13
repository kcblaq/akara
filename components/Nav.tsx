import React, { useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/akaralogo.png';
import MyButton from './MyButton';
import { Box } from '@mui/material';
import {Menu,Close } from '@mui/icons-material';




export default function Nav() {
const [open, setOpen] = useState(false)

  return (
    <nav className='relative p-6 w-full bg-black text-offwhite overflow-scroll overflow-y-visible ' >
          <div className="flex items-center justify-between">
            <div className="pt-2">
              <Link href='/'> 
              <a> <Image src={Logo} alt="The Logo" /> </a></Link>
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

            {/* This is mobile Nav */}

            
       <Box className='hidden md:block'>
       <MyButton width={250} text={'Join our slack community'} />
       </Box>
       <Box className='d-block md:hidden text-white overflow-scroll'>
            {!open && <Menu onClick={() => setOpen(true)} />}
            {open && <Close onClick={() => setOpen(false)}/>}
            { 
            open && <div className="absolute right-5 h-50 top-15 flex flex-col md:hidden">
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
            }

       </Box>
          </div>
        </nav>
  )
}
