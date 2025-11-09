import { Heart, TrendingUp, Leaf, Users, DollarSign, Sprout } from 'lucide-react';

export default function WhyOrganic() {
  const benefits = [
    {
      icon: Leaf,
      title: 'Environmental Benefits',
      description: 'Restore soil health, increase biodiversity, return of bees and beneficial insects, and eliminate chemical toxicity from the ecosystem.',
      color: 'text-green-600',
    },
    {
      icon: DollarSign,
      title: '20-30% Input Cost Reduction',
      description: 'Significant reduction in farming costs by eliminating expensive chemical inputs while maintaining or improving yields.',
      color: 'text-blue-600',
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Safe, chemical-free food for families and communities. Better health outcomes for farmers and consumers.',
      color: 'text-red-600',
    },
    {
      icon: Sprout,
      title: 'Soil Fertility Restoration',
      description: 'Replenish soil carbon content, improve structure, enhance water retention, and rebuild the natural soil microbiome.',
      color: 'text-amber-600',
    },
    {
      icon: TrendingUp,
      title: '20% Yield Increase',
      description: 'Expected yield improvement after soil adjustment period, with sustained long-term productivity.',
      color: 'text-purple-600',
    },
    {
      icon: Users,
      title: 'Long-term Sustainability',
      description: 'Build a farming system that works for generations, returning to traditional wisdom that sustained agriculture for centuries.',
      color: 'text-cyan-600',
    },
  ];

  return (
    <section id="why-organic" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">Why Organic Farming?</h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The solution to India's agricultural challenges lies in returning to our roots
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#2d5016] to-[#3d6020] text-white p-8 md:p-12 rounded-2xl shadow-2xl mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Current Farming Challenges</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-xl mb-3 text-[#f4d03f]">Soil Degradation</h4>
                <p className="text-gray-200">
                  Decades of chemical farming have depleted soil carbon content, destroyed beneficial microorganisms,
                  and reduced natural fertility. Soils are becoming hard, lifeless, and unable to retain water.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-xl mb-3 text-[#f4d03f]">Rising Input Costs</h4>
                <p className="text-gray-200">
                  Chemical fertilizers and pesticides are increasingly expensive. Farmers are trapped in a cycle
                  of dependency, spending more each season with diminishing returns.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-xl mb-3 text-[#f4d03f]">Health Concerns</h4>
                <p className="text-gray-200">
                  Chemical residues in food affect consumer health. Farmers and their families face exposure
                  to toxic substances, leading to serious health issues.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-xl mb-3 text-[#f4d03f]">Environmental Damage</h4>
                <p className="text-gray-200">
                  Loss of biodiversity, declining bee populations, water pollution, and ecosystem disruption
                  threaten long-term agricultural sustainability.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f4f1e8] border-2 border-[#2d5016]/20 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-white p-4 rounded-full shadow-md">
                      <Icon className={`w-10 h-10 ${benefit.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2d5016] mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-700 text-center leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-[#f4d03f] text-[#2d5016] p-8 md:p-12 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-center">The Path Forward</h3>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto mb-6">
              Organic farming is not just about avoiding chemicals—it's about rebuilding what has been lost.
              By returning to traditional wisdom and combining it with modern scientific validation, we can
              restore soil health, reduce costs, improve yields, and ensure sustainable agriculture for future generations.
            </p>
            <p className="text-xl font-bold text-center italic">
              The solution is not in more chemicals, but in less. Return to nature, return to tradition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
