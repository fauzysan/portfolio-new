"use client"
import { HoverEffect } from './ui/card-hover-effect';
import { SiCplusplus, SiDocker, SiGit, SiMysql, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

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
    <section id='skills' className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">What I Work With</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Skills</h2>
        </div>
        <HoverEffect items={skills} />
    </section>
  )
}

export default Skills
