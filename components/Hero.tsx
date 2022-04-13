import { Box, TextField, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Comingsoon from '../public/coming-soon.png'
import Comingsoonhalf from '../public/coming-soon1.png'
import arrow from '../public/coiledarrow.png'
import Particles from 'react-tsparticles'

export default function Hero() {
  return (
    <div className='flex flex-col pt-5 relative p-6 bg-black w-full overflow-x-scroll  
    md:flex-row md:pt-20 md:p-0 bg-[url("../public/bg-animation.gif")]'  >

      <div className="flex flex-col relative w-full p-6 md:m-w-300 text-white md:ml-20 ">
        <h1
          className="max-w-md text-4xl font-bold text-center md:text-7xl md:text-left leading-10"
        >

          Buy and Own <span className='text-secondary'>  awesome </span> African NFTs
        </h1>
        <div className='hidden md:block absolute top-36 -right-20'>
          <Image src={arrow} alt='Coiled arrow' />
        </div>
        <p className='text-center text-gray text-2xl md:text-left mt-10'> Welcome to Akara marketplace, you can buy and sell awesome artwork to enjoy cool feature form us.</p>
        <div className='flex mt-6 rounded-xl bg-white px-2 justify-center items-center'>
          <input type='text' placeholder='Enter your email address to be notified when we launch' className='py-5 px-2' style={{ width: '80%', }}
          />
          <Button variant='contained' className='bg-primary capitalize h-10'> Subscribe</Button>

        </div>
        <div className='flex space-x-4 md:justify-around mt-10 '>
          <div> <Typography className='text-3xl md:text-5xl font-semibold'> 30 </Typography>  <Typography className='text-faint text-2xl font-normal'>Days </Typography>

          </div>
          <div> <Typography className='text-3xl md:text-5xl font-semibold'> 10 </Typography> <Typography className='text-faint text-2xl font-normal'> Hours </Typography> </div>
          <div> <Typography className='text-3xl md:text-5xl font-semibold'> 20 </Typography> <Typography className='text-faint text-2xl font-normal'> Seconds</Typography> </div>
        </div>
      </div>

      <Box className="flex w-full mt-10 flex-col text-white md:ml-20 md:flex-row space-x-8 "
      sx={{width:{xs:'100%', sm:'100%',md:'300',lg:'300'},overflow:'scroll'}}
      >
        <div className='flex flex-col overflow-scroll md:w-96 '><Image src={Comingsoon} height={424} width={362} alt='coming soon' />
          <div className='bg-lightblack w-full md:pb-6'>
            <Typography className='mt-5 text-2xl ml-10 md:mt-0'> Coming Soon</Typography>
            <Typography className='mt-2 text-2xl ml-10 text-akara'> Akara Market </Typography>
          </div>
        </div>

        <div className='flex flex-col overflow-scroll md:w-96 '><Image src={Comingsoonhalf} height={424} width={362} alt='coming soon' />
          <div className='bg-white w-full md:pb-6'>
            <Typography className='mt-5 text-black text-2xl ml-10 md:mt-0'> Coming Soon</Typography>
            <Typography className='mt-2 text-2xl ml-10 text-akara'> Akara Market </Typography>
          </div>
        </div>
      </Box>

      
    </div>
  )
}


