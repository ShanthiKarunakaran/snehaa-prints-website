import { GalleryHorizontal, Camera } from "lucide-react";

export const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: "Nature",
      title: "Spring Blossoms",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      category: "Portraits",
      title: "Golden Hour",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      category: "Events",
      title: "Summer Festival",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      category: "Street",
      title: "City Lights",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      category: "Nature",
      title: "Mountain Vista",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      category: "Portraits",
      title: "Urban Style",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full inline-block">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 text-gray-900">Recent Photography</h2>
          <p className="text-gray-600">
            Capturing life's beautiful moments through my lens. Each photo tells a unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium mb-1">{item.category}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};