
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PhotomontagePage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: "Dream Sequence",
      description: "Blending multiple images to create surreal dreamscapes",
      image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d"
    },
    {
      title: "Reality Distortion",
      description: "Manipulating perspective and scale for artistic effect",
      image: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e"
    },
    {
      title: "Symbolic Composition",
      description: "Creating metaphorical imagery through combined elements",
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07"
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
                  Creative Projects
                </span>
                <a 
                  href="https://snehaarunphotographyii.weebly.com/photomontage-and-surrealism.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800"
                >
                  View Original Project <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Photomontage & Surrealism
              </h1>
              <p className="text-xl text-gray-600">
                An exploration of digital manipulation techniques to create surreal, dreamlike imagery 
                by combining multiple photographs into single, cohesive compositions.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                <p className="text-gray-600">
                  This project delves into the world of surreal photography through digital photomontage techniques. 
                  By combining multiple images and manipulating visual elements, I create dreamlike scenes that 
                  challenge reality and spark imagination.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Key Techniques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Layer Blending</h3>
                    <p className="text-gray-600">Seamlessly combining multiple images using advanced blending modes</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Digital Manipulation</h3>
                    <p className="text-gray-600">Using digital tools to alter scale, perspective, and reality</p>
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
                    <p className="text-gray-600 ml-2">Mastering advanced digital manipulation techniques</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Understanding how to create cohesive compositions from multiple sources</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Developing a unique artistic vision through surreal imagery</p>
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

export default PhotomontagePage;
