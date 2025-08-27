# Divine Vision Supplies Hardware - E-commerce Website

A modern, responsive e-commerce website for hardware and construction supplies, inspired by aanddstore.co.ke but customized for Divine Vision Supplies Hardware.

## 🚀 Features

- **Modern Design**: Clean, professional design with yellow, blue, and teal color scheme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Product Categories**: 16+ product categories with hover effects and tooltips
- **Product Listings**: Grid layout with ratings, prices, and add-to-cart functionality
- **Hero Section**: Promotional carousel with cement products and special offers
- **Customer Testimonials**: Social proof with customer reviews and ratings
- **Brand Partners**: Showcase of trusted partner brands
- **Search Functionality**: Integrated search bar in header
- **API Integration**: RESTful API endpoints for product data

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Backend**: Next.js API Routes
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd divine-vision-hardware
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── products/
│   │       └── route.ts          # Product API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── HeroSection.tsx           # Hero carousel
│   ├── ProductCategories.tsx     # Category grid
│   ├── FeaturedProducts.tsx      # Product listings
│   ├── CategoryPromos.tsx        # Category promotions
│   ├── Testimonials.tsx          # Customer reviews
│   ├── ProductCard.tsx           # Individual product card
│   └── Footer.tsx                # Site footer
└── ...
```

## 🎨 Design Features

### Color Scheme

- **Primary**: Yellow (#facc15) - For highlights and CTAs
- **Secondary**: Blue (#3b82f6) - For main elements
- **Teal**: (#14b8a6) - For footer and accents
- **Accent Pink**: (#ec4899) - For special offers

### Components

- **Header**: Sticky navigation with search and user actions
- **Hero Section**: Three-panel layout with product showcase
- **Product Categories**: Interactive grid with hover tooltips
- **Featured Products**: Responsive product grid
- **Testimonials**: Customer reviews with star ratings
- **Footer**: Company information and links

## 🔧 Customization

### Changing Business Name

Update the business name from "Divine Vision" to your preferred name in:

- `src/components/Header.tsx` (line 25)
- `src/components/HeroSection.tsx` (line 95)
- `src/components/Testimonials.tsx` (multiple locations)
- `src/components/Footer.tsx` (multiple locations)

### Updating Contact Information

Modify contact details in:

- `src/components/Header.tsx` (phone number)
- `src/components/Footer.tsx` (address, phone, email)

### Adding Products

1. Update the products array in `src/app/api/products/route.ts`
2. Add new products to `src/components/FeaturedProducts.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

### Other Platforms

The project can be deployed to any platform that supports Next.js.

## 🔮 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product detail pages
- [ ] Checkout process
- [ ] Order management
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Product search and filtering
- [ ] Wishlist functionality
- [ ] Product reviews system

## 📞 Support

For support or questions, please contact:

- **Phone**: 0795-349-608
- **Email**: paleah.sales@divinevision.co.ke
- **Address**: Triple Two Address-Eastern Bypass, Ruiru, Kenya

## 📄 License

This project is licensed under the MIT License.

---

**Divine Vision Supplies Hardware** - Your trusted partner in construction and building materials. Quality products, competitive prices, and reliable delivery across Kenya.
