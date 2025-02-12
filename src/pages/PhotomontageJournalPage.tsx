
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PhotomontageJournalPage = () => {
  const navigate = useNavigate();

  const entries = [
    {
      title: "Process Documentation",
      description: "Recording the steps and decisions in creating photomontages",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db"
    },
    {
      title: "Technical Experiments",
      description: "Testing different approaches to digital manipulation",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
    },
    {
      title: "Creative Development",
      description: "Exploring artistic growth through journal entries",
      image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47"
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
                  Process Journals
                </span>
                <a 
                  href="https://snehaarunphotographyii.weebly.com/photo-journal-photomontage.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800"
                >
                  View Original Journal <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Photomontage Journal
              </h1>
              <p className="text-xl text-gray-600">
                A detailed documentation of the creative process, technical experiments, and artistic development 
                throughout the photomontage project.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Journal Overview</h2>
                <p className="text-gray-600">
                  This journal chronicles the journey of creating photomontage works, documenting the technical 
                  processes, creative decisions, and artistic growth throughout the project.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Key Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Process Documentation</h3>
                    <p className="text-gray-600">Recording steps, techniques, and decision-making</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Reflection</h3>
                    <p className="text-gray-600">Analyzing outcomes and learning from experiences</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Journal Entries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {entries.map((entry, index) => (
                    <div key={index} className="group relative">
                      <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                        <img 
                          src={entry.image} 
                          alt={entry.title}
                          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-900">{entry.title}</h3>
                        <p className="text-sm text-gray-600">{entry.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Insights Gained</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Understanding the importance of process documentation</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Developing critical reflection skills</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Tracking artistic growth and technical progress</p>
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

export default PhotomontageJournalPage;
