import Link from "next/link";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Skills", link: "/#skills" },
  { name: "Projects", link: "/#projects" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          Fauzi<span className="text-sky-400">.</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm text-neutral-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.link} className="transition-colors hover:text-white">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
