
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AlternateTechniquesPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: "Multiple Exposure",
      description: "Creating layered images through multiple exposures",
      image: "https://images.unsplash.com/photo-1550686041-366ad85a1355"
    },
    {
      title: "Long Exposure",
      description: "Capturing motion and time in single frames",
      image: "https://images.unsplash.com/photo-1516035645781-9f126e774e9e"
    },
    {
      title: "Experimental Processing",
      description: "Exploring unconventional development techniques",
      image: "https://images.unsplash.com/photo-1533158307587-828f0a76ef46"
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
                  href="https://snehaarunphotographyii.weebly.com/alternate-techniques.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800"
                >
                  View Original Project <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Alternate Techniques
              </h1>
              <p className="text-xl text-gray-600">
                Exploring unconventional photography methods to create unique and expressive images through experimental processes.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                <p className="text-gray-600">
                  This project ventures beyond traditional photography techniques, experimenting with alternative methods 
                  to create unique visual expressions. Through various experimental processes, I explore new ways of 
                  capturing and presenting photographic imagery.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Key Techniques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Alternative Processing</h3>
                    <p className="text-gray-600">Exploring non-traditional development and printing methods</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Experimental Exposure</h3>
                    <p className="text-gray-600">Using unconventional exposure techniques to create unique effects</p>
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
                    <p className="text-gray-600 ml-2">Understanding and applying alternative photographic processes</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Developing creative approaches to image-making</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Pushing the boundaries of traditional photography</p>
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

export default AlternateTechniquesPage;
