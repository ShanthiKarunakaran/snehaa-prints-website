import { Camera, Heart, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full inline-block">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Hi, I'm Sarah!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                I'm a 17-year-old photographer with a passion for capturing life's magical moments. 
                My journey in photography began three years ago when I got my first camera, 
                and since then, I've fallen in love with the art of visual storytelling.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Specializing in portraits and nature photography</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Passionate about capturing authentic moments</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Award-winning youth photographer 2023</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Sarah - Teen Photographer"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-purple-100 rounded-lg p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};