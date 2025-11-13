# Web3 Shopping Cart

A modern e-commerce frontend built with React, Vite, and Tailwind CSS that fetches products from the Fake Store API.

## Features

- 🛍️ Product listing from Fake Store API
- 🔍 Search functionality
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🖼️ Product detail modal
- ⭐ Product ratings display

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Fake Store API** - Product data

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with search
│   │   ├── ProductCard.jsx     # Product card component
│   │   └── ProductModal.jsx    # Product details modal
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features Explained

### Product Display

- Grid layout displaying products from Fake Store API
- Product images, titles, and prices
- Hover effects for better UX

### Search Functionality

- Real-time search by product title or category
- Responsive search bar in header

### Product Details

- Modal popup with detailed product information
- Product description, ratings, and reviews
- Add to cart and Web3 wallet integration buttons

## API

This project uses the [Fake Store API](https://fakestoreapi.com/products) to fetch product data.

## License

MIT
