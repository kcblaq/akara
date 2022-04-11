import { Box, TextField, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Comingsoon from '../public/coming-soon.png'
import Comingsoonhalf from '../public/coming-soon1.png'

export default function Hero() {
  return (
    <div className='flex flex-col px-6 justify-between bg-black w-full mt-20 md:flex-row' >
      <Box className="flex flex-col w-full md:w-1/2 text-white md:ml-20">
        <h1
          className="max-w-md text-4xl font-bold text-center md:text-7xl md:text-left leading-10"
        >
          Buy and Own <span className='text-secondary'>  awesome </span> African NFTs
        </h1>
        <p className='text-center  text-2xl md:text-left mt-10'> Welcome to Akara marketplace, you can buy and sell awesome artwork to enjoy cool feature form us.</p>
        <Box className='px-3 py-4 bg-white flex mt-6 rounded'>
          <input type='text' placeholder='Enter your email address to be notified when we launch' style={{ width: '80%' }}
          />
          <Button variant='contained' className='bg-primary capitalize'> Subscribe</Button>
        </Box>
        <Box className='flex justify-around mt-10'> 
        <div> <Typography className='text-5xl font-semibold'> 30 </Typography>  <Typography className='text-faint text-2xl font-normal'>Days </Typography> </div>
        <div> <Typography className='text-5xl font-semibold'> 10 </Typography> <Typography className='text-faint text-2xl font-normal'> Hours </Typography> </div>
        <div> <Typography className='text-5xl font-semibold'> 20 </Typography> <Typography className='text-faint text-2xl font-normal'> Seconds</Typography> </div>
        </Box>
      </Box>
      <div className="flex flex-row w-full text-white items-center md:w-1/2 md:ml-10 mt-10 overflow-scroll">
        <Box className='flex flex-col justify-center overflow-scroll'><Image src={Comingsoon} height='424' width='362' alt='coming soon' />
          <Box className='bg-lightblack pb-8'>
            <Typography className='mt-5 text-2xl ml-10'> Coming Soon</Typography>
            <Typography className='mt-2 text-2xl ml-10 text-akara'> Akara Market </Typography>
          </Box>
        </Box>
        <Box className='flex flex-col justify-center overflow-scroll'><Image src={Comingsoonhalf} height='424' width='362' alt='coming soon' />
          <Box className='bg-white pb-8 overflow-scroll'>
            <Typography className='mt-5 text-2xl ml-10 text-black'> Coming Soon</Typography>
            <Typography className='mt-2 text-2xl ml-10 text-akara'> Akara Market </Typography>
          </Box>
        </Box>
      </div>
    </div>
  )
}
