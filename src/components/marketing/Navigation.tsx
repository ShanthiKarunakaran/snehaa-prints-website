import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">Brand</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-gray-600 transition-colors">
              Features
            </a>
            <a href="#benefits" className="hover:text-gray-600 transition-colors">
              Benefits
            </a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
            <Button
              variant="outline"
              className="bg-white/90 hover:bg-white transition-colors"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};