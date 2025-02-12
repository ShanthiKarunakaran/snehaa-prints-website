
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LightShadowPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Inspiration and Planning",
      content: [
        {
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
          title: "Initial Research",
          description: "Exploring the fundamentals of light behavior and shadow formation in photography"
        },
        {
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
          title: "Concept Development",
          description: "Sketching ideas and planning shot compositions"
        },
        {
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
          title: "Reference Collection",
          description: "Gathering inspiring works and technical references"
        }
      ]
    },
    {
      title: "Process",
      content: [
        {
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
          title: "Technical Exploration",
          description: "Testing different lighting setups and techniques"
        },
        {
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          title: "Experimentation",
          description: "Working with various subjects and lighting conditions"
        },
        {
          image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
          title: "Refinement",
          description: "Fine-tuning compositions and exposure settings"
        }
      ]
    },
    {
      title: "Final Series",
      content: [
        {
          image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
          title: "Natural Light Study",
          description: "Capturing the interplay of sunlight and shadows in nature"
        },
        {
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
          title: "Contrast Study",
          description: "Exploring dramatic light and shadow contrasts"
        },
        {
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
          title: "Environmental Portrait",
          description: "Using natural light to create compelling portraits"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
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
                An exploration of light and shadow in photography, examining how these elements 
                shape our perception of form, depth, and emotion in visual storytelling.
              </p>
            </div>

            {sections.map((section, index) => (
              <section key={section.title} className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.content.map((item, i) => (
                    <div key={i} className="group space-y-4">
                      <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <section className="bg-purple-50 rounded-xl p-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Reflection</h2>
              <p className="text-gray-600">
                This exploration of light and shadow has deepened my understanding of how these 
                fundamental elements can be used to create compelling photographs. Through careful 
                observation and experimentation, I've learned to harness natural light and manipulate 
                shadows to enhance the emotional impact of my images.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightShadowPage;
