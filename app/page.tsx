import { AboutSection } from '@/components/AboutSection';
import { BackToTop } from '@/components/BackToTop';
import { ContactSection } from '@/components/ContactSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { MetricsSection } from '@/components/MetricsSection';
import { Navbar } from '@/components/Navbar';
import { ProcessSection } from '@/components/ProcessSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-black">
      <div className="pointer-events-none absolute inset-0 -z-10 animate-[pulse_5s_ease-in-out_infinite] bg-[radial-gradient(circle_at_10%_10%,rgba(0,0,0,0.04),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(0,0,0,0.03),transparent_28%),radial-gradient(circle_at_40%_90%,rgba(0,0,0,0.03),transparent_30%)]" />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ExpertiseSection />
      <MetricsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
