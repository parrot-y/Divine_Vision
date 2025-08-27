export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="hover:text-blue-100 cursor-pointer transition-colors">
                About us
              </span>
              <span>|</span>
              <span className="hover:text-blue-100 cursor-pointer transition-colors">
                Order Tracking
              </span>
              <span>|</span>
              <span className="font-semibold">📞 0795-349-608</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs">Become a Member</span>
              <button className="bg-white text-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-50 transition-colors font-medium">
                Join Now →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-blue-600">DIVINE</span>
              <span className="text-gray-800"> VISION</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Special Offers
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center">
                  Categories
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Building Materials
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Home & Decor
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Electrical
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Plumbing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Tools
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-xl">👤</span>
                <span className="hidden sm:inline font-medium">Account</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                <span className="text-xl">🛒</span>
                <span className="hidden sm:inline font-medium">Cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Promo Banners */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quality Building Materials
              <br />
              <span className="text-blue-200">Delivered to You</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Your trusted source for premium cement, mabati, paints, and
              hardware supplies. Same-day dispatch available on select orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254795349608?text=Hello! I would like to place an order for building materials. Please provide available products and prices."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-lg"
              >
                📱 ORDER VIA WHATSAPP
              </a>
              <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg hover:bg-gray-100">
                🛍️ BROWSE PRODUCTS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Save up to 15%</h3>
              <p className="text-red-100">On selected building materials</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Gift Voucher</h3>
              <p className="text-green-100">
                Perfect for construction projects
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Free Delivery</h3>
              <p className="text-purple-100">On orders over Ksh 10,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Carousel */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "Mabati", icon: "🏠" },
              { name: "Cement", icon: "🏗️" },
              { name: "Steel Bars", icon: "🔩" },
              { name: "Hand Tools", icon: "🔨" },
              { name: "Interior Paints", icon: "🎨" },
              { name: "Wood Finish", icon: "🪵" },
              { name: "Outdoor Lights", icon: "💡" },
              { name: "Panels & Bulbs", icon: "⚡" },
              { name: "PPR Pipes", icon: "🔧" },
              { name: "Plumbing Fittings", icon: "🚰" },
              { name: "Floor & Wall Tiles", icon: "🧱" },
              { name: "Bathroom Accessories", icon: "🛁" },
              { name: "Toilets", icon: "🚽" },
              { name: "Taps", icon: "🚿" },
              { name: "Home Interior", icon: "🏡" },
              { name: "Outdoor", icon: "🌳" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium text-gray-700">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Images Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Building Materials</h3>
              <p className="text-orange-100 mb-4">Special Offers</p>
              <a
                href="#"
                className="text-orange-200 hover:text-white font-medium"
              >
                Shop Now →
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Paints & Finishes</h3>
              <p className="text-blue-100 mb-4">Promo</p>
              <a
                href="#"
                className="text-blue-200 hover:text-white font-medium"
              >
                Shop Now →
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-400 to-gray-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Cement</h3>
              <p className="text-gray-100 mb-4">Special Offer</p>
              <a
                href="#"
                className="text-gray-200 hover:text-white font-medium"
              >
                Shop Now →
              </a>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Electrical</h3>
              <p className="text-yellow-100 mb-4">Solutions</p>
              <a
                href="#"
                className="text-yellow-200 hover:text-white font-medium"
              >
                Shop Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cement */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">Cement</h3>
              <p className="text-gray-600 mb-4">
                Premium quality cement for construction projects
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Nguvu Cement 32.5 50Kg - Ksh 855</li>
                <li>• Simba Cement 32.5 50Kg - Ksh 735</li>
                <li>• Blue Triangle Cement - Ksh 750</li>
              </ul>
              <a
                href="https://wa.me/254795349608?text=Hello! I would like to order cement. Please provide available types and prices."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block transition-colors"
              >
                Order via WhatsApp
              </a>
            </div>

            {/* Mabati */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Mabati</h3>
              <p className="text-gray-600 mb-4">
                Quality roofing materials for your projects
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Galvanized Mabati 3m - Ksh 1,200</li>
                <li>• Color Coated Mabati 3m - Ksh 1,350</li>
                <li>• Various sizes available</li>
              </ul>
              <a
                href="https://wa.me/254795349608?text=Hello! I would like to order mabati. Please provide available types and prices."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block transition-colors"
              >
                Order via WhatsApp
              </a>
            </div>

            {/* Paints */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Paints</h3>
              <p className="text-gray-600 mb-4">
                Premium paints for interior and exterior use
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Neuce Paint 20L - Ksh 4,500</li>
                <li>• Various colors available</li>
                <li>• Interior & Exterior options</li>
              </ul>
              <a
                href="https://wa.me/254795349608?text=Hello! I would like to order paints. Please provide available types and prices."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block transition-colors"
              >
                Order via WhatsApp
              </a>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-gray-600 mb-4">
                Quality tools for all your projects
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Hand tools</li>
                <li>• Power tools</li>
                <li>• Safety equipment</li>
              </ul>
              <a
                href="https://wa.me/254795349608?text=Hello! I would like to order tools. Please provide available types and prices."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block transition-colors"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4">
                "Excellent quality products and fast delivery. Divine Vision has
                been my go-to for all construction materials."
              </p>
              <div className="font-semibold text-gray-800">John Kamau</div>
              <div className="text-sm text-gray-600">
                Construction Manager, Nairobi
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4">
                "Great prices and professional service. They always have what I
                need for my projects."
              </p>
              <div className="font-semibold text-gray-800">Sarah Ochieng</div>
              <div className="text-sm text-gray-600">
                Independent Contractor, Kisumu
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4">
                "Reliable supplier with quality products. Their WhatsApp
                ordering makes it so convenient."
              </p>
              <div className="font-semibold text-gray-800">Michael Otieno</div>
              <div className="text-sm text-gray-600">
                Project Manager, Mombasa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day dispatch on select orders with reliable delivery
                service
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Premium products from trusted brands with quality assurance
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with regular discounts and special offers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-blue-400">DIVINE</span>
                <span className="text-white"> VISION</span>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted source for quality building materials and hardware
                supplies. We provide premium products with excellent customer
                service.
              </p>
              <div className="flex space-x-4">
                <span className="text-2xl">📘</span>
                <span className="text-2xl">📷</span>
                <span className="text-2xl">🎵</span>
              </div>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Product Categories</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Building Materials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home and Decor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Electrical
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tile and Sanitary
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Plumbing
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bulk Orders
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Visit Us</h3>
              <div className="space-y-3 text-gray-300">
                <p>📍 Triple Two Address – Eastern Bypass, Ruiru, Kenya</p>
                <p>📞 Phone: 0795-349-608</p>
                <p>🕒 Hours: Mon-Sat: 8AM-6PM</p>
                <p>📧 Email: info@divinevision.co.ke</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>
                  &copy; 2024 Divine Vision Trade & Hardware. All rights
                  reserved.
                </p>
              </div>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
