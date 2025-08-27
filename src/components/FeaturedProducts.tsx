"use client";

import React from "react";
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Nguvu Cement 32.5 50Kg",
    price: 855,
    rating: 4.5,
    reviews: 60,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Cement",
  },
  {
    id: "2",
    name: "Nyumba Cement 32.5 50Kg",
    price: 750,
    rating: 4.5,
    reviews: 61,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Cement",
  },
  {
    id: "3",
    name: "Simba Cement 32.5 50Kg",
    price: 735,
    rating: 4.5,
    reviews: 28,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Cement",
  },
  {
    id: "4",
    name: "Maisha Aluzinc 3Mtrs",
    price: 818,
    rating: 4.5,
    reviews: 16,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Mabati",
  },
  {
    id: "5",
    name: "Dumu T.Red Resincot CX 2.5 Mtrs",
    price: 1780,
    rating: 4.5,
    reviews: 90,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Mabati",
  },
  {
    id: "6",
    name: "Dumu Maasai Red CX 3Mtrs",
    price: 1760,
    rating: 4.5,
    reviews: 72,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Mabati",
  },
  {
    id: "7",
    name: "DUMU SKYBLUE RESINCOT CX 2MTRS",
    price: 1440,
    rating: 4.5,
    reviews: 44,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Mabati",
  },
  {
    id: "8",
    name: "KENTANK CYLINDRICAL 1000 LTRS WATER TANK",
    price: 7300,
    rating: 4.5,
    reviews: 34,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Plumbing",
  },
  {
    id: "9",
    name: "BCL-4335C Bathroom Cabinet + Mirror Black",
    price: 7350,
    rating: 4.5,
    reviews: 52,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Bathroom",
  },
  {
    id: "10",
    name: "Chandelier-18005/6+3",
    price: 53000,
    rating: 4.5,
    reviews: 93,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Lighting",
  },
  {
    id: "11",
    name: "BULB LED Tronic 7W B22 DL LE 0722-DL",
    price: 125,
    rating: 4.5,
    reviews: 88,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Electrical",
  },
  {
    id: "12",
    name: "ENDURANCE-Neucegold Silicone Base 3 20LT",
    price: 10500,
    rating: 4.5,
    reviews: 103,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Paints",
  },
  {
    id: "13",
    name: "Plascon Dampseal paint 4L",
    price: 3120,
    rating: 4.5,
    reviews: 26,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Paints",
  },
  {
    id: "14",
    name: "BELNEUCE Acrylic Covermat-White 20LT",
    price: 4000,
    rating: 4.5,
    reviews: 102,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Paints",
  },
  {
    id: "15",
    name: "WOODEN PVC TILES 60X15 44PCS-W02",
    price: 2800,
    rating: 4.5,
    reviews: 58,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Tiles",
  },
  {
    id: "16",
    name: "Castelone Gris 12X60 H/G Porcelain Floor Tiles 2pcs",
    price: 4580,
    rating: 4.5,
    reviews: 36,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Tiles",
  },
  {
    id: "17",
    name: "Dumu Zas Mabati",
    price: 1040,
    rating: 4.5,
    reviews: 96,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Mabati",
  },
  {
    id: "18",
    name: "HELMETS",
    price: 250,
    rating: 4.5,
    reviews: 31,
    inStock: true,
    image: "/api/placeholder/300/300",
    category: "Tools",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular products trusted by construction
            professionals and homeowners across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
