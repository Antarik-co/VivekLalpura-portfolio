import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { SoftwareExpertiseSection } from './sections/SoftwareExpertiseSection';
import { WorkSection } from './sections/WorkSection';
import { FAQSection } from './sections/FAQSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <main className="main-wrapper font-sans w-full min-h-screen bg-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SoftwareExpertiseSection />
      <WorkSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}

export default App;
