
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Button 
              onClick={() => navigate("/")} 
              variant="ghost" 
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            
            <div className="space-y-6">
              <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full inline-block">
                About Me
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Hi, I'm Sarah!
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600">
                  I'm a 17-year-old photographer with a passion for capturing life's magical moments. 
                  My journey in photography began three years ago when I got my first camera, 
                  and since then, I've fallen in love with the art of visual storytelling.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <Camera className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="font-semibold mb-2">My Expertise</h3>
                    <p className="text-gray-600">Specializing in portraits and nature photography, bringing out the beauty in every subject.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <Heart className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="font-semibold mb-2">My Passion</h3>
                    <p className="text-gray-600">Dedicated to capturing authentic moments and creating timeless memories.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <Star className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="font-semibold mb-2">Recognition</h3>
                    <p className="text-gray-600">Award-winning youth photographer 2023, recognized for creative excellence.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Artist Statement</h2>
                <blockquote className="text-gray-600 border-l-4 border-purple-200 pl-6 italic">
                  "Through my lens, I seek to capture the raw emotions and untold stories that surround us every day. 
                  As a young artist, I bring a fresh perspective to photography, blending modern techniques with timeless storytelling. 
                  My work focuses on finding beauty in ordinary moments and transforming them into extraordinary memories.
                  Each photograph is a piece of my heart, reflecting both the subject's authenticity and my creative vision."
                </blockquote>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">My Journey</h2>
                <p className="text-gray-600">
                  What started as a hobby has blossomed into a true passion. I've spent countless hours perfecting my craft,
                  learning from experienced photographers, and developing my unique style. My goal is to not just take pictures,
                  but to tell stories that resonate with people's hearts.
                </p>
                <p className="text-gray-600">
                  I believe that every person, every moment, and every scene has a story worth telling. Through my photography,
                  I strive to capture these stories in their most authentic form. Whether it's a candid portrait, a breathtaking
                  landscape, or a quiet moment in nature, I approach each shot with creativity and passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
