import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Products', href: '#products' },
    { name: 'For Farmers', href: '#faq' },
    { name: 'Why Organic', href: '#why-organic' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/OHM logo.jpeg" alt="OHM Organic Farming" className="h-12 w-auto" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-[#2d5016]">OHM Organic Farming</h1>
              <p className="text-xs text-gray-600">Ancient Wisdom with Modern Science</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#2d5016] transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="tel:+919666577995"
            className="hidden md:flex items-center space-x-2 bg-[#2d5016] text-white px-6 py-3 rounded-lg hover:bg-[#3d6020] transition-all shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">+91 96665 77995</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-[#2d5016] hover:text-white rounded transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+919666577995"
              className="flex items-center justify-center space-x-2 bg-[#2d5016] text-white px-6 py-3 rounded-lg mt-4"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+91 96665 77995</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
