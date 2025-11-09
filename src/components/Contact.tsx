import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f4f1e8] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Get in touch to place your order or learn more about our products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#2d5016] to-[#3d6020] text-white p-8 md:p-12 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">Ready to Order?</h3>

              <div className="space-y-6">
                <a
                  href="tel:+919666577995"
                  className="flex items-center space-x-4 bg-[#f4d03f] text-[#2d5016] p-6 rounded-xl hover:bg-white transition-all shadow-lg group"
                >
                  <Phone className="w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-sm mb-1">Call to Place Your Order</p>
                    <p className="text-2xl font-bold">+91 96665 77995</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <MapPin className="w-8 h-8 text-[#f4d03f] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2 text-lg">Manufacturing Facility</p>
                    <p className="text-gray-200">
                      Nimmakuru, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:ohmorganicfarming@gmail.com"
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <Mail className="w-8 h-8 text-[#f4d03f] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold mb-2 text-lg">Email</p>
                    <p className="text-gray-200 break-all">
                      ohmorganicfarming@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <Clock className="w-8 h-8 text-[#f4d03f] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2 text-lg">Business Hours</p>
                    <p className="text-gray-200">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#2d5016] p-8 md:p-12 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Bulk Order Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#2d5016]/20 rounded-lg focus:border-[#2d5016] focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-[#2d5016]/20 rounded-lg focus:border-[#2d5016] focus:outline-none transition-colors"
                    placeholder="+91 "
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Acreage</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#2d5016]/20 rounded-lg focus:border-[#2d5016] focus:outline-none transition-colors"
                    placeholder="Farm size in acres"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Product Interest</label>
                  <select className="w-full px-4 py-3 border-2 border-[#2d5016]/20 rounded-lg focus:border-[#2d5016] focus:outline-none transition-colors">
                    <option>Select a product</option>
                    <option>Panchagavya</option>
                    <option>Amruthajalam (AJ)</option>
                    <option>Samyabhumi</option>
                    <option>Fish Amino Acid</option>
                    <option>Vermi Wash</option>
                    <option>Custom Inoculums</option>
                    <option>Multiple Products</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-[#2d5016]/20 rounded-lg focus:border-[#2d5016] focus:outline-none transition-colors h-32 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2d5016] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#3d6020] transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Inquiry
                </button>
              </form>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Or call us at <a href="tel:+919666577995" className="text-[#2d5016] font-bold">+91 96665 77995</a> or email <a href="mailto:ohmorganicfarming@gmail.com" className="text-[#2d5016] font-bold">ohmorganicfarming@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="bg-[#f4d03f] p-8 rounded-2xl text-center shadow-lg">
            <p className="text-[#2d5016] text-xl font-bold mb-2">
              Serving farmers across India with 18 years of trusted quality
            </p>
            <p className="text-[#2d5016] text-lg">
              OHM Organic Farming - Where Ancient Wisdom Meets Modern Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
