import { Button } from "@/components/ui/button";
import { Camera, Image, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden bg-gradient-to-br from-[#E5DEFF] via-[#FFDEE2] to-white">
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="flex items-center justify-center space-x-2">
            <Camera className="h-8 w-8 text-purple-600" />
            <span className="text-3xl font-bold text-purple-600">SnapJoy</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 animate-fadeIn">
            Capturing Life's <br />
            Beautiful Moments
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed animate-fadeIn">
            Hi! I'm Sarah, a teen photographer passionate about capturing the magic in everyday moments. 
            Let's create something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Portfolio
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] border-2 border-purple-200 bg-white hover:bg-purple-50 text-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book a Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};