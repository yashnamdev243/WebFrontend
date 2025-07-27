// ===== Products.jsx =====
import React, { useEffect, useState } from "react";
import products from "../Data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <section className=" py-12 lg:mt-26 mt-12">
    <div className="px-4 lg:px-19">
      <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] mb-8">
        Our Products

      </h2>
      </div>
   <div className="z-10 w-full max-w-[90%] md:max-w-[95%] mx-auto  md:p-4 my-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-6" >        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Products;
