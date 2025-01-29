import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fadeIn">
          <span className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full inline-block">
            Introducing Our Product
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Transform Your Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a new way to enhance your daily workflow with our innovative solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="min-w-[160px]">
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[160px] bg-white/90 hover:bg-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};