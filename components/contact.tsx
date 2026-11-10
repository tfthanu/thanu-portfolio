'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const onSubmit = async (data: FormData) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setFeedback('EmailJS is not configured yet. Add the environment variables in .env.local to enable form submission.');
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message
      }, { publicKey });

      setStatus('success');
      setFeedback('Your message has been sent successfully. Thank you for reaching out!');
      reset();
    } catch (error) {
      setStatus('error');
      setFeedback('Something went wrong while sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let&apos;s Start a Conversation</h2>
          <p className="mt-4 text-lg text-slate-300">
            I&apos;m always open to learning opportunities, professional connections and new experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-[2rem] p-7"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">Email</p>
                  <a href="mailto:thanuanjali@example.com" className="mt-1 text-lg text-white hover:text-accent">
                    thanuanjali@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accentBlue/30 bg-accentBlue/10 text-accentBlue">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/thanuanjali"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-lg text-white hover:text-accentBlue"
                  >
                    linkedin.com/in/thanuanjali
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">GitHub</p>
                  <a
                    href="https://github.com/tfthanu"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-lg text-white hover:text-accent"
                  >
                    github.com/tfthanu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accentBlue/30 bg-accentBlue/10 text-accentBlue">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">Location</p>
                  <p className="mt-1 text-lg text-white">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-[2rem] p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Full Name</label>
                <input
                  {...register('name', { required: 'Full name is required' })}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-accent/60"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-2 text-sm text-rose-400">{errors.name.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Email Address</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-accent/60"
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">Subject</label>
              <input
                {...register('subject', { required: 'Subject is required' })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-accent/60"
                placeholder="Project enquiry, opportunity, or hello"
              />
              {errors.subject && <p className="mt-2 text-sm text-rose-400">{errors.subject.message}</p>}
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-accent/60"
                placeholder="Write your message here..."
              />
              {errors.message && <p className="mt-2 text-sm text-rose-400">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentBlue px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={16} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status !== 'idle' && (
              <div
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                  status === 'success'
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    : 'border-rose-500/40 bg-rose-500/10 text-rose-300'
                }`}
              >
                {feedback}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
