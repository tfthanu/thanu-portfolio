import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

export function Skills() {
  const skillSections = [
    { title: 'Professional Skills', items: portfolio.professionalSkills },
    { title: 'Technical Skills', items: portfolio.technicalSkills }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Core Skills & Strengths</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {skillSections.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass rounded-[2rem] p-7"
            >
              <h3 className="text-2xl font-medium text-white">{group.title}</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {group.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-accent/30 hover:bg-accent/5 hover:shadow-blueGlow"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accentBlue/20 text-accent">
                      {index + 1}
                    </div>
                    <p className="text-base font-medium text-white">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
