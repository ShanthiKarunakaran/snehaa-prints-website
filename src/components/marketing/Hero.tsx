import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
          <span className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-800 rounded-full inline-block shadow-sm animate-fadeIn">
            Introducing Our Product
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fadeIn">
            Transform Your Experience
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed animate-fadeIn">
            Discover a new way to enhance your daily workflow with our innovative solution. 
            We're revolutionizing how you interact with technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] border-2 bg-white/90 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
