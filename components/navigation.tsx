import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

const navItems = portfolio.navLinks;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accentBlue text-sm font-bold text-slate-950">
            TA
          </div>
          <span className="text-lg font-semibold tracking-[0.12em] text-white">THanu Anjali</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="rounded-full border border-accent/40 bg-accent/15 px-5 py-2.5 text-sm font-medium text-accent transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-slate-950"
          >
            Let&apos;s Connect
          </Link>
        </div>

        <button
          aria-label="Toggle navigation"
          className="rounded-full border border-white/10 p-2 md:hidden"
          onClick={() => setOpen((state) => !state)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-background/95 md:hidden"
          >
            <div className="section-shell flex flex-col gap-3 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-white/5 px-3 py-2 text-muted transition-colors hover:border-accent/30 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 rounded-full bg-gradient-to-r from-accent to-accentBlue px-4 py-2.5 text-center text-sm font-medium text-slate-950"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
