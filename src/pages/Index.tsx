
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDE1D3]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#E5DEFF]/30 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#FDE1D3]/20 rounded-full blur-3xl translate-x-1/2" />
      
      {/* Moving blobs */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#E5DEFF]/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#FDE1D3]/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#E5DEFF]/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Geometric patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,#FDE1D3_12%,transparent_12.5%,transparent_87%,#FDE1D3_87.5%,#FDE1D3_0)] bg-[length:8px_8px] opacity-[0.15]" />
      
      {/* Content */}
      <div className="relative">
        <Navigation />
        <Hero />
        <Portfolio />
        <About />
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
