"use client"
import React from 'react'
import Link from "next/link";
import livechat  from "@/img/livechat.png"
import { PinContainer } from './ui/3d-pin';
function Projects() {
  return (
    <div id='projects'>
      <div className='text-4xl text-center font-bold m-10 max-w-5xl mx-auto'>
        Projects
      </div>
      <div className='flex mx-auto justify-center max-md:flex-col gap-8 flex-wrap'>
        <PinContainer
          title="/livechat-nine.vercel.app/"
          href="https://livechat-nine.vercel.app/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Realtime LiveChat
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                This application made with nextjs and supabase db.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4">
              <img src={livechat.src} alt="" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="/livechat-nine.vercel.app/"
          href="https://livechat-nine.vercel.app/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Realtime LiveChat
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                This application made with nextjs and supabase db.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4">
              <img src={livechat.src} alt="" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="/livechat-nine.vercel.app/"
          href="https://livechat-nine.vercel.app/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Realtime LiveChat
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                This application made with nextjs and supabase db.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4">
              <img src={livechat.src} alt="" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="/livechat-nine.vercel.app/"
          href="https://livechat-nine.vercel.app/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Realtime LiveChat
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                This application made with nextjs and supabase db.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4">
              <img src={livechat.src} alt="" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="/livechat-nine.vercel.app/"
          href="https://livechat-nine.vercel.app/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Realtime LiveChat
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                This application made with nextjs and supabase db.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4">
              <img src={livechat.src} alt="" />
            </div>
          </div>
        </PinContainer>
        
      </div>
    </div>
  )
}

export default Projects