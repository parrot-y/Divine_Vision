"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const categoryPromos = [
  {
    id: 1,
    title: "Mabati",
    background: "bg-gradient-to-br from-blue-100 to-blue-200",
    description: "Quality roofing materials for your construction needs",
    features: ["Corrugated Sheets", "Metal Roofing", "Durable Materials"],
    image: "🏠",
    color: "text-blue-800",
  },
  {
    id: 2,
    title: "Paints",
    background: "bg-gradient-to-br from-blue-50 to-purple-100",
    description: "Transform your space with premium paint solutions",
    features: ["Interior Paints", "Exterior Paints", "Specialty Finishes"],
    image: "🎨",
    color: "text-purple-800",
  },
  {
    id: 3,
    title: "Cement",
    background: "bg-gradient-to-br from-green-100 to-green-200",
    description: "Strong foundation for your building projects",
    features: ["Portland Cement", "Quick Setting", "White Cement"],
    image: "🏗️",
    color: "text-green-800",
  },
  {
    id: 4,
    title: "Lighting",
    background: "bg-gradient-to-br from-amber-100 to-orange-100",
    description: "Illuminate your space with modern lighting solutions",
    features: ["LED Lights", "Chandeliers", "Outdoor Lighting"],
    image: "💡",
    color: "text-orange-800",
  },
];

export default function CategoryPromos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of building materials and hardware
            supplies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryPromos.map((category) => (
            <div
              key={category.id}
              className={`${category.background} rounded-lg p-6 h-80 relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 text-6xl">
                  {category.image}
                </div>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Title */}
                <h3 className={`text-xl font-bold ${category.color} mb-3`}>
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-6 flex-grow">
                  {category.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {category.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`mt-auto bg-white ${category.color} px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-between group-hover:translate-x-1`}
                >
                  <span>Explore {category.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 opacity-20">
                <div className="text-8xl">{category.image}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
