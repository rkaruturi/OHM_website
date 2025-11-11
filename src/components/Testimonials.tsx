import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getIconComponent } from '../utils/iconMapper';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  type: string;
  display_order: number;
}

const colorClasses = [
  { bg: 'bg-blue-50', border: 'border-blue-200' },
  { bg: 'bg-green-50', border: 'border-green-200' },
  { bg: 'bg-amber-50', border: 'border-amber-200' },
  { bg: 'bg-purple-50', border: 'border-purple-200' },
  { bg: 'bg-cyan-50', border: 'border-cyan-200' },
  { bg: 'bg-rose-50', border: 'border-rose-200' },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      if (!supabase) {
        setTestimonials([]);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getIconForType = (type: string) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('corporate') || lowerType.includes('company')) return 'Building2';
    if (lowerType.includes('community') || lowerType.includes('group')) return 'Users';
    return 'User';
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Trusted by farmers and enterprises across India
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12 text-gray-600">Loading testimonials...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                const colors = colorClasses[index % colorClasses.length];
                const iconName = getIconForType(testimonial.type);
                const IconComponent = getIconComponent(iconName);

                return (
                  <div
                    key={testimonial.id}
                    className={`${colors.bg} ${colors.border} border-2 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all relative`}
                  >
                    <div className="absolute -top-4 left-8">
                      <Quote className="w-8 h-8 text-[#f4d03f] fill-current" />
                    </div>

                    <div className="flex justify-center mb-4 mt-2">
                      <div className="bg-white p-4 rounded-full shadow-md">
                        <IconComponent className="w-10 h-10 text-[#2d5016]" />
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg italic mb-6 leading-relaxed text-center">
                      "{testimonial.quote}"
                    </p>

                    <div className="text-center border-t-2 border-[#2d5016]/20 pt-4">
                      <p className="font-bold text-[#2d5016] text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.type}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
