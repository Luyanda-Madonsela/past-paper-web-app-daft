"use client"

import Link from 'next/link'
import Image from 'next/image';
import logo from '/public/images/Logo.png'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Navigation = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href="/">
            <Image src={logo}  alt='/' layout="intrinsic"

                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw" 
                width={320} 
                height={100}
            />
          </Link>     
      </div>

      <div className='user'>
           <Link href="/profile">
            <div className='name'>
                <p>Luyanda Madonsela</p>

                <div>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="open folder with document" src="/images/profile_pic.png" sx={{ width: 35, height: 35 }} />
                    </Stack>
                </div>

            </div>
            </Link>  

      </div>


      <div className='navItems' > 
          <Link href="/">
            <p>Home</p>
          </Link>

          <Link className='navItem' href="/dashboard">
            <p>Dashboard</p>
          </Link>

          <Link className='navItem' href="/signup">
            <p>Sign Up</p>
          </Link>

          <Link className='navItem' href="/contact">
            <p>Contact Us</p>
          </Link>
        </div>

    </nav>
  )
}

export default Navigation
