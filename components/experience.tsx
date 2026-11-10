import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="relative mt-14">
          {portfolio.experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass relative mb-8 rounded-[2rem] p-7"
            >
              <div className="absolute left-8 top-8 hidden h-full w-px bg-gradient-to-b from-accent/80 to-transparent md:block" />
              <div className="relative md:pl-14">
                <div className="mb-4 flex items-center gap-3 text-accent">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                    <Briefcase size={18} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted">{item.period}</span>
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-base text-muted">{item.company} • {item.industry}</p>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl leading-7 text-slate-200">{item.description}</p>

                <ul className="mt-6 space-y-3">
                  {item.responsibilities.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="mt-0.5 text-accentBlue" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
