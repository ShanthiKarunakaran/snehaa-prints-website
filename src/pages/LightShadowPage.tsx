import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LightShadowPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sections = [
    {
      title: "My Inspiration and Planning",
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
          image: "/lovable-uploads/43650de6-9576-4acf-9ca6-963e02645e32.png",
          title: "Light Study Series",
          description: "A series exploring different lighting conditions and their effects on everyday objects, from glass refraction to dramatic shadows"
        }
      ]
    },
    {
      title: "Final Series",
      content: [
        {
          image: "https://snehaarunphotographyii.weebly.com/uploads/1/4/8/4/148409862/glass_orig.jpg",
          title: "Glass Study",
          description: "A dramatic exploration of light refraction and shadow through glass, capturing the intricate patterns and textures"
        },
        {
          image: "https://snehaarunphotographyii.weebly.com/uploads/1/4/8/4/148409862/flower_orig.jpg",
          title: "Floral Shadow Study",
          description: "Delicate interplay of light and shadow across botanical forms, revealing texture and depth"
        },
        {
          image: "https://snehaarunphotographyii.weebly.com/uploads/1/4/8/4/148409862/shoe_orig.jpg",
          title: "Form Study",
          description: "Strong silhouette created through dramatic lighting, emphasizing shape and texture"
        },
        {
          image: "https://snehaarunphotographyii.weebly.com/uploads/1/4/8/4/148409862/chair-1-2_orig.jpg",
          title: "Chair Study",
          description: "Architectural exploration of light and shadow using everyday objects, highlighting form and structure"
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
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl font-dancing text-gray-800 leading-relaxed">
                  Light & Shadow
                </h1>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300"></div>
              </div>
              <p className="text-xl text-gray-600">
                An exploration of light and shadow in photography, examining how these elements 
                shape our perception of form, depth, and emotion in visual storytelling.
              </p>
            </div>

            {sections.map((section, index) => (
              <section key={section.title} className="space-y-8">
                <div className="relative inline-block">
                  <h2 className="text-4xl font-dancing text-gray-800 leading-relaxed">
                    {section.title}
                  </h2>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300"></div>
                </div>
                {section.title === "Final Series" ? (
                  <div className="relative">
                    <Carousel className="w-full max-w-4xl mx-auto">
                      <CarouselContent>
                        {section.content.map((item, i) => (
                          <CarouselItem key={i}>
                            <div className="space-y-4">
                              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100 relative">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="object-cover w-full h-full"
                                />
                                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90" />
                                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90" />
                              </div>
                              <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-800">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                ) : (
                  <div className={`grid grid-cols-1 ${
                    section.title === "My Inspiration and Planning" 
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
                          <h3 className="text-xl font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <section className="rounded-xl p-8 mt-12 border border-gray-200">
              <div className="relative inline-block">
                <h2 className="text-4xl font-dancing text-gray-800 leading-relaxed mb-4">
                  Project Reflection
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300"></div>
              </div>
              <p className="text-gray-600 mt-6">
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
