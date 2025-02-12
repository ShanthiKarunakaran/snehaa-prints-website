
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Palette, Image, Sparkles, FileHeart, Book, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      internalUrl: "/technique/color-theory.html",
      category: "Technique Study"
    },
    {
      title: "Photomontage & Surrealism",
      description: "Creating dreamlike compositions through digital manipulation",
      icon: Sparkles,
      url: "https://snehaarunphotographyii.weebly.com/photomontage-and-surrealism.html",
      internalUrl: "/technique/photomontage.html",
      category: "Creative Projects"
    },
    {
      title: "Alternate Techniques",
      description: "Experimenting with unconventional photography methods",
      icon: Image,
      url: "https://snehaarunphotographyii.weebly.com/alternate-techniques.html",
      internalUrl: "/technique/alternate-techniques.html",
      category: "Creative Projects"
    },
    {
      title: "Choice Project",
      description: "Personal exploration and artistic freedom",
      icon: FileHeart,
      url: "https://snehaarunphotographyii.weebly.com/choice.html",
      internalUrl: "/projects/choice.html",
      category: "Personal Work"
    },
    {
      title: "Photomontage Journal",
      description: "Documentation and reflection on the photomontage process",
      icon: Book,
      url: "https://snehaarunphotographyii.weebly.com/photo-journal-photomontage.html",
      internalUrl: "/journals/photomontage.html",
      category: "Process Journals"
    },
    {
      title: "Alternate Techniques Journal",
      description: "Insights and learnings from experimental techniques",
      icon: Book,
      url: "https://snehaarunphotographyii.weebly.com/photo-journal-alternate-techniques.html",
      internalUrl: "/journals/alternate-techniques.html",
      category: "Process Journals"
    }
  ];

  const categories = ["Technique Study", "Creative Projects", "Personal Work", "Process Journals"];

  const ProjectList = ({ items }: { items: typeof projects }) => (
    <div className="space-y-6">
      {items.map((project) => (
        <div key={project.title} className="group">
          <div className="flex items-start justify-between space-x-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <Button
              onClick={() => navigate(project.internalUrl)}
              variant="outline"
              size="icon"
              className="rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <project.icon className="h-5 w-5 text-gray-700" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>
          
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <ProjectList items={projects.filter(p => p.category === category)} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
