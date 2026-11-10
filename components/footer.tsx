import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="section-shell py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accentBlue text-sm font-bold text-slate-950">
                TA
              </div>
              <div>
                <p className="text-xl font-semibold text-white">{portfolio.name}</p>
                <p className="text-sm text-muted">Learning Today. Growing Every Day.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <nav className="flex flex-wrap gap-4 text-sm text-muted">
              {portfolio.navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 text-white">
              <a href={portfolio.socialLinks.email} className="rounded-full border border-white/10 p-2.5 transition hover:border-accent/30 hover:text-accent" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href={portfolio.socialLinks.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2.5 transition hover:border-accentBlue/30 hover:text-accentBlue" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href={portfolio.socialLinks.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2.5 transition hover:border-accent/30 hover:text-accent" aria-label="GitHub">
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {portfolio.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-accent/30 hover:bg-accent/10"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
