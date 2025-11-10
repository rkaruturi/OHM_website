import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FAQ {
  id: string;
  section: string;
  question: string;
  answer: string;
  display_order: number;
}

interface FAQSection {
  title: string;
  faqs: FAQ[];
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqSections, setFaqSections] = useState<FAQSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;

      const grouped = groupFAQsBySection(data || []);
      setFaqSections(grouped);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const groupFAQsBySection = (faqs: FAQ[]): FAQSection[] => {
    const sections: Record<string, FAQ[]> = {};

    faqs.forEach((faq) => {
      if (!sections[faq.section]) {
        sections[faq.section] = [];
      }
      sections[faq.section].push(faq);
    });

    return Object.keys(sections).map((sectionTitle) => ({
      title: sectionTitle,
      faqs: sections[sectionTitle],
    }));
  };

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

          {isLoading ? (
            <div className="text-center py-12 text-gray-600">Loading FAQs...</div>
          ) : (
            <div className="space-y-8">
              {faqSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#2d5016]/10">
                  <h3 className="text-2xl font-bold text-[#2d5016] mb-4">{section.title}</h3>
                  <div className="space-y-3">
                    {section.faqs.map((faq, faqIndex) => {
                      const globalIndex = sectionIndex * 100 + faqIndex;
                      const isOpen = openIndex === globalIndex;

                      return (
                        <div key={faq.id} className="border-2 border-[#2d5016]/20 rounded-lg overflow-hidden">
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
          )}
        </div>
      </div>
    </section>
  );
}
