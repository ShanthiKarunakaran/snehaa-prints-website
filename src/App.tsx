
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import LightShadowPage from "./pages/LightShadowPage";
import ColorTheoryPage from "./pages/ColorTheoryPage";
import PhotomontagePage from "./pages/PhotomontagePage";
import AlternateTechniquesPage from "./pages/AlternateTechniquesPage";
import ChoiceProjectPage from "./pages/ChoiceProjectPage";
import PhotomontageJournalPage from "./pages/PhotomontageJournalPage";
import AlternateTechniquesJournalPage from "./pages/AlternateTechniquesJournalPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about.html" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/technique/light-shadow.html" element={<LightShadowPage />} />
          <Route path="/technique/color-theory.html" element={<ColorTheoryPage />} />
          <Route path="/technique/photomontage.html" element={<PhotomontagePage />} />
          <Route path="/technique/alternate-techniques.html" element={<AlternateTechniquesPage />} />
          <Route path="/projects/choice.html" element={<ChoiceProjectPage />} />
          <Route path="/journals/photomontage.html" element={<PhotomontageJournalPage />} />
          <Route path="/journals/alternate-techniques.html" element={<AlternateTechniquesJournalPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
