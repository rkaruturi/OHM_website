import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getIconComponent, getColorClass } from '../utils/iconMapper';

interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  colors: string[];
  image_url: string;
  display_order: number;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  display_order: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingServices, setIsLoadingServices] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchServices();
  }, []);

  const fetchProducts = async () => {
    try {
      if (!supabase) {
        setProducts([]);
        setIsLoadingProducts(false);
        return;
      }

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  const fetchServices = async () => {
    try {
      if (!supabase) {
        setServices([]);
        setIsLoadingServices(false);
        return;
      }

      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('display_order', { ascending: true});

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setIsLoadingServices(false);
    }
  };

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

          {isLoadingProducts ? (
            <div className="text-center py-12 text-gray-600">Loading products...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => {
                const primaryColor = product.colors[0] || 'green';
                const iconName = product.colors[1] || 'Circle';
                const colorClasses = getColorClass(primaryColor, index);
                const IconComponent = getIconComponent(iconName);

                return (
                  <div
                    key={product.id}
                    className={`${colorClasses.bg} ${colorClasses.border} border-2 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-white p-4 rounded-full shadow-md">
                        <IconComponent className={`w-10 h-10 ${colorClasses.text}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#2d5016] mb-3 text-center">{product.name}</h3>
                    <p className="text-gray-700 mb-4 text-center leading-relaxed">{product.description}</p>

                    {product.benefits.length > 0 && (
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
                    )}

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
          )}

          <div className="bg-white border-2 border-[#2d5016] p-8 md:p-12 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#2d5016] mb-6 text-center">Our Services</h3>
            {isLoadingServices ? (
              <div className="text-center py-8 text-gray-600">Loading services...</div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div key={service.id} className="flex items-start space-x-3">
                    <div className="bg-[#f4d03f] p-2 rounded-full flex-shrink-0">
                      <div className="w-2 h-2 bg-[#2d5016] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2d5016] text-lg mb-1">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
