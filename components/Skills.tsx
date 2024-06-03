"use client"
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import {SiCplusplus, SiDocker, SiGit, SiMysql, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'
function Skills() {
    const skills = [
        {
            title: "React",
            Icon: SiReact
        },
        {
            title: "NextJs",
            Icon: SiNextdotjs
        },
        {
            title: "Tailwind",
            Icon: SiTailwindcss
        },
        {
            title: "NodeJs",
            Icon: SiNodedotjs
        },
        {
            title: "MySQL",
            Icon: SiMysql
        },
        {
            title: "Python",
            Icon: SiPython
        },
        {
            title: "C++",
            Icon: SiCplusplus
        },
        {
            title: "Git",
            Icon: SiGit
        },
        {
            title: "Docker",
            Icon: SiDocker
        },
      ];
  return (
    <div id='Skills'>
        <div className='text-center text-4xl font-bold m-10 max-w-5xl mx-auto'>
            Skills
        </div>
        <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
    </div>
    </div>
  )
}

export default Skills