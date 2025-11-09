import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSections = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'What type of company is OHM Organic Farming?',
          answer: 'OHM Organic Farming (Pvt) Ltd is a social enterprise focused on manufacturing premium organic farming products. We combine 18 years of organic farming experience with modern scientific methods.',
        },
        {
          question: 'Where are you located?',
          answer: 'Our manufacturing facility is located in Nimmakuru, Andhra Pradesh, India.',
        },
        {
          question: 'How do I place an order?',
          answer: 'Simply call us at +91 96665 77995. Our team will guide you through the ordering process, discuss your specific needs, and arrange delivery.',
        },
      ],
    },
    {
      title: 'Product Details',
      faqs: [
        {
          question: 'What makes your products organic?',
          answer: 'Our products are based on ancient organic methods using desi cow products (urine, dung, milk, curd, ghee) and traditional fermentation processes. No synthetic chemicals are used.',
        },
        {
          question: 'What is Panchagavya?',
          answer: 'Panchagavya is our premium bio-fertilizer made from five cow-based ingredients. It restores soil microbiome, enhances plant immunity, and improves overall crop quality.',
        },
        {
          question: 'How do I apply these products?',
          answer: 'Each product comes with specific application instructions. Our team provides detailed guidance based on your crop type and soil conditions. Technical support is always available.',
        },
      ],
    },
    {
      title: 'Quality & Capacity',
      faqs: [
        {
          question: 'What is your production capacity?',
          answer: 'Our state-of-the-art facility can service 12,000 acres of farmland year-round. We can expand capacity based on demand.',
        },
        {
          question: 'How do you ensure quality?',
          answer: 'Every batch undergoes microscopic examination under the supervision of our Plant Manager, Hemanth Kumar (Engineer). We maintain strict quality control at every stage of production.',
        },
        {
          question: 'Do you test each batch?',
          answer: 'Yes, absolutely. 100% of our batches are tested microscopically to ensure optimal levels of beneficial microorganisms and nutrients.',
        },
      ],
    },
    {
      title: 'Usage & Results',
      faqs: [
        {
          question: 'How will organic products improve my soil?',
          answer: 'Our products restore soil carbon content, increase earthworm activity, balance pH levels, and rebuild the soil microbiome. You\'ll notice improved soil structure and fertility over time.',
        },
        {
          question: 'What yield increase can I expect?',
          answer: 'After the soil adjustment period, farmers typically see a 20% increase in yield. The exact improvement depends on initial soil condition and proper application.',
        },
        {
          question: 'Can I transition from chemical farming?',
          answer: 'Yes. We guide farmers through the transition process. While there\'s an adjustment period, our products help restore soil health damaged by chemical inputs.',
        },
        {
          question: 'Will I save money?',
          answer: 'Yes. Farmers typically see 20-30% reduction in input costs. Combined with better yields and soil health, organic farming is economically beneficial.',
        },
      ],
    },
    {
      title: 'Ordering',
      faqs: [
        {
          question: 'Do you accept bulk orders?',
          answer: 'Yes, we specialize in bulk orders for commercial operations, plantations, and large farms. Contact us to discuss your requirements.',
        },
        {
          question: 'What are your delivery options?',
          answer: 'We arrange delivery across India. Delivery timelines and logistics are discussed when you place your order.',
        },
        {
          question: 'Do you offer custom formulations?',
          answer: 'Yes, we can create custom inoculums tailored to your specific crop and soil needs. Our experts will work with you to develop the right solution.',
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-[#f4f1e8] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">For Farmers: FAQ</h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Everything you need to know about OHM organic products
            </p>
          </div>

          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#2d5016]/10">
                <h3 className="text-2xl font-bold text-[#2d5016] mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.faqs.map((faq, faqIndex) => {
                    const globalIndex = sectionIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div key={faqIndex} className="border-2 border-[#2d5016]/20 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-[#f4f1e8] transition-colors"
                        >
                          <span className="font-semibold text-[#2d5016] text-lg pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#f4d03f] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#f4d03f] flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-2 bg-[#f4f1e8]/50">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
