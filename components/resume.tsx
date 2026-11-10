import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

export function ResumeSection() {
  return (
    <section id="resume" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-[2rem] p-8 text-center sm:p-12"
        >
          <span className="section-kicker">Resume</span>
          <h2 className="section-title">Want to Know More About Me?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore my resume to learn more about my background, skills and experience.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentBlue px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-accent/30 hover:bg-accent/10"
            >
              <Eye size={18} />
              Resume Preview
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-accentBlue/30 bg-accentBlue/10 px-4 py-2 text-sm text-accentBlue">
            <FileText size={16} />
            PDF format supported
          </div>
        </motion.div>
      </div>
    </section>
  );
}
