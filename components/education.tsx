import { motion } from 'framer-motion';
import { GraduationCap, Sparkles } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Education</span>
          <h2 className="section-title">Academic Journey</h2>
        </div>

        <div className="mt-14 space-y-8">
          {portfolio.education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass rounded-[2rem] p-7"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">{item.title}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.institution}</h3>
                    <p className="mt-2 text-slate-200">{item.qualification}</p>
                  </div>
                </div>

                <div className="rounded-full border border-accentBlue/30 bg-accentBlue/10 px-4 py-2 text-sm text-accentBlue">
                  {item.status}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                <Sparkles size={14} />
                <span>{item.period}</span>
              </div>

              <p className="mt-5 max-w-3xl leading-7 text-slate-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
