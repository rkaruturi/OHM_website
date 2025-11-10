import { Phone, Leaf, Microscope, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#f4f1e8] via-white to-[#f4f1e8] py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[#2d5016] text-9xl">ॐ</div>
        <div className="absolute bottom-20 right-10 text-[#2d5016] text-9xl">ॐ</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img src="/OHM logo.jpeg" alt="OHM Organic Farming Logo" className="h-32 w-auto" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#2d5016] mb-4">
            OHM Organic Farming
          </h1>

          <p className="text-2xl md:text-3xl text-[#f4d03f] font-semibold mb-6 italic">
            Ancient Wisdom with Modern Science
          </p>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            In Harmony with Soil, in Service to Life
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            Premium organic farming solutions manufactured in Nimmakuru, Andhra Pradesh.
            Combining 18 years of organic experience with microscopic quality control
            to serve 12,000 acres of farmland.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:+919666577995"
              className="inline-flex items-center justify-center space-x-3 bg-[#2d5016] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#3d6020] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>Call to Place Your Order: +91 96665 77995</span>
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center space-x-3 bg-white text-[#2d5016] border-2 border-[#2d5016] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2d5016] hover:text-white transition-all shadow-lg"
            >
              <Leaf className="w-6 h-6" />
              <span>View Products</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#2d5016] transform hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-[#f4d03f]" />
              </div>
              <h3 className="text-3xl font-bold text-[#2d5016] mb-2">18 Years</h3>
              <p className="text-gray-600">Organic Farming Experience</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#f4d03f] transform hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <Leaf className="w-12 h-12 text-[#2d5016]" />
              </div>
              <h3 className="text-3xl font-bold text-[#2d5016] mb-2">12,000 Acres</h3>
              <p className="text-gray-600">Production Capacity</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#2d5016] transform hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <Microscope className="w-12 h-12 text-[#f4d03f]" />
              </div>
              <h3 className="text-3xl font-bold text-[#2d5016] mb-2">100%</h3>
              <p className="text-gray-600">Microscopic Quality Control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
