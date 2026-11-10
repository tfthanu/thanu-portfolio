import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">About</span>
          <h2 className="section-title">A Little About Me</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-[2rem] p-7 sm:p-8"
          >
            <p className="text-lg leading-8 text-slate-200">{portfolio.shortIntro}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Personality</p>
                <p className="mt-3 text-slate-200">Quick learner, adaptable, responsible, positive and collaborative.</p>
              </div>
              <div className="rounded-2xl border border-accentBlue/20 bg-accentBlue/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-accentBlue">Interests</p>
                <p className="mt-3 text-slate-200">Technology, communication, learning and personal development.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {portfolio.personalTraits.map((trait) => (
              <div key={trait.title} className="glass rounded-[1.5rem] p-5">
                <div className="mb-2 flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent to-accentBlue" />
                  <h3 className="text-xl font-medium text-white">{trait.title}</h3>
                </div>
                <p className="text-muted">{trait.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-2xl font-semibold text-white">Interests</h3>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {portfolio.interests.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
