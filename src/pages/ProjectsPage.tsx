
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
  
  const tabColors = {
    "Technique Study": "bg-[#D6BCFA] hover:bg-[#7E69AB]",
    "Creative Projects": "bg-[#FEC6A1] hover:bg-[#FDE1D3]",
    "Personal Work": "bg-[#D3E4FD] hover:bg-[#E5DEFF]",
    "Process Journals": "bg-[#FFDEE2] hover:bg-[#FDE1D3]"
  };

  const ProjectList = ({ items }: { items: typeof projects }) => (
    <div className="space-y-6">
      {items.map((project) => (
        <div key={project.title} className="group border-b border-yellow-600/20 pb-6 last:border-0">
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
              className="rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors border-yellow-200"
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
          
          <div className="bg-[#FEF7CD] rounded-lg shadow-lg p-6 border border-yellow-200">
            <Tabs defaultValue={categories[0]} className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className={`${tabColors[category as keyof typeof tabColors]} 
                    text-gray-700 data-[state=active]:brightness-110 
                    data-[state=active]:shadow-lg transition-all 
                    rounded-t-lg rounded-b-none border-b-4 border-yellow-400/50
                    h-12 font-medium relative
                    data-[state=active]:translate-y-[-4px]
                    data-[state=active]:border-b-[6px]
                    data-[state=active]:font-bold
                    data-[state=active]:text-gray-900
                    data-[state=active]:z-10`}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="bg-white rounded-lg p-6 shadow-inner">
                {categories.map((category) => (
                  <TabsContent key={category} value={category}>
                    <ProjectList items={projects.filter(p => p.category === category)} />
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
