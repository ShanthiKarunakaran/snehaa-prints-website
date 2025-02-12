
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
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden bg-gradient-to-br from-[#e2d1c3] via-[#FDE1D3] to-white">
      {/* Vintage floating orbs */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-[#FDE1D3] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#D3E4FD] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#FEC6A1] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Additional ethereal elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGZpbHRlciBpZD0iYSI+PGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VHcmFwaGljIiBzdGREZXZpYXRpb249IjIiLz48L2ZpbHRlcj48L2RlZnM+PGcgb3BhY2l0eT0iLjEiIGZpbHRlcj0idXJsKCNhKSI+PGNpcmNsZSBjeD0iNzIwIiBjeT0iMzc1IiByPSI0MCIvPjxjaXJjbGUgY3g9IjY4MCIgY3k9IjM3NSIgcj0iNDAiLz48Y2lyY2xlIGN4PSI2NDAiIGN5PSIzNzUiIHI9IjQwIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center">
              <div className="absolute w-3 h-3 bg-[#8E9196] rounded-full top-4 left-4"></div>
              <div className="absolute w-4 h-4 border-2 border-[#8E9196] rounded-full top-4 right-3"></div>
              <div className="absolute w-2 h-1 bg-[#8E9196] transform rotate-[15deg] top-8 left-7"></div>
            </div>
            <span className="text-3xl font-bold text-[#8E9196]">snehaa.prints</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 animate-fadeIn">
            Capture the Unseen
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed animate-fadeIn">
            Hi! I'm Sarah, a teen photographer with a passion for capturing the stories that lies beyond the visible through my lens. 
            Let's preserve those ethereal moments together!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] bg-[#8E9196] hover:bg-[#aaadb0] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToPortfolio}
            >
              View Portfolio
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] border-2 border-[#FDE1D3] bg-white/80 hover:bg-[#FDE1D3]/10 text-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book a Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
