"use client";

import React from "react";
import { Star, ShoppingCart, MessageCircle } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  image: string;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  rating,
  reviews,
  inStock,
  image,
  category,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello! I would like to order:\n\nProduct: ${name}\nPrice: Ksh ${price.toLocaleString()}\nCategory: ${category}\n\nPlease provide delivery information and payment details.`;
    const whatsappUrl = `https://wa.me/254795349608?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    // Add to cart functionality can be implemented here
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md product-card overflow-hidden border border-gray-200">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-4xl">
            {category === "Cement" && "🏗️"}
            {category === "Mabati" && "🏠"}
            {category === "Paints" && "🎨"}
            {category === "Tools" && "🔨"}
            {category === "Lighting" && "💡"}
            {category === "Plumbing" && "🔧"}
            {category === "Tiles" && "🧱"}
            {category === "Bathroom" && "🛁"}
            {category === "Electrical" && "⚡"}
            {category === "Outdoor" && "🌳"}
            {![
              "Cement",
              "Mabati",
              "Paints",
              "Tools",
              "Lighting",
              "Plumbing",
              "Tiles",
              "Bathroom",
              "Electrical",
              "Outdoor",
            ].includes(category) && "📦"}
          </div>
        </div>

        {/* Stock Status */}
        <div className="absolute top-2 left-2">
          <div
            className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                inStock ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <span>{inStock ? "In Stock" : "Out of Stock"}</span>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          <button className="bg-white/90 hover:bg-white rounded-full p-1.5 transition-colors">
            <Star className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 leading-tight">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>

        {/* Price */}
        <div className="text-lg font-bold text-gray-800 mb-3">
          Ksh {price.toLocaleString()}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {/* WhatsApp Order Button */}
          <button
            onClick={handleWhatsAppOrder}
            className={`w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg font-medium transition-colors ${
              inStock
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!inStock}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order via WhatsApp</span>
          </button>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors border ${
              inStock
                ? "bg-white text-secondary-600 border-secondary-600 hover:bg-secondary-50"
                : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            }`}
            disabled={!inStock}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
