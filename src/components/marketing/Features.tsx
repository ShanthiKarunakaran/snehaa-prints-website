import { Award, Star, Rocket } from "lucide-react";

const features = [
  {
    icon: <Star className="w-6 h-6 text-blue-600" />,
    title: "Premium Quality",
    description: "Experience excellence in every detail of our product.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: "Lightning Fast",
    description: "Optimized performance that keeps up with your pace.",
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "Award Winning",
    description: "Recognized excellence in product innovation.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full inline-block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 text-gray-900">
            Designed for Excellence
          </h2>
          <p className="text-gray-600 px-4 sm:px-0">
            Discover the powerful features that set our product apart.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};