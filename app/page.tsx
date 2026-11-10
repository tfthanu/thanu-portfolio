import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';
import { ResumeSection } from '@/components/resume';
import { Contact } from '@/components/contact';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <ResumeSection />
      <Contact />
    </main>
  );
}
