"use client";

import React from 'react';

export default function Home() {
  const getQuote = (name: string, price: number) => {
    const p = price && price > 0 ? ` (KES ${price.toLocaleString()})` : '';
    const msg = `Hi! I'm interested in ${name}${p}. Can you provide pricing and availability?`;
    const url = `https://wa.me/254708650558?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Top Notice Bar */}
      <div className="w-full bg-[#FFBF00] text-gray-900">
        <div className="max-w-screen-4xl mx-auto px-4 md:px-8">
          <div className="hidden lg:flex justify-between items-center py-2">
            <div className="flex items-center space-x-3 text-xs font-medium">
              <a href="#about" className="text-gray-800 hover:text-gray-900 pr-2 border-r border-gray-900">About us</a>
              <a href="#tracking" className="text-gray-800 hover:text-gray-900 pr-2 border-r border-gray-900">Order Tracking</a>
              <a href="tel:+254708650558" className="text-gray-800 hover:text-gray-900">📞 +254 708 650 558</a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative overflow-hidden flex items-center">
                <div className="flex items-center text-gray-800 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375A1.125 1.125 0 0 1 2.25 17.625V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold">Delivery on orders over Ksh 5,000</h3>
              </div>
            </div>
            <a href="#offers" className="hidden lg:flex text-sm text-pink-500 font-extrabold">Special Offers</a>
          </div>
        </div>
      </div>

      {/* Header / Search */}
      <div className="max-w-screen-4xl mx-auto px-3 sm:px-4 md:px-8 py-2">
        <div className="flex items-center justify-between py-2">
          <a href="/" className="flex items-center gap-2 group" aria-label="Divine Vision - Home">
            <div className="w-9 h-9 rounded-md bg-[#064b67] grid place-items-center text-white font-bold">DV</div>
            <div className="leading-tight">
              <div className="text-base md:text-lg font-extrabold text-[#064b67]">Divine Vision</div>
              <div className="text-xs text-gray-700">Supplies Ltd</div>
            </div>
          </a>
          <section className="hidden md:block flex-1 max-w-2xl">
            <form role="search" className="relative group">
              <label htmlFor="desktop-search" className="sr-only">Search for products</label>
              <input id="desktop-search" type="search" placeholder="Search for products" className="w-full py-3 pl-12 pr-14 border border-[#064b67] rounded-md focus:ring-2 focus:ring-[#FFBF00] focus:border-[#FFBF00] text-[#064b67] placeholder-[#064b67]/70 transition-all" />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#064b67]/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lucide lucide-search"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
              </div>
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 bg-[#FFBF00] p-1 rounded-md disabled:opacity-50">Search</button>
            </form>
          </section>
          <div className="hidden md:flex items-center gap-2">
            <a href="#contact" className="px-3 py-2 rounded-md text-[#064b67] hover:bg-gray-100">Contact</a>
            <a href="#cart" className="px-3 py-2 rounded-md text-[#064b67] hover:bg-gray-100">Cart</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-container bg-gray-100">
        <div className="max-w-screen-4xl mx-auto px-3 sm:px-4 md:px-8 py-4 md:py-8">
          <img className="w-full rounded-lg hero-image" alt="Hero" src="https://aanddstore.co.ke/_app/immutable/assets/1.C6bOKFJH.webp" />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-screen-4xl mx-auto px-3 sm:px-4 md:px-8 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#064b67] mb-4">Shop by Category</h2>
        <div className="category-grid">
          {/* Card */}
          <a href="#" className="product-card">
            <img src="https://aanddstore.co.ke/_app/immutable/assets/v1.pXkGZZHr.webp" alt="Roofing & Mabati" />
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">Roofing & Mabati</div>
            </div>
          </a>
          {/* Card */}
          <a href="#" className="product-card">
            <img src="https://aanddstore.co.ke/_app/immutable/assets/v2.gkABXjH_.webp" alt="Cement" />
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">Cement</div>
            </div>
          </a>
          {/* Card */}
          <a href="#" className="product-card">
            <img src="https://aanddstore.co.ke/_app/immutable/assets/banns.CYbIrdJZ.webp" alt="Steel & Rebar" />
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">Steel & Rebar</div>
            </div>
          </a>
          {/* Card */}
          <a href="#" className="product-card">
            <img src="https://aanddstore.co.ke/_app/immutable/assets/1m.CoIbpJ0J.webp" alt="Electrical" />
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">Electrical</div>
            </div>
          </a>
          {/* More placeholders repeating for grid symmetry */}
          <a href="#" className="product-card">
            <img src="https://aanddstore.co.ke/_app/immutable/assets/1.C6bOKFJH.webp" alt="Paint & Finishes" />
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">Paint & Finishes</div>
            </div>
          </a>
          <a href="#" className="product-card">
            <img src="https://aanddstore.co.ke/_app/immutable/assets/v1.pXkGZZHr.webp" alt="PVC Floors" />
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">PVC Floors</div>
            </div>
          </a>
          <a href="#" className="product-card">
            <img src="https://aanddstore.co.ke/_app/immutable/assets/v2.gkABXjH_.webp" alt="Tools" />
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">Tools</div>
            </div>
          </a>
          <a href="#" className="product-card">
            <img src="https://aanddstore.co.ke/_app/immutable/assets/banns.CYbIrdJZ.webp" alt="Plumbing" />
            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">Plumbing</div>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-screen-4xl mx-auto px-3 sm:px-4 md:px-8 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#064b67] mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Example Product Card */}
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1581091014534-8987c1d647c1?q=80&w=800&auto=format&fit=crop" alt="Simba Cement 32.5R" />
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-900">Simba Cement 32.5R</div>
              <div className="text-sm text-gray-600">KES 855</div>
              <button className="mt-3 inline-flex items-center gap-2 px-3 py-2 bg-[#FFBF00] text-gray-900 rounded-md" onClick={() => getQuote('Simba Cement 32.5R', 855)}>Get Quote</button>
            </div>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="Dumuzas Mabati" />
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-900">Dumuzas Mabati</div>
              <div className="text-sm text-gray-600">From KES 850/sheet</div>
              <button className="mt-3 inline-flex items-center gap-2 px-3 py-2 bg-[#FFBF00] text-gray-900 rounded-md" onClick={() => getQuote('Dumuzas Mabati', 0)}>Get Quote</button>
            </div>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1581090126851-9ce9f3b2f76c?q=80&w=800&auto=format&fit=crop" alt="Steel Reinforcement Bars" />
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-900">Steel Reinforcement Bars</div>
              <div className="text-sm text-gray-600">Various sizes</div>
              <button className="mt-3 inline-flex items-center gap-2 px-3 py-2 bg-[#FFBF00] text-gray-900 rounded-md" onClick={() => getQuote('Steel Reinforcement Bars', 0)}>Get Quote</button>
            </div>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?q=80&w=800&auto=format&fit=crop" alt="Professional Tools" />
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-900">Professional Tools</div>
              <div className="text-sm text-gray-600">DIY and Contractor</div>
              <button className="mt-3 inline-flex items-center gap-2 px-3 py-2 bg-[#FFBF00] text-gray-900 rounded-md" onClick={() => getQuote('Professional Tools', 0)}>Get Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#064b67] text-white mt-10">
        <div className="max-w-screen-4xl mx-auto px-4 md:px-8 py-8 grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-lg font-extrabold">Divine Vision Supplies Ltd</div>
            <div className="text-sm opacity-90">Banana, Kimabu</div>
          </div>
          <div>
            <div className="text-sm">P.O. Box 25694 - 00100 Nbo.</div>
            <div className="text-sm">Tel: +254 708 650 558</div>
            <div className="text-sm">+254 781 405 064</div>
            <div className="text-sm">WhatsApp: +254 708 650 558</div>
          </div>
          <div>
            <div className="text-sm">We Work. You Order. We Deliver.</div>
          </div>
        </div>
        <div className="text-center text-xs py-3 bg-[#053e53]">© {new Date().getFullYear()} Divine Vision Supplies Ltd. All rights reserved.</div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button className="whatsapp-float" aria-label="WhatsApp" onClick={() => window.open('https://wa.me/254708650558','_blank')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 11.993C0 5.372 5.373 0 11.994 0 18.616 0 24 5.372 24 11.993 24 18.615 18.616 24 11.994 24a11.9 11.9 0 0 1-5.651-1.448L.057 24zM6.6 20.201c1.676.995 3.276 1.591 5.392 1.593 5.448 0 9.89-4.434 9.89-9.9 0-5.467-4.442-9.9-9.89-9.9-5.46 0-9.894 4.433-9.894 9.9 0 2.225.651 3.891 1.746 5.614l-.999 3.648 3.755-1.955zm11.539-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
      </button>
    </div>
  );
}
