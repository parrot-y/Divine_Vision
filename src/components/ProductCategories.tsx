"use client";

import React, { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Mabati",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-red-400 to-green-400",
    items: ["Corrugated Sheets", "Roofing Materials", "Metal Sheets"],
  },
  {
    id: 2,
    name: "Cement",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-yellow-200 to-orange-200",
    items: ["Portland Cement", "Quick Setting", "White Cement"],
  },
  {
    id: 3,
    name: "Steel Bars",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-gray-300 to-gray-500",
    items: ["Reinforcement Bars", "Construction Steel", "Rebar"],
  },
  {
    id: 4,
    name: "Hand Tools",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-blue-200 to-blue-400",
    items: ["Hammers", "Wrenches", "Pliers", "Screwdrivers"],
  },
  {
    id: 5,
    name: "Interior Paints",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-purple-200 to-pink-200",
    items: ["Wall Paints", "Ceiling Paints", "Textured Paints"],
  },
  {
    id: 6,
    name: "Wood Finish",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-amber-200 to-yellow-300",
    items: ["Varnishes", "Stains", "Wood Sealers"],
  },
  {
    id: 7,
    name: "Outdoor Lights",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-indigo-200 to-purple-300",
    items: ["Wall Lights", "Garden Lights", "Security Lights"],
  },
  {
    id: 8,
    name: "Panels & Bulbs",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-yellow-100 to-orange-100",
    items: ["LED Panels", "Light Bulbs", "Ceiling Lights"],
  },
  {
    id: 9,
    name: "PPR Pipes",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-green-200 to-blue-200",
    items: ["Water Pipes", "Fittings", "Plumbing"],
  },
  {
    id: 10,
    name: "Plumbing Fittings",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-orange-200 to-red-200",
    items: ["Valves", "Connectors", "Adapters"],
  },
  {
    id: 11,
    name: "Floor & Wall Tiles",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-gray-100 to-gray-300",
    items: ["Ceramic Tiles", "Porcelain Tiles", "Mosaic"],
  },
  {
    id: 12,
    name: "Bathroom Accessories",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-blue-100 to-indigo-100",
    items: ["Towel Rails", "Toilet Holders", "Mirrors"],
  },
  {
    id: 13,
    name: "Toilets",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-white to-gray-100",
    items: ["Wall Mounted", "Floor Mounted", "Bidets"],
  },
  {
    id: 14,
    name: "Taps",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-silver-200 to-gray-300",
    items: ["Kitchen Taps", "Bathroom Taps", "Shower Heads"],
  },
  {
    id: 15,
    name: "Home Interior",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-pink-100 to-purple-100",
    items: ["Decor Items", "Furniture", "Accessories"],
  },
  {
    id: 16,
    name: "Outdoor",
    image: "/api/placeholder/150/150",
    color: "bg-gradient-to-br from-green-100 to-blue-100",
    items: ["Garden Items", "Patio Furniture", "Outdoor Decor"],
  },
];

export default function ProductCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Explore Our Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From building materials to home improvement essentials, we have
            everything you need for your construction and renovation projects.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative">
                <div
                  className={`w-full aspect-square rounded-lg ${category.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">
                      {category.name === "Mabati" && "🏠"}
                      {category.name === "Cement" && "🏗️"}
                      {category.name === "Steel Bars" && "🔩"}
                      {category.name === "Hand Tools" && "🔨"}
                      {category.name === "Interior Paints" && "🎨"}
                      {category.name === "Wood Finish" && "🪵"}
                      {category.name === "Outdoor Lights" && "💡"}
                      {category.name === "Panels & Bulbs" && "⚡"}
                      {category.name === "PPR Pipes" && "🔧"}
                      {category.name === "Plumbing Fittings" && "🚰"}
                      {category.name === "Floor & Wall Tiles" && "🧱"}
                      {category.name === "Bathroom Accessories" && "🛁"}
                      {category.name === "Toilets" && "🚽"}
                      {category.name === "Taps" && "🚿"}
                      {category.name === "Home Interior" && "🏠"}
                      {category.name === "Outdoor" && "🌳"}
                    </div>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-secondary-600 transition-colors">
                  {category.name}
                </h3>
              </div>

              {/* Hover Tooltip */}
              {hoveredCategory === category.id && (
                <div className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-3 -mt-2 left-1/2 transform -translate-x-1/2 min-w-[200px]">
                  <div className="text-sm font-semibold text-gray-800 mb-2">
                    {category.name}
                  </div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-secondary-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-2 border-t border-gray-100">
                    <button className="w-full bg-secondary-600 text-white text-xs py-1 px-3 rounded hover:bg-secondary-700 transition-colors">
                      View Products
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
