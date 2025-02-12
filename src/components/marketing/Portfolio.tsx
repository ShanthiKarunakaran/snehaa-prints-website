
import { GalleryHorizontal, Camera } from "lucide-react";

export const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: "Editorial",
      title: "Summer Dreams",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      isLarge: true,
    },
    {
      id: 2,
      category: "Lifestyle",
      title: "Modern Work",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      isLarge: false,
    },
    {
      id: 3,
      category: "Abstract",
      title: "Digital Age",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      isLarge: false,
    },
    {
      id: 4,
      category: "People",
      title: "Creative Space",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      isLarge: true,
    },
    {
      id: 5,
      category: "Portrait",
      title: "Remote Life",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      isLarge: false,
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-[#FDE1D3]/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-[#FDE1D3] text-[#8E9196] rounded-full inline-block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 text-gray-900">Recent Photography</h2>
          <p className="text-gray-600">
            Capturing life's beautiful moments through my lens. Each photo tells a unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                item.isLarge ? 'md:col-span-8' : 'md:col-span-4'
              }`}
            >
              <div className={`aspect-w-16 aspect-h-${item.isLarge ? '9' : '12'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium mb-1 tracking-wider uppercase">{item.category}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
