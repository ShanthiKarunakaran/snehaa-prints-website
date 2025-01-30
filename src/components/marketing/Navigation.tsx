import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-green-600">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-semibold">Green Haven</span>
          </div>
          
          <button
            className="md:hidden text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors">
              Products
            </a>
            <a href="#workshops" className="text-gray-600 hover:text-green-600 transition-colors">
              Workshops
            </a>
            <a href="#community" className="text-gray-600 hover:text-green-600 transition-colors">
              Community
            </a>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <div className="flex flex-col space-y-4 p-6">
                <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors">
                  Products
                </a>
                <a href="#workshops" className="text-gray-600 hover:text-green-600 transition-colors">
                  Workshops
                </a>
                <a href="#community" className="text-gray-600 hover:text-green-600 transition-colors">
                  Community
                </a>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};