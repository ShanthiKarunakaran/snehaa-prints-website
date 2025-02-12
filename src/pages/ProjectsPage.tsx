import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Palette, Image, Sparkles, FileHeart, Book, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Light & Shadow",
      description: "Exploring the interplay of light and darkness in photography",
      icon: Lightbulb,
      url: "https://snehaarunphotographyii.weebly.com/light-and-shadow.html",
      internalUrl: "/technique/light-shadow.html",
      category: "Technique Study"
    },
    {
      title: "Color Theory",
      description: "Understanding and applying color principles in photography",
      icon: Palette,
      url: "https://snehaarunphotographyii.weebly.com/color-theory.html",
      category: "Technique Study"
    },
    {
      title: "Photomontage & Surrealism",
      description: "Creating dreamlike compositions through digital manipulation",
      icon: Sparkles,
      url: "https://snehaarunphotographyii.weebly.com/photomontage-and-surrealism.html",
      category: "Creative Projects"
    },
    {
      title: "Alternate Techniques",
      description: "Experimenting with unconventional photography methods",
      icon: Image,
      url: "https://snehaarunphotographyii.weebly.com/alternate-techniques.html",
      category: "Creative Projects"
    },
    {
      title: "Choice Project",
      description: "Personal exploration and artistic freedom",
      icon: FileHeart,
      url: "https://snehaarunphotographyii.weebly.com/choice.html",
      category: "Personal Work"
    },
    {
      title: "Photomontage Journal",
      description: "Documentation and reflection on the photomontage process",
      icon: Book,
      url: "https://snehaarunphotographyii.weebly.com/photo-journal-photomontage.html",
      category: "Process Journals"
    },
    {
      title: "Alternate Techniques Journal",
      description: "Insights and learnings from experimental techniques",
      icon: Book,
      url: "https://snehaarunphotographyii.weebly.com/photo-journal-alternate-techniques.html",
      category: "Process Journals"
    }
  ];

  const categories = Array.from(new Set(projects.map(project => project.category)));

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <Button 
              onClick={() => navigate("/")} 
              variant="ghost" 
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            
            <div className="space-y-6">
              <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full inline-block">
                Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Projects & Process
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Explore my photographic journey through various projects, techniques, and creative explorations. 
                Each category represents a different aspect of my development as a photographer.
              </p>
            </div>

            {categories.map((category) => (
              <div key={category} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter(project => project.category === category)
                    .map((project) => (
                      <div key={project.title} className="group relative overflow-hidden rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-200">
                        <div className="flex items-start justify-between">
                          <div className="space-y-3">
                            <project.icon className="h-8 w-8 text-purple-600" />
                            <div className="space-y-2">
                              <h3 className="text-xl font-semibold text-gray-900">
                                {project.title}
                              </h3>
                              <p className="text-gray-600">{project.description}</p>
                              <div className="flex items-center space-x-4 pt-2">
                                {project.internalUrl && (
                                  <a
                                    href={project.internalUrl}
                                    className="text-sm text-purple-600 hover:text-purple-800 inline-flex items-center"
                                  >
                                    View Details
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </a>
                                )}
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-gray-500 hover:text-gray-700 inline-flex items-center"
                                >
                                  Original Project <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
