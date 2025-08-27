"use client";

import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Divine Vision has consistently delivered top-quality materials for our construction projects. Their delivery is always on time, and their prices are competitive.",
    name: "John Kamau",
    role: "Construction Manager",
    location: "Nairobi",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "As a contractor, reliability is crucial. Divine Vision has never disappointed with their wide range of products and excellent customer service. They're my go-to supplier.",
    name: "Sarah Ochieng",
    role: "Independent Contractor",
    location: "Kisumu",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The bulk ordering process is seamless, and their technical team is always ready to provide expert advice. Great experience working with them.",
    name: "David Mutua",
    role: "Project Manager",
    location: "Mombasa",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Best prices for quality building materials in Nairobi. Their product range is extensive, and the staff is knowledgeable and helpful.",
    name: "Alice Wanjiku",
    role: "Property Developer",
    location: "Nairobi",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Their online ordering system makes it easy to get materials delivered to our construction sites. Very professional service!",
    name: "James Kiprop",
    role: "Site Manager",
    location: "Eldoret",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "Divine Vision Building Materials has provided top-quality materials for our construction projects. Their delivery is always on time, and their prices are competitive.",
    name: "Mary Njeri",
    role: "Architect",
    location: "Nakuru",
    rating: 5,
  },
];

const brands = [
  { name: "Simba Cement", logo: "🦁" },
  { name: "DEVKI GROUP", logo: "🏢" },
  { name: "Crown", logo: "👑" },
  { name: "INGCO", logo: "🔧" },
  { name: "Coninx", logo: "💧" },
  { name: "ASL Limited", logo: "⚡" },
  { name: "HONGDEFA", logo: "🏭" },
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what construction
            professionals and homeowners have to say about our products and
            services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <blockquote className="text-gray-700 text-sm mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Store Description */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Divine Vision Store offers you a wide range of building materials,
              hardware, electrical supplies and more that suit your needs at
              competitive prices. Skip traffic hours with our convenient online
              shopping experience. Explore all products and enjoy exclusive
              discounts and online offers. Your one-stop shop for all your
              construction and home improvement needs. Daily necessities are
              available with a wide selection of brands, from quality tools to
              professional-grade electrical supplies, building materials in
              different sizes, hardware accessories, and more. Enjoy fast
              shipping and easy returns. Divine Vision Store is more for you and
              for your projects.
            </p>
          </div>
        </div>

        {/* Brand Partners */}
        <div className="bg-teal-800 text-white py-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Our Trusted Partners</h3>
            <p className="text-teal-100">Quality brands you can trust</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 bg-white/10 rounded-lg p-4 min-w-[120px]"
              >
                <div className="text-3xl">{brand.logo}</div>
                <div className="text-sm font-medium text-center">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
