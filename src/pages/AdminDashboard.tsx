import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, Package, MessageSquare, HelpCircle, Wrench } from 'lucide-react';
import ProductsManager from '../components/admin/ProductsManager';
import TestimonialsManager from '../components/admin/TestimonialsManager';
import FAQsManager from '../components/admin/FAQsManager';
import ServicesManager from '../components/admin/ServicesManager';

type Tab = 'products' | 'testimonials' | 'faqs' | 'services';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('products');
  const { logout } = useAuth();

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      logout();
      window.location.href = '/';
    }
  };

  const tabs = [
    { id: 'products' as Tab, label: 'Products', icon: Package },
    { id: 'testimonials' as Tab, label: 'Testimonials', icon: MessageSquare },
    { id: 'faqs' as Tab, label: 'FAQs', icon: HelpCircle },
    { id: 'services' as Tab, label: 'Services', icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
              <p className="text-sm text-gray-600">OHM Organics Admin Dashboard</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'products' && <ProductsManager />}
            {activeTab === 'testimonials' && <TestimonialsManager />}
            {activeTab === 'faqs' && <FAQsManager />}
            {activeTab === 'services' && <ServicesManager />}
          </div>
        </div>
      </div>
    </div>
  );
}
