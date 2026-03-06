import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useSectionFade } from './hooks/useSectionFade';

const sectionIds = ['home', 'about', 'tech-stack', 'projects', 'contact'];

function SectionDivider() {
  return (
    <div className="h-32 md:h-48 lg:h-64" />
  );
}

export function App() {
  const activeSection = useScrollSpy(sectionIds);
  useSectionFade();

  return (
    <div className="relative min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Side decorative elements */}
      <SideDecoration />

      <Navbar activeSection={activeSection} />
      <HeroSection />

      {/* Section spacing wrapper */}
      <div className="mt-40 md:mt-64 lg:mt-80">
        <AboutSection />
        
        <SectionDivider />
        <SkillsSection />
        
        <SectionDivider />
        <ProjectsSection />
        
        <SectionDivider />
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
}

function SideDecoration() {
  return (
    <>
      {/* Left side line */}
      <div className="fixed left-6 top-0 bottom-0 z-[100] hidden lg:flex flex-col items-center pointer-events-none">
        <div className="flex-1 w-[1px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,0,51,0.08) 30%, rgba(255,0,51,0.08) 70%, transparent)' }} />
      </div>

      {/* Right side – email */}
      <div className="fixed right-6 bottom-0 z-[100] hidden lg:flex flex-col items-center gap-4 pointer-events-auto">
        <a
          href="mailto:hello@kael.dev"
          className="font-mono text-[0.6rem] tracking-[0.15em] no-underline hover:text-[#ff0033] transition-colors"
          style={{
            writingMode: 'vertical-rl',
            color: 'rgba(180,180,180,0.2)',
          }}
        >
          hello@kael.dev
        </a>
        <div className="w-[1px] h-24" style={{ background: 'rgba(255,0,51,0.15)' }} />
      </div>
    </>
  );
}
