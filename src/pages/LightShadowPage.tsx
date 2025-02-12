
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LightShadowPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: "Natural Light Study",
      description: "Exploring how natural light creates depth and dimension",
      image: "https://images.unsplash.com/photo-1617369120004-4fc70312c5e6"
    },
    {
      title: "Shadow Play",
      description: "Experimenting with cast shadows and geometric patterns",
      image: "https://images.unsplash.com/photo-1504610926078-a1611febcad3"
    },
    {
      title: "Contrast Study",
      description: "High contrast photography emphasizing light and dark",
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b"
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
                  href="https://snehaarunphotographyii.weebly.com/light-and-shadow.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800"
                >
                  View Original Project <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Light & Shadow
              </h1>
              <p className="text-xl text-gray-600">
                An exploration of the fundamental elements of photography: the interplay between light and shadow. 
                This study focuses on how these elements create depth, mood, and visual interest in photographic composition.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                <p className="text-gray-600">
                  This project explores the dramatic impact of light and shadow in photography. Through various techniques 
                  and experiments, I investigate how different lighting conditions can transform ordinary subjects into 
                  compelling visual narratives.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Key Techniques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Natural Light</h3>
                    <p className="text-gray-600">Working with available light to create natural shadows and highlights</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Contrast Control</h3>
                    <p className="text-gray-600">Managing exposure to enhance the interplay between light and dark</p>
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
                    <p className="text-gray-600 ml-2">Understanding how different times of day affect light quality and shadow formation</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Mastering exposure techniques to capture the full range of tones</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Developing an eye for compositional balance using light and shadow</p>
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

export default LightShadowPage;
