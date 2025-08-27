"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Truck, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const handleWhatsAppOrder = () => {
    const message = `Hello! I would like to place an order for cement and other building materials.\n\nPlease provide:\n- Available cement types and prices\n- Delivery information\n- Payment options\n\nThank you!`;
    const whatsappUrl = `https://wa.me/254795349608?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-secondary-600 to-secondary-700 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Panel - Product Display */}
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="space-y-4">
                {/* Cement Products */}
                <div className="flex items-center space-x-4 p-3 bg-white/20 rounded border border-white/10">
                  <div className="w-16 h-16 bg-yellow-200 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800 text-center">
                      KP. DIAMOND
                      <br />
                      MOMBASA
                      <br />
                      CEMENT
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">NYUMBA</div>
                    <div className="text-xs opacity-80">
                      Premium Quality Cement
                    </div>
                    <div className="text-xs font-bold text-yellow-300">Ksh 855</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-white/20 rounded border border-white/10">
                  <div className="w-16 h-16 bg-blue-300 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-white text-center">
                      BLUE
                      <br />
                      TRIANGLE
                      <br />
                      Cement
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Blue Triangle</div>
                    <div className="text-xs opacity-80">Trusted Brand</div>
                    <div className="text-xs font-bold text-yellow-300">Ksh 750</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-white/20 rounded border border-white/10">
                  <div className="w-16 h-16 bg-yellow-300 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800 text-center">
                      NATIONAL
                      <br />
                      CEMENT
                      <br />
                      SIMBA
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Simba Cement</div>
                    <div className="text-xs opacity-80">
                      Strength & Durability
                    </div>
                    <div className="text-xs font-bold text-yellow-300">Ksh 735</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Panel - Main Promotion */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Need some cement for your building project?
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Same-Day Dispatch on Select Orders
            </p>

            <div className="relative mb-8">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <div className="flex items-center justify-center space-x-4">
                  <Truck className="w-12 h-12 text-yellow-300" />
                  <div className="text-left">
                    <div className="text-sm font-semibold">Fast Delivery</div>
                    <div className="text-xs opacity-80">
                      Same day dispatch available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>ORDER VIA WHATSAPP</span>
              </button>
              
              <button className="bg-white text-secondary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <span>BROWSE PRODUCTS</span>
                <div className="w-4 h-4 border-2 border-secondary-600 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-secondary-600 rounded-full"></div>
                </div>
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center lg:justify-start space-x-2 mt-8">
              {[1, 2, 3, 4].map((dot) => (
                <div key={dot} className="w-3 h-3 bg-white rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Right Panel - Secondary Promotion */}
          <div className="relative">
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="bg-orange-100 text-gray-800 rounded-lg p-6 border border-orange-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold mb-2">
                  DIVINE VISION TRADE & HARDWARE
                </h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  Neuce Paints
                </div>
                <div className="text-sm">
                  <span className="italic">New Just In</span>
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded ml-2 text-xs font-bold">
                    PROMO
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Wood staining</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Paint Restoration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Color Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Decorative Finishes</span>
                </div>
              </div>

              <div className="text-sm mb-4">
                <div>The Triple Two Address Eastern Bypass Kamakis</div>
                <div className="flex items-center space-x-2 mt-2">
                  <span>📞</span>
                  <span>Our Phone: 0795349608</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold">NEUCE</span>
                </div>
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold">
                    WOOD
                    <br />
                    NEUCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <div className="grid grid-cols-8 gap-2 p-8">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
