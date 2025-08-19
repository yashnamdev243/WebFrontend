import React, { useEffect, useState } from "react";

import ReviewSection from "../components/ReviewSection";
import TourCarousel from "../components/TourCarousel";
//import products from "../Data/products";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // your firebase config

import ProductCard from "../components/ProductCard";
import { Spin } from "antd";

const Home = () => {
   const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchProducts = async () => {
              try {

        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
         } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
      };
  
      fetchProducts();
    }, []);
  return (
    <div className="bg-gray-100 ">
      <section className="flex flex-col items-center justify-center text-center md:px-0">
        <div className="w-full mx-auto sm:px-5 lg:px-0">
          <TourCarousel />
        </div>

        <div
          className="w-full relative pt-5 md:min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Home_bg.jpg')" }}
        >
   
<div className="mt-10 px-4 lg:px-19 "> 
    <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] mb-8">
        Featured Products

      </h2></div>
         <div className="z-10 w-full max-w-[90%] md:max-w-[95%] mx-auto  md:p-4 my-4 ">
           {loading ? (
              <div className="flex justify-center items-center py-20">
                <Spin size="large" tip="Loading products..." />
              </div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-6" >

          {/* {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
          {[
            ...new Map(products.map((item) => [item.category, item])).values(),
          ].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
                    )}

        </div>


         

          <div className="w-full max-w-[90%] md:max-w-[95%] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6">
            <ReviewSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
