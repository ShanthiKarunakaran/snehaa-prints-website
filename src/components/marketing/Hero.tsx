import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EDF2FF] to-white">
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
          <span className="px-3 py-1 text-sm font-semibold bg-blue-50 text-blue-700 rounded-full inline-block shadow-sm animate-fadeIn">
            Introducing Our Product
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-800 animate-fadeIn">
            Transform Your Experience
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-600/80 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed animate-fadeIn">
            Discover a new way to enhance your daily workflow with our innovative solution. 
            We're revolutionizing how you interact with technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] border-2 border-blue-200 bg-white hover:bg-blue-50 text-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};