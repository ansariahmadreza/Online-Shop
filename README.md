# 🛒 Online Shop

A modern, responsive e-commerce web application built with **⚛️ Next.js** and **📘 TypeScript**, designed as a production-style frontend project with scalable architecture and real-world features.

---

## ✨ Overview

This project simulates a real-world online store with a focus on ⚡ performance, 🧱 clean code structure, and ♻️ reusable components.
It demonstrates modern frontend practices using the Next.js App Router and feature-based architecture.

---

## 🚀 Features

### 🔐 Authentication

* 🔑 Google & GitHub login (NextAuth.js)
* 🛡️ Secure session handling

### 🛍️ Products

* 📦 Dynamic product listing
* 📄 Product detail pages
* 📊 Smart pagination system

### 🔍 Search & Filtering

* 🔎 Live search functionality
* 💰 Price range filter (min / max)
* ↕️ Sorting (low → high / high → low)

### 🛒 Cart & Favorites

* ➕➖ Add / remove / update cart items
* 💾 Persistent cart using localStorage
* ❤️ Favorite products system

### 📱 PWA Support

* 📲 Installable on mobile devices
* ⚡ App-like experience

### 🎨 UI/UX

* 📱 Fully responsive design
* 📐 Mobile-first approach
* 🎯 Clean UI inspired by ASOS design system

---

## 🛠️ Tech Stack

* ⚛️ React 19
* ▲ Next.js (App Router)
* 📘 TypeScript
* 🎨 Tailwind CSS
* 🔐 NextAuth.js
* 🧾 React Hook Form
* ✅ Zod
* 🧠 Context API / Custom Hooks

---

## 📁 Project Structure

```ts
src/
├── app/
│   ├── (auth)/
│   │   ├── signin/
│   │   └── user/
│   ├── (main)/
│   │   ├── cartlist/
│   │   ├── clothes/[slug]/
│   │   └── favorite/
│   └── api/
│       └── auth/[...nextauth]/
│
├── components/
│   └── ui/
│
├── features/
│   ├── auth/
│   ├── discover/
│   ├── navbar/
│   └── products/
│
├── lib/
├── providers/
└── shared/
    ├── assets/
    ├── components/
    ├── hooks/
    ├── types/
    └── utils/
```

---

## ⚙️ Installation

```bash
git clone https://github.com/ansariahmadreza/Online-Shop.git

cd Online-Shop

pnpm install

pnpm dev
```

---

## 🧪 Scripts

* 🚀 `pnpm dev` — Development server
* 🏗️ `pnpm build` — Production build
* ▶️ `pnpm start` — Run production build
* 🧹 `pnpm lint` — Lint code

---

## 🌐 Live Demo

🔗 [https://online-shop-pi-ivory.vercel.app/clothes](https://online-shop-pi-ivory.vercel.app/clothes)

---

## 🧭 Usage

### 🏠 Home

Landing page focused on UI/branding (no product logic).

### 👕 Products Page (/clothes)

* 🛍️ Browse products
* 🎛️ Apply filters
* ↕️ Sort items
* 📄 Pagination support

### 🛒 Cart

* ➕➖ Add / remove products
* 🧾 Manage selected items

### ❤️ Favorites

* ⭐ Save products for later

### 🔐 Authentication

Login with Google or GitHub using NextAuth.js.

### 📱 PWA

Install app on mobile like a native app 📲

---

## 🔮 Future Improvements

* 🗄️ Backend integration (MongoDB / PostgreSQL)
* 💳 Payment gateway (Stripe)
* 🔐 Email/password authentication
* 🧑‍💼 Admin dashboard
* ⚡ Performance optimization
* 💾 Server-side cart persistence
* 📴 Full offline PWA support

---

## 👨‍💻 Author

Built with ❤️ by **Ahmadreza Ansari**

* 🐙 GitHub: [https://github.com/ansariahmadreza](https://github.com/ansariahmadreza)
* 🛒 Project: Online Shop (Next.js + TypeScript + NextAuth)
* 🎨 Inspired by ASOS design system
