
import { useState, useEffect } from "react";
import { Navigation } from "@/components/marketing/Navigation";
import { Hero } from "@/components/marketing/Hero";
import { Portfolio } from "@/components/marketing/Portfolio";
import { About } from "@/components/marketing/About";
import { Contact } from "@/components/marketing/Contact";
import { ChevronUp } from "lucide-react";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDE1D3]/20 via-white to-[#E5DEFF]/20 relative">
      <Navigation />
      <Hero />
      {/* Enhanced gradient transitions */}
      <div className="h-32 bg-gradient-to-b from-[#FDE1D3]/30 via-[#E5DEFF]/20 to-transparent"></div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E5DEFF]/30 to-transparent pointer-events-none"></div>
        <Portfolio />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDE1D3]/30 to-transparent pointer-events-none"></div>
        <About />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E5DEFF]/10 to-[#FDE1D3]/5 pointer-events-none"></div>
        <Contact />
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#6E59A5]/90 hover:bg-[#6E59A5] text-white font-medium p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;
