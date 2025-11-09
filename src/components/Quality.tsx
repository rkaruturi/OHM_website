import { Factory, Microscope, Award, TrendingUp, CheckCircle, Settings } from 'lucide-react';

export default function Quality() {
  return (
    <section id="quality" className="py-20 bg-gradient-to-br from-[#2d5016] to-[#3d6020] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Quality & Manufacturing</h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-200">
              Where traditional wisdom meets modern manufacturing excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Factory className="w-12 h-12 text-[#f4d03f]" />
                <h3 className="text-2xl font-bold">State-of-the-Art Facility</h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Our manufacturing facility in Nimmakuru, Andhra Pradesh, combines traditional
                fermentation methods with modern production standards.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Led by Plant Manager Hemanth Kumar (Engineer), our facility maintains the highest
                standards of cleanliness, quality control, and process optimization.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-12 h-12 text-[#f4d03f]" />
                <h3 className="text-2xl font-bold">12,000 Acres Capacity</h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Our plant can service 12,000 acres of farmland year-round, ensuring consistent
                supply for large-scale operations.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                We maintain flexible production capacity that can expand based on demand, ensuring
                we never compromise on quality while meeting market needs.
              </p>
            </div>
          </div>

          <div className="bg-white text-[#2d5016] p-8 md:p-12 rounded-2xl shadow-2xl mb-12">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Microscope className="w-12 h-12 text-[#f4d03f]" />
              <h3 className="text-3xl font-bold text-center">Microscopic Quality Control</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              Every single batch of our products undergoes thorough microscopic examination before release.
              This ensures optimal levels of beneficial microorganisms, proper fermentation, and
              consistent product quality.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#f4f1e8] p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#2d5016]" />
                </div>
                <p className="font-semibold">Microorganism Count</p>
                <p className="text-gray-600 text-sm">Verified at optimal levels</p>
              </div>
              <div className="text-center">
                <div className="bg-[#f4f1e8] p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#2d5016]" />
                </div>
                <p className="font-semibold">Fermentation Quality</p>
                <p className="text-gray-600 text-sm">Monitored continuously</p>
              </div>
              <div className="text-center">
                <div className="bg-[#f4f1e8] p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#2d5016]" />
                </div>
                <p className="font-semibold">Purity Standards</p>
                <p className="text-gray-600 text-sm">100% batch testing</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
              <Settings className="w-10 h-10 text-[#f4d03f] mx-auto mb-3" />
              <h4 className="font-bold text-xl mb-2">Quality Control Processes</h4>
              <p className="text-gray-200">
                Multi-stage quality checks from raw material selection to final product packaging
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
              <Award className="w-10 h-10 text-[#f4d03f] mx-auto mb-3" />
              <h4 className="font-bold text-xl mb-2">Sustainable Production</h4>
              <p className="text-gray-200">
                Environmentally responsible manufacturing with minimal waste and maximum efficiency
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
              <CheckCircle className="w-10 h-10 text-[#f4d03f] mx-auto mb-3" />
              <h4 className="font-bold text-xl mb-2">Traditional Methods</h4>
              <p className="text-gray-200">
                Time-tested fermentation and processing techniques validated by modern science
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#f4d03f] text-[#2d5016] p-8 rounded-2xl text-center">
            <p className="text-2xl font-bold mb-2">18 Years of Manufacturing Excellence</p>
            <p className="text-lg">
              Trusted quality that farmers rely on, season after season
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
