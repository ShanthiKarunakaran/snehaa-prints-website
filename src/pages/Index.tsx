
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
    <div className="min-h-screen bg-gradient-to-b from-[#FDE1D3]/10 to-white relative">
      <Navigation />
      <Hero />
      {/* Gradient transition div */}
      <div className="h-24 bg-gradient-to-b from-[#FDE1D3]/20 via-[#E5DEFF]/20 to-white"></div>
      <div className="bg-gradient-to-b from-white via-[#E5DEFF]/10 to-white">
        <Portfolio />
      </div>
      <div className="bg-gradient-to-b from-white via-[#FDE1D3]/10 to-white">
        <About />
      </div>
      <div className="bg-[#E5DEFF]/5">
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
