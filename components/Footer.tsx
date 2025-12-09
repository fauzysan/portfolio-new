import Link from 'next/link'
import React from 'react'
import {SiGithub, SiInstagram, SiLinkedin} from 'react-icons/si'

function Footer() {
  return (
    <div className='mx-auto p-5 items-center text-center border-t mt-10 w-1/2 font-semibold'>
        <div className='text-center mb-5'>
            Copyright 2024 @fauzyhafidz
        </div>
        <div className='flex justify-center space-x-3 text-2xl'>
            <Link href={"https://github.com/fauzysan"}><div><SiGithub /></div></Link>
            <Link href={"https://instagram.com/fauzyhafidz"}><div><SiInstagram /></div></Link>
            <Link href={"#"}><div><SiLinkedin /></div></Link>

        </div>
    </div>
  )
}

export default Footer
