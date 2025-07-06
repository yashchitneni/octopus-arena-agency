
import HeroSection from '@/components/HeroSection';
import WhyWeShowedUp from '@/components/WhyWeShowedUp';
import PhilosophySection from '@/components/PhilosophySection';
import SymbolSection from '@/components/SymbolSection';
import ToolsSection from '@/components/ToolsSection';
import WhatsNextSection from '@/components/WhatsNextSection';

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyWeShowedUp />
      <PhilosophySection />
      <SymbolSection />
      <ToolsSection />
      <WhatsNextSection />
    </div>
  );
};

export default Index;
