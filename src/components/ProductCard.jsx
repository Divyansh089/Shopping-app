import React from 'react'

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-80 bg-white flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h3>
        
        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)} USD
          </p>
        </div>

        {/* View Details Button */}
        <button
          onClick={onViewDetails}
          className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default ProductCard
