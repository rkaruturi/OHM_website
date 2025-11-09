import { Quote, Building2, User, Users } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      icon: Building2,
      name: 'MAK India Ltd.',
      type: 'Corporate Client',
      quote: 'Placed a large order of Panchagavya after trying their product. The quality and results exceeded our expectations.',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      icon: User,
      name: 'Ramesh Babu',
      type: 'Progressive Farmer',
      quote: 'I buy in bulk for my large plantation every season. OHM\'s products have consistently delivered excellent results.',
      color: 'bg-green-50 border-green-200',
    },
    {
      icon: Users,
      name: 'Local Farmers',
      type: 'Community',
      quote: 'We come back every year with complete trust in OHM products. They never disappoint.',
      color: 'bg-amber-50 border-amber-200',
    },
  ];

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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <div
                  key={index}
                  className={`${testimonial.color} border-2 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all relative`}
                >
                  <div className="absolute -top-4 left-8">
                    <Quote className="w-8 h-8 text-[#f4d03f] fill-current" />
                  </div>

                  <div className="flex justify-center mb-4 mt-2">
                    <div className="bg-white p-4 rounded-full shadow-md">
                      <Icon className="w-10 h-10 text-[#2d5016]" />
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg italic mb-6 leading-relaxed text-center">
                    "{testimonial.quote}"
                  </p>

                  <div className="text-center border-t-2 border-[#2d5016]/20 pt-4">
                    <p className="font-bold text-[#2d5016] text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.type}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
