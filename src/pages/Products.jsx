import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  console.log(products,"products>>>>>>")
    const [loading, setLoading] = useState(true);


  useEffect(() => {
  // React fetch
const fetchProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    setProducts(data);
  } catch (err) {
    console.error(err);
  }finally {
        setLoading(false); // ✅ Set loading false after fetch
      }
};

    fetchProducts();
  }, []);

  return (
   <section className=" py-12 lg:mt-26 mt-12 ">
    <div className="px-4 lg:px-20">

     <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-r from-[#ffcc70] to-[#ff8c00] mb-8 leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">Our Products</h2>
       </div>
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
   <div className="z-10 w-full max-w-[90%] md:max-w-[95%] mx-auto  md:p-4 my-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-6">
        {products.map((p) => <ProductCard key={p.id || p.key} product={p} />)}
      </div>
      </div>
              )}

    </section>
  );
}
