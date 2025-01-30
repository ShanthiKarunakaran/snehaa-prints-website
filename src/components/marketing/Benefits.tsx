export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full inline-block">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 text-gray-900">Why Choose Green Haven</h2>
          <p className="text-gray-600 px-4 sm:px-0">
            Join our community of plant enthusiasts and embrace sustainable living.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainability</h3>
              <p className="text-gray-600">
                Eco-friendly practices and sustainable packaging for a greener future.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community</h3>
              <p className="text-gray-600">
                A supportive network of plant lovers sharing knowledge and experiences.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Education</h3>
              <p className="text-gray-600">
                Expert resources and guidance for your plant care journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};