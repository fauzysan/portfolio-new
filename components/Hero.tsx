import Link from 'next/link'
import React from 'react'
import Fauzi from '@/img/zy.jpg'
import { Button } from './ui/moving-border'
import { Spotlight } from './ui/Spotlight'
import {TypewriterEffectSmooth} from './ui/type-writer-effect'

const Hero = () => {
  const word = [
    {
      text: "Fauzi",
    },
    {
      text: "Hafidz",
    }
  ]
  return (

    <div className='flex lg:flex-row max-md:flex-col-reverse sm-md:text-center items-center justify-between font-sans py-52 h-screen w-full dark:bg-grid-white/[0.05] bg-grid-black/[0.2] '>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className='mx-auto max-md:mt-24 flex flex-col'>
            <p className='font-semibold text-2xl lg:text-4xl my-2'>Hello, I'm <br /></p>
            <TypewriterEffectSmooth words={word}/>
            <p className='my-10 text-xl'>Based in Indonesia. I'm fullstack developer passionate <br/>about building a modern web application.</p>
            <Link href={"mailto:fauzyhafidz123@gmail.com"} className='inline-block'>
              <Button className='hover:text-slate-400'>
                <h1 className='text-2xl font-bold'>Contact Me</h1>
              </Button>
            </Link>
        </div>
        <div className='mx-auto w-[450px] h-[480px] max-md:size-64'>
            <img src={Fauzi.src} alt="fauzi"  className='rounded-full'/>
        </div>  
    </div>
  )
}

export default Hero