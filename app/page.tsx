'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Check, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Award, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export default function Home() {
  const WHATSAPP_NUMBER = '917057249698';
  const WHATSAPP_MSG = encodeURIComponent(
    'Hello Vcline Solutions LLP, I am interested in your paper bag and packaging solutions. I would like to discuss my requirement.'
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    productCategory: 'Printed Paper Bags',
    quantity: '',
    city: '',
    specifications: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send quotation request. Please try WhatsApp directly.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please reach out via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    {
      id: '01',
      title: 'Paper Bags',
      desc: 'Versatile paper bags for everyday business packaging and retail carry.',
      tag: 'Versatile',
      image: '/Paper Bags.PNG',
    },
    {
      id: '02',
      title: 'Printed Paper Bags',
      desc: 'Put your brand in customers’ hands with high-definition custom logo printing.',
      tag: 'Branded',
      image: '/Printed Paper Bags.PNG',
    },
    {
      id: '03',
      title: 'Kraft Grocery & Packaging Bags',
      desc: 'Practical, high-strength eco-friendly kraft formats for groceries and daily retail.',
      tag: 'Eco-Friendly',
      image: '/Kraft Grocery & Packaging Bags.PNG',
    },
    {
      id: '04',
      title: 'Shopping Bags',
      desc: 'Premium finish and durable twisted/flat handles for fashion boutiques and retail.',
      tag: 'Premium Finish',
      image: '/Shopping Bags.PNG',
    },
    {
      id: '05',
      title: 'White Paper Bags',
      desc: 'Clean, elegant bleach-kraft paper bags designed for luxury and specialty stores.',
      tag: 'Elegant',
      image: '/White Paper Bags.PNG',
    },
    {
      id: '06',
      title: 'Custom Gift & Event Bags',
      desc: 'High-end custom branded paper bags tailored for exhibitions, corporate gifting, and special events.',
      tag: 'Gifting',
      image: '/Custom Gift & Event Bags.PNG',
    },
  ];

  const industries = [
    { id: '01', title: 'Jewellery', desc: 'Premium branded bags for luxury jewellery stores, boutiques, and gifting.' },
    { id: '02', title: 'Fashion & Clothing', desc: 'Custom shopping bags designed to keep your brand visible beyond the store.' },
    { id: '03', title: 'Cafes & Restaurants', desc: 'Grease-resistant kraft and paper packaging for takeaway and food-service.' },
    { id: '04', title: 'Hotels & Hospitality', desc: 'Branded packaging solutions for amenities, guest laundry, and events.' },
    { id: '05', title: 'Retail & Supermarkets', desc: 'Heavy-duty grocery carry-bags with high weight-bearing durability.' },
    { id: '06', title: 'Events & Corporate Gifting', desc: 'Custom-finish event giveaway bags designed to leave a lasting impression.' },
  ];

  const specs = [
    { title: 'Bag Size & Dimensions', detail: 'Fully customized height, width, and gusset depths' },
    { title: 'Paper Material & GSM', detail: 'Brown Kraft, Virgin Kraft, Bleached White (80–250+ GSM)' },
    { title: 'Printing Options', detail: 'Offset, Flexo, Screen Printing, Foil Stamping, Spot UV' },
    { title: 'Handle Styles', detail: 'Twisted Paper, Flat Paper Tape, D-Cut, Cotton Rope, Ribbon' },
    { title: 'Branding & Finishing', detail: 'Matte/Gloss Lamination, Embossing, Full Edge-to-Edge Print' },
    { title: 'Order Quantity', detail: 'Flexible batch runs to bulk enterprise wholesale dispatch' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1E2522] selection:bg-[#C86D3C] selection:text-white">
      {/* Top Bar / Trust Banner */}
      <div className="bg-[#121E19] text-[#E0E7E3] text-xs py-2 px-4 border-b border-[#1E2D27]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Verified IndiaMART Supplier
            </span>
            <span className="hidden sm:inline text-zinc-400">• GST: 27AATFV1001B1ZJ</span>
            <span className="hidden sm:inline text-zinc-400">• Pune, Maharashtra</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="flex items-center gap-1 font-semibold text-emerald-300">★ 4.8 / 5 Rating</span>
            <span>83% Response Rate</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#172520]/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-white rounded-md flex items-center justify-center p-1 shadow-sm border border-transparent group-hover:border-[#C86D3C] transition-all overflow-hidden shrink-0">
              <Image 
                src="/logo.jpg" 
                alt="VCline Solutions LLP Logo" 
                width={44} 
                height={44} 
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-lg block leading-tight text-white">VCLINE</span>
              <span className="text-[10px] text-zinc-400 tracking-widest uppercase block">Solutions LLP</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#industries" className="hover:text-white transition-colors">Industries</a>
            <a href="#customization" className="hover:text-white transition-colors">Customization</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm text-zinc-300 hover:text-white px-3 py-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Us
            </a>
            <a
              href="#quote"
              className="bg-[#C86D3C] hover:bg-[#b55e30] text-white px-5 py-2.5 text-sm font-semibold rounded-none flex items-center gap-2 transition-all shadow-sm"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#172520] text-white pt-16 pb-24 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-[#C86D3C] font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Packaging, With Purpose
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
              Paper Bags <br />
              <span className="italic font-serif font-light text-[#D4986A]">That Carry</span> <br />
              Your Brand.
            </h1>

            <p className="text-zinc-300 text-lg max-w-xl font-normal leading-relaxed">
              Custom paper bags, printed grocery packaging, and retail carrier solutions designed around your exact business specifications.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="bg-[#C86D3C] hover:bg-[#b55e30] text-white px-7 py-3.5 text-base font-semibold flex items-center gap-2 transition-all shadow-md"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                className="border border-white/20 hover:border-white/50 bg-white/5 text-white px-7 py-3.5 text-base font-medium flex items-center gap-2 transition-all"
              >
                Explore Products
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl font-bold">2020</p>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Established</p>
              </div>
              <div>
                <p className="text-2xl font-bold">4.8 / 5</p>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">IndiaMART Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold">83%</p>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Response Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative border border-white/15 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#22352E] border border-white/10">
                <Image
                  src="/Main.jpg"
                  alt="VCline Solutions Custom Paper Bags"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Option A Trust Strip */}
              <div className="mt-4 p-4 bg-[#121E19] border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider">Quality Assured</p>
                  <p className="text-sm font-semibold text-white">100% On-Spec Custom Manufacturing</p>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 font-semibold uppercase tracking-wider">
                  Pan-India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C86D3C]">Our Range</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
            Paper bags for every business moment.
          </h2>
          <p className="text-zinc-600 mt-3 text-base">
            Explore packaging options for retail, food, hospitality, gifting, and enterprise carry-out needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-[#E2E0D8] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group"
            >
              <div>
                <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden border-b border-[#E2E0D8]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 text-[11px] bg-black/75 backdrop-blur-sm text-white px-2 py-0.5 font-medium uppercase tracking-wider">
                    {p.tag}
                  </span>
                  <span className="absolute bottom-3 left-3 text-xs font-mono font-bold text-white bg-black/60 px-2 py-0.5">
                    {p.id}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#C86D3C] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#quote"
                  className="text-xs font-bold uppercase tracking-wider text-[#C86D3C] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  Request Pricing <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="industries" className="py-24 px-6 bg-[#ECEAE3] border-y border-[#DDD9CE]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C86D3C]">Built For Business</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
              Packaging for different industry needs.
            </h2>
            <p className="text-zinc-600 mt-3 text-base">
              Tailored bag strength, sizes, and print styling aligned with your business category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.id} className="bg-white border border-[#DDD9CE] p-8">
                <span className="text-xs font-mono font-semibold text-[#C86D3C]">{ind.id}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{ind.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Details */}
      <section id="customization" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C86D3C]">Make It Yours</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Your brand. <br />
              Your bag.
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed">
              We engineer custom paper packaging around your exact dimensions, weight support, and brand aesthetic requirements.
            </p>
            <div className="pt-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-[#172520] hover:bg-[#233830] text-white px-6 py-3 text-sm font-semibold transition-colors"
              >
                Discuss Specifications <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#E2E0D8] p-8 sm:p-10">
            <h3 className="font-bold text-lg mb-6 pb-4 border-b border-zinc-100">Configurable Parameters</h3>
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {specs.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1E2522]">
                    <Check className="w-4 h-4 text-[#C86D3C] shrink-0" />
                    {s.title}
                  </div>
                  <p className="text-xs text-zinc-500 pl-6">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation / Get a Quote Form */}
      <section id="quote" className="py-24 px-6 bg-[#172520] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C86D3C]">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
              Request a B2B Quotation
            </h2>
            <p className="text-zinc-400 mt-3 text-sm">
              Fill in your specifications below. Our sales team will get back to you with rates and lead times within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#1C2C26] border border-emerald-500/40 p-10 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white">Thank You for Your Requirement</h3>
              <p className="text-zinc-300 text-sm max-w-md mx-auto">
                We have recorded your specifications. Our team will review your order details and share an estimated quote within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#C86D3C] underline hover:text-[#e0824e] pt-2"
              >
                Submit another requirement
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#1C2C26] border border-white/10 p-8 sm:p-10 space-y-6 shadow-xl">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#121E19] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C86D3C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Business / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Sharma Apparels"
                    className="w-full bg-[#121E19] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C86D3C]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#121E19] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C86D3C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full bg-[#121E19] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C86D3C]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Product Category
                  </label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full bg-[#121E19] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C86D3C]"
                  >
                    <option>Printed Paper Bags</option>
                    <option>Kraft Grocery Bags</option>
                    <option>Boutique Shopping Bags</option>
                    <option>White Paper Bags</option>
                    <option>Custom Gift & Event Bags</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 2,000 pcs"
                    className="w-full bg-[#121E19] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C86D3C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    City / Delivery Location
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Pune, Mumbai"
                    className="w-full bg-[#121E19] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C86D3C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Bag Dimensions & Custom Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  placeholder="Mention size (height x width x gusset), paper GSM preference, single/multi-color print, etc."
                  className="w-full bg-[#121E19] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C86D3C]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C86D3C] hover:bg-[#b55e30] disabled:opacity-60 text-white py-4 font-bold text-sm uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting Details...' : 'Submit Quotation Request'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* About Company Information */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C86D3C]">About VCline</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Verified B2B Paper Packaging Partner
            </h2>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Established in 2020, <strong>Vcline Solutions LLP</strong> is a trusted manufacturer and trader of paper bags, 
              kraft grocery containers, handles, and specialty paper packaging operating from Pune, Maharashtra.
            </p>
            <p className="text-zinc-600 leading-relaxed text-sm">
              We combine quality raw materials with precision printing to empower retail brands, restaurants, and hospitality businesses with sustainable, eco-friendly carry solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C86D3C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold">4.8 / 5 Rating</p>
                  <p className="text-xs text-zinc-500">IndiaMART verified reviews</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C86D3C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold">83% Response Rate</p>
                  <p className="text-xs text-zinc-500">Fast inquiry turnarounds</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#E2E0D8] p-8">
            <h3 className="font-bold text-base mb-4 text-[#1E2522]">Verified Statutory Credentials</h3>
            <div className="space-y-3 text-sm divide-y divide-zinc-100">
              <div className="flex justify-between py-2">
                <span className="text-zinc-500">Legal Entity</span>
                <span className="font-semibold text-zinc-800">Vcline Solutions LLP</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-500">Legal Status</span>
                <span className="font-semibold text-zinc-800">Limited Liability Partnership</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-500">GST Registration</span>
                <span className="font-mono font-semibold text-zinc-800">27AATFV1001B1ZJ</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-500">CIN Number</span>
                <span className="font-mono font-semibold text-zinc-800">AAT-5189</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-500">Location</span>
                <span className="font-semibold text-zinc-800">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#121E19] text-white border-t border-white/10 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-md flex items-center justify-center p-1 shadow-sm shrink-0 overflow-hidden">
                <Image 
                  src="/logo.jpg" 
                  alt="VCline Solutions LLP Logo" 
                  width={36} 
                  height={36} 
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="font-extrabold tracking-wider text-base block text-white leading-tight">VCLINE</span>
                <span className="text-[9px] text-zinc-400 tracking-widest uppercase block">Solutions LLP</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Custom paper bags, printed retail carriers, and sustainable B2B packaging solutions.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C86D3C] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#products" className="hover:text-white">Product Catalog</a></li>
              <li><a href="#industries" className="hover:text-white">Industry Solutions</a></li>
              <li><a href="#customization" className="hover:text-white">Custom Specifications</a></li>
              <li><a href="#about" className="hover:text-white">About the Firm</a></li>
              <li><a href="#quote" className="hover:text-white">Request Quotation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C86D3C] mb-4">Key Products</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Printed Paper Bags</li>
              <li>Kraft Grocery Bags</li>
              <li>Boutique Shopping Bags</li>
              <li>White Paper Bags</li>
              <li>Custom Gift & Event Bags</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C86D3C] mb-4">Contact Info</h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C86D3C] shrink-0" />
                Pune, Maharashtra, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C86D3C] shrink-0" />
                +91 7057249698
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                WhatsApp Direct Support
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
          <p>© 2026 Vcline Solutions LLP. All rights reserved.</p>
          <p>B2B Packaging Platform</p>
        </div>
      </footer>
    </div>
  );
}