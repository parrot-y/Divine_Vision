"use client";

import React from "react";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center">
        <div className="text-9xl font-bold text-white transform rotate-12">
          DIVINE VISION
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-white text-teal-800 px-3 py-1 rounded font-bold text-sm">
                  DIVINE VISION
                </div>
              </div>
              <p className="text-teal-100 text-sm leading-relaxed">
                Your trusted partner in construction and building materials.
                Quality products, competitive prices, and reliable delivery
                across Kenya.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  <div className="w-5 h-5 bg-teal-100 rounded flex items-center justify-center">
                    <span className="text-teal-800 text-xs font-bold">T</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Product Categories */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Product Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Building Materials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Home and Decor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Electrical
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Tile and Sanitary
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Plumbing
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Track Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors"
                  >
                    Bulk Orders
                  </a>
                </li>
              </ul>
            </div>

            {/* Visit Us */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Visit Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-teal-300 mt-0.5" />
                  <span className="text-teal-100">
                    Triple Two Address-Eastern Bypass, Ruiru, Kenya
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span className="text-teal-100">0795349608</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-teal-300" />
                    <span className="text-teal-100 font-medium">
                      Operating Hours:
                    </span>
                  </div>
                  <div className="ml-6 space-y-1 text-teal-100">
                    <div>Mon - Fri: 7:30 AM - 6:00 PM</div>
                    <div>Sat: 7:30 AM - 4:00 PM</div>
                    <div>Sun: 9:00 AM - 3:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-teal-300" />
                  <span className="text-teal-100">
                    paleah.sales@divinevision.co.ke
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-teal-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-teal-100">
                © 2025 Divine Vision Store. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
