export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full inline-block">
            Benefits
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4">Why Choose Us</h2>
          <p className="text-gray-600">
            Experience the advantages that make our product unique.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                Effortlessly integrate our product into your existing workflow.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};