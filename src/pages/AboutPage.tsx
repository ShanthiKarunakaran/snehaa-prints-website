
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
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Exploration</h3>
                    <p className="text-gray-600">
                      Throughout the semester, I discovered that I took better pictures when I brainstormed thoroughly and relied less on Lightroom for editing. When brainstorming, the mind map always worked the best when I was developing an idea, because I was able to dive deeper into the process of taking a creative picture once I had many ideas written down in front of me. For example, I had a detailed mind map for the alternative techniques project, and though I did not end up using some of my original ideas, I created new, even better pictures by combining the ideas I had written down in my map. I enjoyed using Lightroom, but I found that my pictures looked better and more natural when I did not heavily edit the picture. I like that my pictures look slightly imperfect when I do not heavily edit them; I believe it adds to the character of the picture, as seen with my picture of the egg for the choice project. I could have increased the exposure of the picture so that the egg was clearly visible, but it is more interesting that half of the egg is shrouded in shadow.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Voice</h3>
                    <p className="text-gray-600">
                      I enjoyed focusing on portrait lighting for the photomontage project and photo journal, particularly because I loved having people "model" for me. One of the best parts of my final photomontage series is the portraits themselves, because I was able to convey a different emotion based on the lighting. It was also fun to take pictures focusing on light and shadow, because I have always found the use of shadows in pictures very intriguing. In the final series, I focused on GOBOS and the shadows of objects themselves, and I appreciate that these techniques helped bring out the theme of the series.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Growth</h3>
                    <p className="text-gray-600">
                      I experienced the most growth in the photomontage project by improving my Photoshop skills. Last semester, I didn't enjoy Photoshop, because I did not spend enough time trying to learn its features and experiment with different pictures. However, this semester, I put several hours into using Photoshop, experimenting with several tools that ultimately made my pictures look more realistic. My portraits also improved, as compared to last semester, because I took more creative risks and experimented thoroughly with different lighting techniques before choosing ones that would convey the theme of the series well.
                    </p>
                  </div>
                </div>

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
