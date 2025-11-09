import { Sparkles, Microscope, Leaf, Award, BookOpen, Sprout } from 'lucide-react';

export default function Approach() {
  const features = [
    {
      icon: BookOpen,
      title: 'Ancient Wisdom',
      description: 'Time-tested traditional methods passed down through generations, rooted in Vedic agricultural practices.',
    },
    {
      icon: Microscope,
      title: 'Modern Science',
      description: 'Every batch undergoes microscopic examination and scientific validation to ensure optimal efficacy.',
    },
    {
      icon: Sparkles,
      title: 'Cow-Based Formulations',
      description: 'Premium products made from desi cow products: urine, dung, milk, curd, and ghee.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes at our state-of-the-art manufacturing facility in Nimmakuru.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Agriculture',
      description: 'Solutions designed to restore soil health, promote biodiversity, and ensure long-term sustainability.',
    },
    {
      icon: Sprout,
      title: 'Value as Experience',
      description: '18 years of practical organic farming experience translated into every product we manufacture.',
    },
  ];

  return (
    <section id="approach" className="py-20 bg-gradient-to-br from-[#2d5016] to-[#3d6020] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Where ancient agricultural wisdom meets modern scientific validation
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl mb-12 border border-white/20">
            <h3 className="text-3xl font-bold text-[#f4d03f] mb-6 text-center">Value as Experience</h3>
            <p className="text-lg text-gray-100 leading-relaxed text-center max-w-4xl mx-auto">
              Our philosophy is simple: we don't just manufacture products, we deliver experiences built on
              18 years of organic farming expertise. Every formulation combines the proven wisdom of traditional
              Indian agriculture with rigorous modern scientific validation. This unique approach ensures that
              farmers receive products that are not only authentic but also scientifically effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#f4d03f] p-3 rounded-full">
                      <Icon className="w-8 h-8 text-[#2d5016]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-200 text-center leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white text-[#2d5016] p-8 md:p-12 rounded-2xl shadow-2xl">
            <div className="flex items-start space-x-4">
              <Microscope className="w-12 h-12 text-[#f4d03f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Microscopic Quality Control</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Under the leadership of our Plant Manager, Hemanth Kumar (Engineer), every single batch
                  of our products undergoes thorough microscopic examination. This ensures that the beneficial
                  microorganisms, enzymes, and nutrients are present at optimal levels.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our professional manufacturing facility combines traditional fermentation methods with
                  modern quality assurance processes, giving farmers the confidence that each product
                  meets the highest standards of purity and effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
