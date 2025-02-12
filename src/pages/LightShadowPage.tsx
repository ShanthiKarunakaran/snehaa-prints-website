import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const LightShadowPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sections = [
    {
      title: "Inspiration and Planning",
      content: [
        {
          image: "/lovable-uploads/08ec1540-42e1-4ff2-9534-68cc8c434e35.png",
          title: "Initial Project Planning",
          description: "Early concept sketches exploring different angles and lighting scenarios for shadow photography"
        },
        {
          image: "/lovable-uploads/01676206-84f8-4cb6-98d7-821358391ac2.png",
          title: "Shadow Study Plans",
          description: "Detailed planning diagrams showing different approaches to capturing shadows, including front and side angles"
        }
      ]
    },
    {
      title: "Reference Collection",
      content: [
        {
          image: "/lovable-uploads/953dd445-a3fe-4982-b178-0b131d025328.png",
          title: "Wheel Shadow Study",
          description: "A dramatic composition of a wheel creating intricate shadow patterns on snow"
        },
        {
          image: "/lovable-uploads/5194d17a-8765-485b-b33b-7c317205b8b7.png",
          title: "Minimalist Light Study",
          description: "Simple yet powerful study of light and shadow using an egg"
        },
        {
          image: "/lovable-uploads/862806f6-f0e1-4c65-a86e-fada6720770f.png",
          title: "Glass Refraction",
          description: "Exploring light patterns and shadows created through glass"
        },
        {
          image: "/lovable-uploads/90262c81-a969-4f0d-8799-d74bd4754c41.png",
          title: "Rustic Shadows",
          description: "Study of multiple objects creating overlapping shadow patterns"
        },
        {
          image: "/lovable-uploads/5d08a590-e4d5-4528-aa39-6fb6ab28a672.png",
          title: "Natural Light Patterns",
          description: "Tree canopy creating intricate shadow patterns on the ground"
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
          <div className="max-w-6xl mx-auto space-y-12">
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
                <div className={`grid grid-cols-1 ${
                  section.title === "Inspiration and Planning" 
                    ? "md:grid-cols-2" 
                    : section.title === "Reference Collection"
                    ? "md:grid-cols-3 lg:grid-cols-5"
                    : "md:grid-cols-3"
                } gap-6`}>
                  {section.content.map((item, i) => (
                    <div key={i} className="group space-y-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100 cursor-pointer">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-screen-lg w-[90vw]">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-auto object-contain max-h-[80vh]"
                          />
                        </DialogContent>
                      </Dialog>
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
