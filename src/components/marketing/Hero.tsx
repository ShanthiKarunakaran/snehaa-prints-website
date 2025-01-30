import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden bg-gradient-to-br from-[#F2FCE2] via-[#FEF7CD] to-white">
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="flex items-center justify-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-3xl font-bold text-green-600">Green Haven</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 animate-fadeIn">
            Nurturing Nature, <br />
            One Plant at a Time
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed animate-fadeIn">
            Join our community of plant enthusiasts and discover the joy of sustainable plant care. 
            From beginners to experts, we're here to help your green friends thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] border-2 border-green-200 bg-white hover:bg-green-50 text-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Join Workshop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};