import Link from 'next/link'
import Fauzi from '@/img/zy.jpg'
import { Button } from './ui/moving-border'
import { Spotlight } from './ui/Spotlight'
import { TypewriterEffectSmooth } from './ui/type-writer-effect'
import { SiGithub, SiInstagram } from 'react-icons/si'

const Hero = () => {
  const word = [
    { text: "Fauzi" },
    { text: "Hafidz" },
  ]

  return (
    <section className="relative flex min-h-screen w-full flex-col-reverse items-center justify-center gap-12 overflow-hidden bg-black px-6 pb-20 pt-20 lg:flex-row lg:justify-between lg:gap-8 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-grid-white/[0.05]" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <Spotlight className="top-40 -left-0 md:-left-60 md:top-20" fill="white" />

      <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Fullstack Developer
        </p>
        <p className="mt-2 text-2xl font-semibold text-neutral-200 sm:text-3xl">
          Hello, I&apos;m
        </p>
        <TypewriterEffectSmooth words={word} className="justify-center lg:justify-start" />
        <p className="max-w-md text-neutral-400">
          Based in Indonesia, I build modern, fast, and reliable web applications from front to back.
        </p>
        <div className="mt-8 flex items-center gap-6">
          <Link href="mailto:fauzyhafidz123@gmail.com" className="inline-block">
            <Button className="hover:text-sky-400">Contact Me</Button>
          </Link>
          <div className="flex items-center gap-4 text-2xl text-neutral-400">
            <Link
              href="https://github.com/fauzysan"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              <SiGithub />
            </Link>
            <Link
              href="https://instagram.com/fauzyhafidz"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              <SiInstagram />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-56 w-56 shrink-0 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/40 via-transparent to-transparent blur-2xl" />
        <img
          src={Fauzi.src}
          alt="Fauzi Hafidz"
          className="relative h-full w-full rounded-full border border-white/10 object-cover"
        />
      </div>
    </section>
  )
}

export default Hero
