
import { Navigation } from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AlternateTechniquesJournalPage = () => {
  const navigate = useNavigate();

  const entries = [
    {
      title: "Technique Exploration",
      description: "Documenting experiments with alternative processes",
      image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81"
    },
    {
      title: "Learning Process",
      description: "Recording challenges and breakthroughs",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d"
    },
    {
      title: "Results Analysis",
      description: "Evaluating outcomes of different techniques",
      image: "https://images.unsplash.com/photo-1523297467724-f6758d7124c5"
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
                  href="https://snehaarunphotographyii.weebly.com/photo-journal-alternate-techniques.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800"
                >
                  View Original Journal <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Alternate Techniques Journal
              </h1>
              <p className="text-xl text-gray-600">
                A comprehensive record of experiments, learnings, and reflections while exploring unconventional 
                photographic techniques.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Journal Overview</h2>
                <p className="text-gray-600">
                  This journal documents the exploration of alternative photographic techniques, recording both 
                  successes and failures, and tracking the development of new skills and understanding.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Key Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Technical Notes</h3>
                    <p className="text-gray-600">Detailed documentation of processes and methods</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Experimental Results</h3>
                    <p className="text-gray-600">Analysis of outcomes and lessons learned</p>
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
                    <p className="text-gray-600 ml-2">Documenting experimental processes and results</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Learning from both successes and failures</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 ml-2">Building a reference for future experimentation</p>
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

export default AlternateTechniquesJournalPage;
