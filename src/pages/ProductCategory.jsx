import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import products from "../Data/products";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet";

const ProductCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const snap = await getDocs(collection(db, "products"));
  //     setProducts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  //   };
  //   fetchProducts();
  // }, []);

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
  }
};

    fetchProducts();
  }, [category]);

  const formatCategoryTitle = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="py-12 px-4 lg:px-20 min-h-screen lg:mt-24 mt-10">
      <Helmet>
        <title>{formatCategoryTitle(category)} | Namdev Narmadeshwar Shivling Arts</title>
        <meta
          name="description"
          content={`Explore our collection of ${formatCategoryTitle(
            category
          )} products.`}
        />
      </Helmet>

      <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06] to-[#ffcc70] mb-8 capitalize">
        {formatCategoryTitle(category)} Products
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
