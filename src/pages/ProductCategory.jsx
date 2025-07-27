import React from "react";
import { useParams } from "react-router-dom";
import products from "../Data/products";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="py-12 px-4 lg:px-20  min-h-screen lg:mt-24 mt-10">
      {/* <h2 className="lg:text-3xl text-2xl font-bold text-center text-[#b84d1c] mb-8 capitalize"> */}
         <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] mb-8 capitalize">
        {category} Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600 text-lg">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductCategory;
