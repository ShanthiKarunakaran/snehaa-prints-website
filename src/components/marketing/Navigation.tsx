
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, ChevronDown } from "lucide-react";
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
          <div className="flex items-center space-x-2 text-purple-600">
            <Camera className="h-6 w-6" />
            <span className="text-xl font-semibold">SnapJoy</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-purple-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-2 bg-purple-50/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors px-3 py-1">
                  <span>Photography</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white">
                  {photographyCategories.map((category) => (
                    <DropdownMenuItem key={category.label} className="cursor-pointer">
                      <a
                        href={category.href}
                        className="w-full text-gray-600 hover:text-purple-600"
                      >
                        {category.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="w-px h-4 bg-purple-200 mx-2"></div>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-1">
                About Me
              </a>
              <div className="w-px h-4 bg-purple-200 mx-2"></div>
              <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-1">
                Testimonials
              </a>
              <div className="w-px h-4 bg-purple-200 mx-2"></div>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors px-3 py-1">
                Contact
              </a>
            </div>
          </div>

          {/* Book a Session button on the right */}
          <Button
            className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white"
          >
            Book a Session
          </Button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <div className="flex flex-col space-y-4 p-6">
                {photographyCategories.map((category) => (
                  <a
                    key={category.label}
                    href={category.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100"
                  >
                    {category.label}
                  </a>
                ))}
                <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100">
                  About Me
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100">
                  Testimonials
                </a>
                <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100">
                  Contact
                </a>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full"
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
