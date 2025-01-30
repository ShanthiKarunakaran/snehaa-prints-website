import { Navigation } from "@/components/marketing/Navigation";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { Benefits } from "@/components/marketing/Benefits";
import { Contact } from "@/components/marketing/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <Contact />
    </div>
  );
};

export default Index;