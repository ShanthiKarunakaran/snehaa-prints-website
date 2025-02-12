
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, ChevronDown, Instagram, Facebook, Twitter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const photographyCategories = [
    { label: "Portraits", href: "#portfolio?category=portraits" },
    { label: "Nature", href: "#portfolio?category=nature" },
    { label: "Still Life", href: "#portfolio?category=still-life" },
    { label: "Photoshoots", href: "#portfolio?category=photoshoots" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center space-x-2 text-white">
            <Camera className="h-6 w-6" />
            <span className="text-xl font-semibold">SnapJoy</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-white/80 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors px-3 py-1 focus:outline-none">
                  <span>Photography</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white">
                  {photographyCategories.map((category) => (
                    <DropdownMenuItem key={category.label} className="cursor-pointer focus:outline-none">
                      <a
                        href={category.href}
                        className="w-full text-gray-600 hover:text-black focus:outline-none"
                      >
                        {category.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="w-px h-4 bg-white/20 mx-2"></div>
              <a href="#about" className="text-white hover:text-white/80 transition-colors px-3 py-1 focus:outline-none">
                About Me
              </a>
              <div className="w-px h-4 bg-white/20 mx-2"></div>
              <a href="#testimonials" className="text-white hover:text-white/80 transition-colors px-3 py-1 focus:outline-none">
                Testimonials
              </a>
              <div className="w-px h-4 bg-white/20 mx-2"></div>
              <a href="#contact" className="text-white hover:text-white/80 transition-colors px-3 py-1 focus:outline-none">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4 mr-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors focus:outline-none">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors focus:outline-none">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors focus:outline-none">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Book a Session button on the right */}
          <Button
            className="hidden md:inline-flex bg-white hover:bg-white/90 text-black shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm font-medium focus:outline-none"
          >
            Book a Session
          </Button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg shadow-lg md:hidden">
              <div className="flex flex-col space-y-4 p-6">
                {photographyCategories.map((category) => (
                  <a
                    key={category.label}
                    href={category.href}
                    className="text-white hover:text-white/80 transition-colors px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none"
                  >
                    {category.label}
                  </a>
                ))}
                <a href="#about" className="text-white hover:text-white/80 transition-colors px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none">
                  About Me
                </a>
                <a href="#testimonials" className="text-white hover:text-white/80 transition-colors px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none">
                  Testimonials
                </a>
                <a href="#contact" className="text-white hover:text-white/80 transition-colors px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none">
                  Contact
                </a>
                {/* Social Links in mobile menu */}
                <div className="flex justify-center space-x-6 py-2">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors focus:outline-none">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors focus:outline-none">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors focus:outline-none">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
                <Button
                  className="bg-white hover:bg-white/90 text-black shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm font-medium w-full focus:outline-none"
                >
                  Book a Session
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
