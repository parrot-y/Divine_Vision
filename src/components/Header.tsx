"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingCart,
  ChevronDown,
  Lock,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Yellow Background */}
      <div className="bg-primary-400 text-gray-800 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="hover:text-gray-600 cursor-pointer">About us</span>
            <span>|</span>
            <span className="hover:text-gray-600 cursor-pointer">
              Order Tracking
            </span>
            <span>|</span>
            <span className="font-semibold text-gray-900">📞 0795-349-608</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span className="text-xs">
                Safe & Reliable products with warranty
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs">Become a Member</span>
              <button className="bg-secondary-600 text-white px-3 py-1 rounded text-xs hover:bg-secondary-700 transition-colors font-medium">
                Join Now &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - White Background */}
      <div className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Logo and Navigation Links */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <div className="text-2xl font-bold text-gray-800">
                <span className="text-gray-600">DIVINE</span>
                <span className="text-gray-800"> VISION</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="#"
                className="text-accent-pink font-medium hover:text-accent-pink/80 transition-colors"
              >
                Special Offers
              </a>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                  <span>Categories</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown menu would go here */}
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Account</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">Cart</span>
                <span className="absolute -top-2 -right-2 bg-accent-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3 pt-4">
                <a
                  href="#"
                  className="text-accent-pink font-medium hover:text-accent-pink/80 transition-colors"
                >
                  Special Offers
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
