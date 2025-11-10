import { Phone, MapPin, Leaf, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2d5016] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/OHM logo.jpeg" alt="OHM Logo" className="h-16 w-auto" />
                <div>
                  <h3 className="text-xl font-bold">OHM Organic Farming</h3>
                  <p className="text-sm text-gray-300">Ancient Wisdom with Modern Science</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A social enterprise dedicated to transforming agriculture through premium organic
                solutions. 18 years of experience serving 12,000 acres of farmland.
              </p>
              <p className="text-[#f4d03f] font-semibold italic">
                In Harmony with Soil, in Service to Life
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#f4d03f]">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#f4d03f]">Contact Info</h4>
              <div className="space-y-3">
                <a
                  href="tel:+919666577995"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>+91 96665 77995</span>
                </a>
                <a
                  href="mailto:ohmorganicfarming@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="break-all">ohmorganicfarming@gmail.com</span>
                </a>
                <div className="flex items-start space-x-2 text-gray-300">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Nimmakuru, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <Leaf className="w-5 h-5 text-[#f4d03f]" />
                <span>© 2024 OHM Organic Farming (Pvt) Ltd. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">Manufactured with care in</span>
                <span className="text-[#f4d03f] font-semibold">Nimmakuru, AP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
