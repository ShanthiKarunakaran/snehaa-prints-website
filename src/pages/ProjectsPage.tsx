
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
      description: