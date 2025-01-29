import { Award, Star, Rocket } from "lucide-react";

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Experience excellence in every detail of our product.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized performance that keeps up with your pace.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Award Winning",
    description: "Recognized excellence in product innovation.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full inline-block">
            Features
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Designed for Excellence
          </h2>
          <p className="text-gray-600">
            Discover the powerful features that set our product apart.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};