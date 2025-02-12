
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ColorTheoryPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: "Complementary Colors",
      description: "Exploring the impact of opposing colors in composition",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab"
    },
    {
      title: "Color Temperature",
      description: "Understanding warm and cool tones in photography",
      image: "https://images.unsplash.com/photo-1507908708918-778587c9e563"
    },
    {
      title: "Color Harmony",
      description: "Creating balanced and visually pleasing color combinations",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Button 
              onClick={() => navigate("/projects")} 
              variant="ghost" 
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
                  Technique Study
                </span>
                <a 
                  href="https://snehaarunphotographyii.weebly.com/color-theory.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800"
                >
                  View Original Project <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Color Theory
              </h1>
              <p className="text-xl text-gray-600">
                A deep dive into the principles of color in photography, exploring how different color relationships 
                can create mood, direct attention, and enhance visual storytelling.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                <p className="text-gray-600">
                  This project explores the fundamental principles of color theory and their application in photography. 
                  Through careful study and experimentation, I investigate how different color combinations and relationships 
                  can be used to create powerful visual narratives.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Key Concepts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Color Relationships</h3>
                    <p className="text-gray-600">Understanding complementary, analogous, and triadic color schemes</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Emotional Impact</h3>
                    <p className="text-gray-600">Exploring how different colors evoke specific emotional responses</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Example Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {examples.map((example, index) => (
                    <div key={index} className="group relative">
                      <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                        <img 
                          src={example.image} 
                          alt={example.title}
                          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
                        <p className="text-sm text-gray-600">{example.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Learning Outcomes</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Mastering the use of color wheels and color relationships in composition</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Understanding how to use color to guide viewer attention</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Developing sensitivity to subtle color variations and their impact</p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorTheoryPage;
