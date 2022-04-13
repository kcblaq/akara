import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../public/akaralogo.png'
import instagram from '../public/instagram.png'
import box from '../public/box.png'
import twitter from '../public/twitter.png'
import youtube from '../public/youtube.png'
import MyButton from './MyButton'

export default function Footer() {
    return (
        <div className='flex flex-col bg-black text-white w-full p-10 md:p-20 md:flex-row  md:mt-0'>
            <Box className='flex w-full flex-col justify-between md:w-1/3'>
                <Box className='my-10'>  <Image src={logo} alt='Logo of Akara' /></Box>
                <Typography> Copyright © 2020 Akara Marketplace</Typography>
                <Typography> All rights reserved </Typography>
            </Box>
            <Box className='flex justify-evenly w-full flex-col md:flex-row '>
                <Box className='flex flex-col justify-between' > 
                    <Typography className='text-xl font-medium mt-5 md:mb-10'>  Company </Typography>
                   <a href='#'> <Typography className='text-gray text-base'>  About Us </Typography> </a> 
                    <a href='#'> <Typography className='text-gray text-base'>  Blog </Typography> </a> 
                    <a href='#'> <Typography className='text-gray text-base'>  Contact Us </Typography> </a> 
                    <a href='#'>  <Typography className='text-gray text-base'>  Pricing </Typography></a> 
                    <a href='#'>  <Typography className='text-gray text-base'>  Testimonials </Typography> </a> 
                </Box>
                <Box className='flex flex-col justify-between' > 
                    <Typography className='text-xl font-medium mt-5 md:mb-10'>  Support </Typography>
                   <a href='#'> <Typography className='text-gray text-base'>  Help center </Typography> </a> 
                    <a href='#'> <Typography className='text-gray text-base'>  Terms of service </Typography> </a> 
                    <a href='#'> <Typography className='text-gray text-base'>  Legal</Typography> </a> 
                    <a href='#'>  <Typography className='text-gray text-base'>  Privacy policy </Typography></a> 
                    <a href='#'>  <Typography className='text-gray text-base'>  Status </Typography> </a> 
                </Box>
                <Box className='flex flex-col' > 
                    <Typography className='text-xl font-medium mt-5 md:mb-10'>  Social Platforms </Typography>
                   <div className='flex flex-row'>
                       <a href='#'><Image src={instagram} alt='Instagram' /> </a>
                       <a href='#'><Image src={box} alt='Instagram' /> </a>
                       <a href='#'> <Image src={twitter} alt='Instagram' /></a>
                       <a href='#'> <Image src={youtube} alt='Instagram' /></a>
                       
                   </div>
                   {/* <Box className='hidden md:block'> */}
                       <MyButton width={{sm:250,xs:250,md:270}} text={'Join our slack community'} />
                   {/* </Box> */}
                </Box>
                
                
               
            </Box>
            
        </div>
    )
}
