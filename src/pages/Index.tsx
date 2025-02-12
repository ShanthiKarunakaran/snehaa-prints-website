
import { Navigation } from "@/components/marketing/Navigation";
import { Hero } from "@/components/marketing/Hero";
import { Portfolio } from "@/components/marketing/Portfolio";
import { About } from "@/components/marketing/About";
import { Contact } from "@/components/marketing/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      {/* Gradient transition div */}
      <div className="h-24 bg-gradient-to-b from-[#FDE1D3]/20 to-white"></div>
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
