import { useEffect, useState } from 'react';
import { ArrowDown, BadgeCheck, BriefcaseBusiness, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const roles = ['Customer Support Professional', 'Quick Learner', 'Adaptable Team Member'];

  useEffect(() => {
    let currentRoleIndex = 0;
    let charIndex = 0;
    let deleteTimer = 0;

    const tick = () => {
      const currentRole = roles[currentRoleIndex];
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex += 1;
        deleteTimer = window.setTimeout(tick, 90);
        return;
      }

      window.setTimeout(() => {
        let deleteCount = currentRole.length;
        const erase = () => {
          if (deleteCount >= 0) {
            setTypedText(currentRole.slice(0, deleteCount));
            deleteCount -= 1;
            window.setTimeout(erase, 35);
            return;
          }

          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          charIndex = 0;
          tick();
        };

        erase();
      }, 1200);
    };

    tick();

    return () => window.clearTimeout(deleteTimer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-5%] h-72 w-72 rounded-full bg-accentBlue/20 blur-3xl" />
      </div>

      <div className="section-shell relative grid min-h-[calc(100vh-84px)] items-center gap-12 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent"
          >
            <BadgeCheck size={14} />
            {portfolio.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-sm uppercase tracking-[0.55em] text-muted"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {portfolio.name.split(' ').map((part, index) => (
              <span key={part} className={index === 0 ? 'block' : 'block'}>
                {part}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex items-center gap-2 text-xl font-medium text-slate-200 sm:text-2xl"
          >
            <span className="text-white">{portfolio.tagline}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            {portfolio.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-accentBlue px-6 py-3 text-sm font-medium text-slate-950 shadow-glow transition-all hover:-translate-y-0.5"
            >
              Explore My Portfolio
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex items-center gap-3 text-sm text-muted"
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
            <span className="font-medium text-slate-200">Currently:</span>
            <span>{typedText || 'Customer Support Professional'}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -left-10 top-4 h-20 w-20 rounded-full border border-accent/30 bg-accent/10 blur-sm" />
          <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full border border-accentBlue/30 bg-accentBlue/10 blur-sm" />

          <div className="glass relative overflow-hidden rounded-[2rem] p-4">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6">
              <div className="mb-6 flex items-center justify-between text-sm text-muted">
                <span>Portfolio</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-300">
                  Available
                </span>
              </div>

              <div className="relative mx-auto flex h-72 w-60 items-end justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-accent/20 via-slate-800 to-slate-900">
                <div className="absolute inset-x-6 top-6 h-40 rounded-[2rem] bg-gradient-to-br from-accent/20 via-white/5 to-transparent blur-xl" />
                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full border border-accent/30 bg-gradient-to-br from-accent/20 to-accentBlue/20" />
                <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-t-[50%] bg-gradient-to-b from-slate-700 to-slate-950" />
                <div className="absolute bottom-12 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-950/80 blur-sm" />
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">Role</p>
                    <p className="text-base font-medium text-white">Customer Support</p>
                  </div>
                  <BriefcaseBusiness className="text-accent" size={18} />
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">Focus</p>
                    <p className="text-base font-medium text-white">Professional Growth</p>
                  </div>
                  <Sparkles className="text-accentBlue" size={18} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted">
        <a href="#about" className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
