import { Users, Target, Heart, Globe } from 'lucide-react';

export default function About() {
  const team = [
    { name: 'Rao Chalasani', role: 'Founder', description: 'NRI, US-based' },
    { name: 'Wg. Commander Krishna Rao Yarlagadda', role: 'Founder', description: 'Retired IAF, Nimmakuru village' },
    { name: 'Rajani Karuturi', role: 'CEO', description: 'US-based' },
    { name: 'Hemanth Kumar', role: 'Plant Manager', description: 'Engineer' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">About OHM Organic Farming</h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A social enterprise dedicated to transforming agriculture through organic solutions
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f4f1e8] to-white p-8 md:p-12 rounded-2xl shadow-lg mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <Globe className="w-10 h-10 text-[#2d5016] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-4">Our Story</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  OHM Organic Farming (Pvt) Ltd is a social enterprise founded with a vision to restore India's
                  agricultural heritage. With 18 years of organic farming experience, we combine ancient wisdom
                  with modern scientific methods to deliver premium organic farming solutions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Based in Nimmakuru, Andhra Pradesh, our state-of-the-art manufacturing facility serves over
                  12,000 acres of farmland, providing farmers with trusted, tested, and effective organic products.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#2d5016] mb-8 text-center">Our Leadership Team</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <div key={index} className="bg-white border-2 border-[#2d5016] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <Users className="w-12 h-12 text-[#f4d03f] flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-[#2d5016] mb-1">{member.name}</h4>
                      <p className="text-[#f4d03f] font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2d5016] text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-10 h-10 text-[#f4d03f]" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To lead the organic farming revolution in India by empowering farmers with
                scientifically validated, traditionally rooted organic solutions that restore
                soil health, increase yields, and ensure environmental sustainability.
              </p>
            </div>

            <div className="bg-[#f4d03f] text-[#2d5016] p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-10 h-10 text-[#2d5016]" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To manufacture and deliver premium organic farming products that combine ancient
                wisdom with modern science, ensuring every farmer has access to trusted solutions
                that improve soil fertility, reduce costs, and enhance agricultural productivity.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-[#2d5016] to-[#3d6020] text-white p-8 rounded-2xl shadow-lg">
            <p className="text-2xl font-semibold italic mb-2">Vasudhaika Kutumbam</p>
            <p className="text-xl">World as One Family</p>
          </div>
        </div>
      </div>
    </section>
  );
}
