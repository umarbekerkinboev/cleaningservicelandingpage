import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Home, 
  Building2, 
  Key, 
  Clock, 
  ShieldCheck, 
  Star,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  CalendarDays
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Booking Calculator State
  const [rooms, setRooms] = useState(1);
  const [baths, setBaths] = useState(1);
  const [serviceType, setServiceType] = useState('Standard Cleaning');
  const [extras, setExtras] = useState({ windows: false, oven: false, fridge: false });

  // Price Calculation Logic
  let basePrice = 99;
  if (serviceType === 'Deep Cleaning') basePrice = 149;
  if (serviceType === 'Move-In / Move-Out') basePrice = 199;
  if (serviceType === 'Office Cleaning') basePrice = 150;

  const estimatedPrice = serviceType === 'Office Cleaning' 
    ? basePrice 
    : basePrice + ((rooms - 1) * 25) + ((baths - 1) * 30) + (extras.windows ? 30 : 0) + (extras.oven ? 25 : 0) + (extras.fridge ? 25 : 0);

  const toggleExtra = (extra: keyof typeof extras) => {
    setExtras(prev => ({ ...prev, [extra]: !prev[extra] }));
  };

  const faqs = [
    { q: "Do I need to be home during the cleaning?", a: "No, you don't need to be home. You can leave a key or provide access instructions, and our trusted cleaners will lock securely upon leaving." },
    { q: "Are your cleaners insured and background checked?", a: "Yes, all our professionals undergo rigorous background checks and are fully insured for your peace of mind." },
    { q: "What is included in a standard clean?", a: "A standard clean includes dusting, wiping all surfaces, vacuuming, mopping floors, and cleaning bathrooms and the kitchen." },
    { q: "Do you bring your own supplies?", a: "Yes, our team brings all necessary cleaning supplies and equipment, but we are happy to use your preferred products upon request." },
    { q: "Do you use eco-friendly cleaning products?", a: "Yes, we prioritize non-toxic, eco-friendly products that are safe for your family and pets." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-xl text-blue-600 tracking-tight flex items-center gap-2 uppercase">
            <Sparkles className="h-5 w-5" />
            PristineClean
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          <a href="#book" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md transition-colors flex items-center gap-2">
            <CalendarDays className="h-4 w-4" /> Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-500 hover:text-slate-800 p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 fixed w-full z-40 shadow-sm top-[70px]">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-slate-500">Services</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-slate-500">Pricing</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-slate-500">Reviews</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-slate-500">FAQ</a>
          <a href="#book" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-blue-600">Book Now</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-20 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            A Spotless Space,<br/>Without the Stress.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Professional, reliable, and thorough cleaning services tailored to your lifestyle. We handle the mess so you don't have to.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              Get Your Instant Quote
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-500 font-medium">
            <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-emerald-500"/> Trusted & Insured</span>
            <span className="flex items-center gap-2"><Star className="h-5 w-5 text-emerald-500"/> 5-Star Rated</span>
            <span className="flex items-center gap-2"><Clock className="h-5 w-5 text-emerald-500"/> Easy Online Booking</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
          <p className="text-slate-500 mt-3 text-lg">Top-tier cleaning solutions for every need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Home, title: "Standard Cleaning", desc: "Routine maintenance for kitchens, baths, and living areas." },
            { icon: Sparkles, title: "Deep Clean", desc: "Intensive scrub for hard-to-reach areas, baseboards, and appliances." },
            { icon: Building2, title: "Office Cleaning", desc: "Professional sanitation to keep your workspace productive." },
            { icon: Key, title: "Move-In / Move-Out", desc: "Detailed prep for your next home or new residents." }
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 border border-slate-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us & Testimonials */}
      <section className="bg-white border-y border-slate-200 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why People Trust Us</h2>
            <div className="space-y-6">
              {[
                { title: "Vetted & Trained Professionals", desc: "Every cleaner undergoes a strict background check and complete training." },
                { title: "100% Satisfaction Guaranteed", desc: "If you're not happy with our work, we'll re-clean it for free." },
                { title: "Eco-Friendly Products Only", desc: "We use non-toxic, environmentally safe products upon request." },
                { title: "Flexible Online Scheduling", desc: "Manage your bookings, reschedules, and cancellations completely online." }
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 leading-snug">{benefit.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div id="reviews" className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Hear From Our Clients</h2>
            <div className="grid gap-6">
              {[
                { name: "Sarah J.", role: "Homeowner", text: "The best cleaning service in the city. Professional, punctual, and my house has never looked better!" },
                { name: "Michael C.", role: "Office Manager", text: "We switched to PristineClean for our office two months ago and the difference is night and day. Reliable and thorough." },
                { name: "Emily R.", role: "Busy Mom", text: "Having PristineClean come every two weeks is a lifesaver. The attention to detail is fantastic." }
              ].map((review, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex gap-1 mb-3 text-emerald-500">
                    <Star className="h-4 w-4 fill-emerald-500" />
                    <Star className="h-4 w-4 fill-emerald-500" />
                    <Star className="h-4 w-4 fill-emerald-500" />
                    <Star className="h-4 w-4 fill-emerald-500" />
                    <Star className="h-4 w-4 fill-emerald-500" />
                  </div>
                  <p className="text-slate-600 italic mb-4">"{review.text}"</p>
                  <p className="font-semibold text-slate-900 text-sm">— {review.name}, <span className="font-normal text-slate-500">{review.role}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">Transparent Pricing</h2>
        <p className="text-slate-500 text-lg mb-12">No hidden fees, simple flat-rate starting points.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Basic Package", details: "Perfect for regular upkeep", price: "$99", popular: false },
            { name: "Standard Package", details: "A thorough clean covering all essentials", price: "$149", popular: true },
            { name: "Deep Cleaning", details: "Top-to-bottom clean for a spotless space", price: "$249", popular: false }
          ].map((pkg, i) => (
            <div key={i} className={`bg-white rounded-xl border p-8 flex flex-col ${pkg.popular ? 'border-blue-600 ring-1 ring-blue-600 shadow-md relative' : 'border-slate-200'}`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              )}
              <h4 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
              <p className="text-slate-500 text-sm mb-6 flex-1">{pkg.details}</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-6">
                {pkg.price}<span className="text-base font-medium text-slate-500">/start</span>
              </div>
              <a href="#book" className={`w-full py-3 rounded-lg font-bold transition-colors block ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="bg-white border-y border-slate-200 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="flex justify-between items-center w-full p-5 text-left font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  {faq.q}
                  {activeFaq === i ? <ChevronUp className="h-5 w-5 text-slate-500" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
                </button>
                {activeFaq === i && (
                  <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-200 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Booking Form / Calculator */}
      <section id="book" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Form */}
          <div className="p-8 md:p-10 flex-1 border-b md:border-b-0 md:border-r border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Build Your Cleaning</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Type</label>
                <select 
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full p-3 bg-[#FAFAFA] border border-slate-200 rounded-lg text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm cursor-pointer"
                >
                  <option>Standard Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Move-In / Move-Out</option>
                  <option>Office Cleaning</option>
                </select>
              </div>

              {serviceType !== 'Office Cleaning' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Bedrooms</label>
                    <div className="flex items-center justify-between bg-[#FAFAFA] border border-slate-200 rounded-lg p-2 shadow-sm">
                      <button type="button" onClick={() => setRooms(Math.max(1, rooms - 1))} className="p-2 hover:bg-slate-200 rounded"><Minus className="h-4 w-4"/></button>
                      <span className="font-semibold text-slate-900">{rooms}</span>
                      <button type="button" onClick={() => setRooms(Math.min(10, rooms + 1))} className="p-2 hover:bg-slate-200 rounded"><Plus className="h-4 w-4"/></button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Bathrooms</label>
                    <div className="flex items-center justify-between bg-[#FAFAFA] border border-slate-200 rounded-lg p-2 shadow-sm">
                      <button type="button" onClick={() => setBaths(Math.max(1, baths - 1))} className="p-2 hover:bg-slate-200 rounded"><Minus className="h-4 w-4"/></button>
                      <span className="font-semibold text-slate-900">{baths}</span>
                      <button type="button" onClick={() => setBaths(Math.min(10, baths + 1))} className="p-2 hover:bg-slate-200 rounded"><Plus className="h-4 w-4"/></button>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Extras</label>
                <div className="space-y-2">
                  {[
                    { key: 'windows', label: 'Interior Windows', price: '+$30' },
                    { key: 'oven', label: 'Inside Oven', price: '+$25' },
                    { key: 'fridge', label: 'Inside Fridge', price: '+$25' },
                  ].map((extra) => (
                    <label key={extra.key} className="flex justify-between items-center p-3 rounded-lg border border-slate-200 bg-[#FAFAFA] cursor-pointer hover:border-blue-300 transition-colors">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={extras[extra.key as keyof typeof extras]}
                          onChange={() => toggleExtra(extra.key as keyof typeof extras)}
                          className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-600"
                        />
                        <span className="text-sm text-slate-800 font-medium">{extra.label}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-500">{extra.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Right Summary */}
          <div className="p-8 md:p-10 md:w-80 bg-slate-50 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Estimated Total</h3>
              <div className="text-5xl font-extrabold text-blue-600 mb-2">${estimatedPrice}</div>
              <p className="text-sm text-slate-500 mb-8">Based on your selections. Final price may vary slightly.</p>
            </div>
            
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
              <input type="date" className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-700" />
              
              <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg transition-colors shadow-sm">
                Confirm Booking
              </button>
              <p className="text-xs text-center mt-4 text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="h-4 w-4"/> Secure & Encrypted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-extrabold text-xl text-white tracking-tight flex items-center gap-2 uppercase mb-4">
              <Sparkles className="h-5 w-5" />
              PristineClean
            </span>
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              Providing top-tier, reliable cleaning services to help you reclaim your time and enjoy a spotless home.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@pristineclean.com</p>
              <p className="flex items-center gap-1 mt-2 text-emerald-400"><MapPin className="h-4 w-4"/> Serving the Metropolitan Region</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#services" className="hover:text-white transition-colors block w-fit">Our Services</a>
              <a href="#pricing" className="hover:text-white transition-colors block w-fit">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors block w-fit">FAQs</a>
              <a href="#book" className="hover:text-white transition-colors block w-fit">Book Now</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} PristineClean Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
