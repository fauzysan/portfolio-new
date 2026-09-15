import Link from "next/link";
import livechat from "@/img/livechat.png";

const projects = [
  {
    title: "Realtime LiveChat",
    description: "A realtime chat application built with Next.js and Supabase.",
    image: livechat,
    href: "https://livechat-nine.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">My Work</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Projects</h2>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40"
          >
            <div className="overflow-hidden">
              <img
                src={project.image.src}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{project.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-sky-400">
                Visit site &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
