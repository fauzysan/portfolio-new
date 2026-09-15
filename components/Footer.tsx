import Link from 'next/link'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center">
      <p className="text-sm text-neutral-500">
        © {new Date().getFullYear()} Fauzi Hafidz. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center gap-5 text-xl text-neutral-400">
        <Link href="https://github.com/fauzysan" target="_blank" className="transition-colors hover:text-white">
          <SiGithub />
        </Link>
        <Link href="https://instagram.com/fauzyhafidz" target="_blank" className="transition-colors hover:text-white">
          <SiInstagram />
        </Link>
        <Link href="#" className="transition-colors hover:text-white">
          <SiLinkedin />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
