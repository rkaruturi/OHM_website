/*
  # Populate Initial Content Data

  1. Initial Data Population
    - Insert products from the original hardcoded Products component
    - Insert services from the original hardcoded Products component
    - Insert testimonials from the original hardcoded Testimonials component
    - Insert FAQs from the original hardcoded FAQ component

  2. Important Notes
    - Leadership team data was already inserted in the create_leadership_team_table migration
    - Products use colors array: first element is color name, second is icon name
    - All data includes display_order for proper sequencing
    - Uses ON CONFLICT DO NOTHING to avoid duplicates if migration is run multiple times
*/

-- Insert Products Data
INSERT INTO products (name, description, benefits, colors, image_url, display_order) VALUES
  ('Panchagavya', 'Premium cow-based bio-fertilizer for soil restoration and plant health', 
   ARRAY['Restores soil microbiome', 'Enhances plant immunity', 'Improves crop quality', 'Increases beneficial insect activity'],
   ARRAY['green', 'Droplet'], '', 1),
  ('Amruthajalam (AJ)', 'Liquid fertilizer for comprehensive plant and leaf treatment',
   ARRAY['Promotes healthy leaf growth', 'Enhances photosynthesis', 'Provides complete nutrition', 'Improves disease resistance'],
   ARRAY['blue', 'Sprout'], '', 2),
  ('Samyabhumi', 'Advanced soil enhancement solution',
   ARRAY['Balances soil pH', 'Increases carbon content', 'Enhances water retention', 'Promotes earthworm activity'],
   ARRAY['amber', 'TestTube'], '', 3),
  ('Fish Amino Acid', 'Organic nutrient supplement for robust plant growth',
   ARRAY['Rich in amino acids', 'Accelerates growth', 'Improves fruit quality', 'Enhances plant vigor'],
   ARRAY['cyan', 'Fish'], '', 4),
  ('Vermi Wash', 'Earthworm-based liquid fertilizer',
   ARRAY['Natural plant growth hormone', 'Improves nutrient uptake', 'Pest repellent properties', 'Enhances soil structure'],
   ARRAY['purple', 'Bug'], '', 5),
  ('Custom Inoculums', 'Potent organic formulations tailored for specific needs',
   ARRAY['Customized solutions', 'Targeted applications', 'Expert consultation', 'Proven effectiveness'],
   ARRAY['rose', 'Beaker'], '', 6)
ON CONFLICT DO NOTHING;

-- Insert Services Data
INSERT INTO services (title, description, icon, display_order) VALUES
  ('Bulk Orders for Commercial Operations', 'Large-scale supply for plantations and commercial farms', 'Package', 1),
  ('Custom Formulations', 'Tailored solutions for specific crop and soil requirements', 'Beaker', 2),
  ('Technical Support & Guidance', 'Expert consultation on organic farming practices', 'MessageSquare', 3),
  ('Quality Assurance & Testing', 'Microscopic examination and scientific validation', 'Shield', 4)
ON CONFLICT DO NOTHING;

-- Insert Testimonials Data
INSERT INTO testimonials (quote, author, type, display_order) VALUES
  ('Placed a large order of Panchagavya after trying their product. The quality and results exceeded our expectations.', 
   'MAK India Ltd.', 'Corporate Client', 1),
  ('I buy in bulk for my large plantation every season. OHM''s products have consistently delivered excellent results.',
   'Ramesh Babu', 'Progressive Farmer', 2),
  ('We come back every year with complete trust in OHM products. They never disappoint.',
   'Local Farmers', 'Community', 3)
ON CONFLICT DO NOTHING;

-- Insert FAQs Data
INSERT INTO faqs (section, question, answer, display_order) VALUES
  ('Getting Started', 'What type of company is OHM Organic Farming?', 
   'OHM Organic Farming (Pvt) Ltd is a social enterprise focused on manufacturing premium organic farming products. We combine 18 years of organic farming experience with modern scientific methods.', 1),
  ('Getting Started', 'Where are you located?',
   'Our manufacturing facility is located in Nimmakuru, Andhra Pradesh, India.', 2),
  ('Getting Started', 'How do I place an order?',
   'Simply call us at +91 96665 77995. Our team will guide you through the ordering process, discuss your specific needs, and arrange delivery.', 3),
  ('Product Details', 'What makes your products organic?',
   'Our products are based on ancient organic methods using desi cow products (urine, dung, milk, curd, ghee) and traditional fermentation processes. No synthetic chemicals are used.', 4),
  ('Product Details', 'What is Panchagavya?',
   'Panchagavya is our premium bio-fertilizer made from five cow-based ingredients. It restores soil microbiome, enhances plant immunity, and improves overall crop quality.', 5),
  ('Product Details', 'How do I apply these products?',
   'Each product comes with specific application instructions. Our team provides detailed guidance based on your crop type and soil conditions. Technical support is always available.', 6),
  ('Quality & Capacity', 'What is your production capacity?',
   'Our state-of-the-art facility can service 12,000 acres of farmland year-round. We can expand capacity based on demand.', 7),
  ('Quality & Capacity', 'How do you ensure quality?',
   'Every batch undergoes microscopic examination under the supervision of our Plant Manager, Hemanth Kumar (Engineer). We maintain strict quality control at every stage of production.', 8),
  ('Quality & Capacity', 'Do you test each batch?',
   'Yes, absolutely. 100% of our batches are tested microscopically to ensure optimal levels of beneficial microorganisms and nutrients.', 9),
  ('Usage & Results', 'How will organic products improve my soil?',
   'Our products restore soil carbon content, increase earthworm activity, balance pH levels, and rebuild the soil microbiome. You''ll notice improved soil structure and fertility over time.', 10),
  ('Usage & Results', 'What yield increase can I expect?',
   'After the soil adjustment period, farmers typically see a 20% increase in yield. The exact improvement depends on initial soil condition and proper application.', 11),
  ('Usage & Results', 'Can I transition from chemical farming?',
   'Yes. We guide farmers through the transition process. While there''s an adjustment period, our products help restore soil health damaged by chemical inputs.', 12),
  ('Usage & Results', 'Will I save money?',
   'Yes. Farmers typically see 20-30% reduction in input costs. Combined with better yields and soil health, organic farming is economically beneficial.', 13),
  ('Ordering', 'Do you accept bulk orders?',
   'Yes, we specialize in bulk orders for commercial operations, plantations, and large farms. Contact us to discuss your requirements.', 14),
  ('Ordering', 'What are your delivery options?',
   'We arrange delivery across India. Delivery timelines and logistics are discussed when you place your order.', 15),
  ('Ordering', 'Do you offer custom formulations?',
   'Yes, we can create custom inoculums tailored to your specific crop and soil needs. Our experts will work with you to develop the right solution.', 16)
ON CONFLICT DO NOTHING;