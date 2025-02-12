
import { Button } from "@/components/ui/button";
import { Camera, Image, Heart } from "lucide-react";

export const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508796079212-a4b83cbf734d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dreamy overlay */}
        <div className="absolute inset-0 bg-[#FDE1D3]/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <div className="absolute w-3 h-3 bg-[#8E9196] rounded-full top-4 left-4"></div>
              <div className="absolute w-4 h-4 border-2 border-[#8E9196] rounded-full top-4 right-3"></div>
              <div className="absolute w-2 h-1 bg-[#8E9196] transform rotate-[15deg] top-8 left-7"></div>
            </div>
            <span className="text-3xl font-bold text-white drop-shadow-md">snehaa.prints</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md animate-fadeIn">
            Capture the Unseen
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed animate-fadeIn drop-shadow-md">
            Hi! I'm Sarah, a teen photographer with a passion for capturing the stories that lies beyond the visible through my lens. 
            Let's preserve those ethereal moments together!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] bg-[#FDE1D3] hover:bg-[#F8D1C1] text-[#8E9196] shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm font-medium"
              onClick={scrollToPortfolio}
            >
              View Portfolio
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] border-2 border-[#FDE1D3] bg-transparent hover:bg-[#FDE1D3]/20 text-white shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              Book a Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
