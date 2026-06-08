# Online Shop

## Description 

A modern and responsive e-commerce web application built with Next.js and TypeScript.

## ✨ Features

- 🔐 Google Authentication
- 📦 Product Listing
- 🔍 Product Search
- 💰 Price Range Filter (Min/Max)
- ↕️ Product Sorting (Highest Price / Lowest Price)
- 📄 Smart Pagination
- 🛒 Shopping Cart
- 📱 Progressive Web App (PWA)
- 📲 Mobile Installation Support
- 🎨 Responsive Design
- 👕 Product Details Page


## 🛠️ Tech Stack

- ⚛️ React
- ▲ Next.js
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🔐 NextAuth.js
- 📝 React Hook Form
- ✅ Zod


## 📁 Project Structure

  📁 src/
├── 📱 app/
│   ├── 🔐 (auth)/
│   │   ├── signin/
│   │   └── user/
│   ├── 🛍️ (main)/
│   │   ├── cartlist/
│   │   ├── clothes/[slug]/
│   │   └── favorite/
│   └── 🔌 api/
│       └── auth/[...nextauth]/

├── 🧩 components/
│   └── 🎨 ui/

├── ⚙️ features/
│   ├── 🔐 auth/
│   │   ├── assets/
│   │   ├── components/
│   │   └── utils/
│   ├── 🔍 discover/
│   │   ├── assets/
│   │   └── components/
│   ├── 🧭 navbar/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types/
│   └── 👕 products/
│       ├── components/
│       ├── sort/
│       └── types/

├── 📦 lib/

├── 🧑‍💻 providers/

└── 🔗 shared/
    ├── 🖼️ assets/
    │   └── 🌐 lan/
    ├── 🧱 Components/
    │   └── 🛒 cartcontext/
    ├── 🪝 hooks/
    ├── 🧾 types/
    └── 🧰 utils/

## 📸 Screenshots

  <img width="1897" height="907" alt="112" src="https://github.com/user-attachments/assets/19d3055c-5104-4375-bae2-51ddd7b61da5" />

  ## 🌐 Live Demo

https://online-shop-pi-ivory.vercel.app/clothes

## ⚙️ Installation

```bash
git clone https://github.com/ansariahmadreza/Online-Shop.git

cd Online-Shop

pnpm install

pnpm dev


## 🚀 Usage

After running the project, you can:

### 🏠 Home Page
The homepage is designed only for UI/landing purposes.  
It showcases the layout, banners, and visual design of the store, but does not display real product data.

### 👕 Products Page (/clothes)
Browse all products in the clothes page.  
This is the main product page where you can:
- View all items
- Apply filters (price range)
- Sort products (cheapest / most expensive)
- Navigate through product list

### 🔍 Product Filtering
Use filters to search products by:
- Price range (min/max)
- Sorting options

### 🛒 Cart
Add products to your cart and manage selected items (add/remove/update).

### ❤️ Favorite System
Save products to your favorite list for quick access later.

### 🔐 Authentication
Login or sign up using GitHub authentication (NextAuth.js).

### 📱 PWA Support
Install the app on your mobile device and use it like a native application.





## 🔮 Future Improvements

- 🗄️ Add backend integration (real database like MongoDB / PostgreSQL)
- 💳 Implement payment gateway (Stripe or similar)
- 📄 Add product detail page enhancements
- ⚡ Improve performance and caching
- 🧑‍💼 Add admin dashboard for product management
- 📱 Enhance PWA offline support






## 👨‍💻 Author

Built with ❤️ by **Ahmadreza Ansari**

- 🔗 GitHub: https://github.com/ansariahmadreza
- 🚀 Project: Online Shop (Next.js + TypeScript + NextAuth)
- 🎯 Inspired by ASOS design system (asos.com)