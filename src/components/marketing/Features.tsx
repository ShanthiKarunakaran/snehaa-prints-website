import { Box, Leaf, Sprout } from "lucide-react";

const features = [
  {
    icon: <Box className="w-6 h-6 text-green-600" />,
    title: "Plant Care Kits",
    description: "Curated kits with essential tools, organic fertilizers, and detailed care guides.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    title: "Monthly Subscriptions",
    description: "Seasonal plants, care tips, and exclusive discounts delivered to your door.",
  },
  {
    icon: <Sprout className="w-6 h-6 text-green-600" />,
    title: "Expert Workshops",
    description: "Join our virtual and in-person workshops on plant care and propagation.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-[#F8FAFF] to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full inline-block">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 text-gray-900">
            Everything You Need to Grow
          </h2>
          <p className="text-gray-600 px-4 sm:px-0">
            Discover our carefully curated products and services for plant enthusiasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-green-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
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