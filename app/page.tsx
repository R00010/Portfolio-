import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { MetricsSection } from '@/components/MetricsSection';
import { Navbar } from '@/components/Navbar';
import { ProcessSection } from '@/components/ProcessSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
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
    </main>
  );
}
