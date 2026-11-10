import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Featured Work</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass group overflow-hidden rounded-[2rem]"
            >
              <div
                className={`relative h-56 border-b border-white/10 bg-gradient-to-br ${
                  project.accent === 'purple'
                    ? 'from-accent/25 via-slate-800 to-slate-900'
                    : 'from-accentBlue/25 via-slate-800 to-slate-900'
                }`}
              >
                <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-white/5" />
                <div className="absolute left-10 top-10 h-16 w-16 rounded-2xl border border-white/10 bg-white/5" />
                <div className="absolute bottom-10 right-10 h-20 w-28 rounded-2xl border border-white/10 bg-slate-950/60" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/30 hover:text-accent"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentBlue px-4 py-2 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5"
                  >
                    <Globe size={16} />
                    Live Demo
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
