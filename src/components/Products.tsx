import { Phone, Droplet, Sprout, TestTube, Fish, Bug, Beaker } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Droplet,
      name: 'Panchagavya',
      description: 'Premium cow-based bio-fertilizer for soil restoration and plant health',
      benefits: [
        'Restores soil microbiome',
        'Enhances plant immunity',
        'Improves crop quality',
        'Increases beneficial insect activity',
      ],
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
    },
    {
      icon: Sprout,
      name: 'Amruthajalam (AJ)',
      description: 'Liquid fertilizer for comprehensive plant and leaf treatment',
      benefits: [
        'Promotes healthy leaf growth',
        'Enhances photosynthesis',
        'Provides complete nutrition',
        'Improves disease resistance',
      ],
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      icon: TestTube,
      name: 'Samyabhumi',
      description: 'Advanced soil enhancement solution',
      benefits: [
        'Balances soil pH',
        'Increases carbon content',
        'Enhances water retention',
        'Promotes earthworm activity',
      ],
      color: 'bg-amber-50 border-amber-200',
      iconColor: 'text-amber-600',
    },
    {
      icon: Fish,
      name: 'Fish Amino Acid',
      description: 'Organic nutrient supplement for robust plant growth',
      benefits: [
        'Rich in amino acids',
        'Accelerates growth',
        'Improves fruit quality',
        'Enhances plant vigor',
      ],
      color: 'bg-cyan-50 border-cyan-200',
      iconColor: 'text-cyan-600',
    },
    {
      icon: Bug,
      name: 'Vermi Wash',
      description: 'Earthworm-based liquid fertilizer',
      benefits: [
        'Natural plant growth hormone',
        'Improves nutrient uptake',
        'Pest repellent properties',
        'Enhances soil structure',
      ],
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
    },
    {
      icon: Beaker,
      name: 'Custom Inoculums',
      description: 'Potent organic formulations tailored for specific needs',
      benefits: [
        'Customized solutions',
        'Targeted applications',
        'Expert consultation',
        'Proven effectiveness',
      ],
      color: 'bg-rose-50 border-rose-200',
      iconColor: 'text-rose-600',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-[#f4f1e8] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">Our Products & Services</h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium organic formulations manufactured with microscopic quality control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className={`${product.color} border-2 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105`}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-white p-4 rounded-full shadow-md">
                      <Icon className={`w-10 h-10 ${product.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d5016] mb-3 text-center">{product.name}</h3>
                  <p className="text-gray-700 mb-4 text-center leading-relaxed">{product.description}</p>

                  <div className="mb-4">
                    <p className="font-semibold text-[#2d5016] mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-start">
                          <span className="text-[#f4d03f] mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="tel:+919666577995"
                    className="flex items-center justify-center space-x-2 bg-[#2d5016] text-white px-4 py-3 rounded-lg hover:bg-[#3d6020] transition-colors w-full font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Order Now</span>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="bg-white border-2 border-[#2d5016] p-8 md:p-12 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#2d5016] mb-6 text-center">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-[#f4d03f] p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-[#2d5016] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-[#2d5016] text-lg mb-1">Bulk Orders for Commercial Operations</h4>
                  <p className="text-gray-600">Large-scale supply for plantations and commercial farms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#f4d03f] p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-[#2d5016] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-[#2d5016] text-lg mb-1">Custom Formulations</h4>
                  <p className="text-gray-600">Tailored solutions for specific crop and soil requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#f4d03f] p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-[#2d5016] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-[#2d5016] text-lg mb-1">Technical Support & Guidance</h4>
                  <p className="text-gray-600">Expert consultation on organic farming practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#f4d03f] p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-[#2d5016] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-[#2d5016] text-lg mb-1">Quality Assurance & Testing</h4>
                  <p className="text-gray-600">Microscopic examination and scientific validation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
