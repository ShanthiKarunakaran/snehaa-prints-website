
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
    <div className="min-h-screen bg-white relative">
      <Navigation />
      <Hero />
      {/* Gradient transition div */}
      <div className="h-24 bg-gradient-to-b from-[#FDE1D3]/20 to-white"></div>
      <Portfolio />
      <About />
      <Contact />
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
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
