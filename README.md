# Web3 Shopping Cart

This is a small and modern e-commerce frontend made with React, Vite, and Tailwind CSS. It loads products from the Fake Store API and shows them in a clean and easy to use interface. The idea is to give a fast shopping experience and also show how Web3 features can be added later.

## Features

- Product listing that comes from the Fake Store API  
- A simple search bar to find items fast  
- Works well on mobile and desktop  
- Clean modern design built with Tailwind  
- Product detail popup for more information  
- Shows rating for each item

## Tech Stack

- **React** for building the user interface  
- **Vite** for fast development and build  
- **Tailwind CSS** for styling  
- **Fake Store API** to get product data

## Getting Started

### What you need first
- Node.js (version 14 or higher)  
- npm or yarn installed  

## Project Structure

- **src/**
  - **components/**
    - *Header.jsx* – simple header with a search box  
    - *ProductCard.jsx* – shows a single product in a grid  
    - *ProductModal.jsx* – shows detailed product info  
  - *App.jsx* – main application logic  
  - *main.jsx* – entry point  
  - *index.css* – global Tailwind styles  
- *index.html*  
- *package.json*  
- *vite.config.js*  
- *tailwind.config.js*  

## Feature Details

### Product Display
- Products shown in a clean grid layout  
- Each product displays an image, title, and price  
- Smooth hover and click behavior  
- Designed to make browsing simple and clear  

### Search Function
- Search bar placed in the header  
- Filters product list instantly while typing  
- Works for product names and categories  

### Product Details
- Clicking a product opens a modal  
- Modal shows full description, rating, and sometimes reviews  
- Buttons for add-to-cart and Web3 wallet actions  
- Helps users understand the product before making a choice  

## API

- All product data is fetched from Fake Store API  
- Endpoint: https://fakestoreapi.com/products


## How to install 
- Just open terminal and run : npm i
- Then  : npm run dev
