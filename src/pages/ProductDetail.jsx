// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Helmet } from "react-helmet";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`http://namdevshivlingart.vercel.app/api/products/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch product");
//         const data = await res.json();
//         setProduct(data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (loading) return <p className="text-center mt-20">Loading...</p>;
//   if (!product) return <p className="text-center mt-20">Product not found</p>;

//   return (
//     <section className="py-12 px-4 lg:px-20 min-h-screen">
//       <Helmet>
//         <title>{product.title} | Namdev Narmadeshwar Shivling Arts</title>
//         <meta name="description" content={product.description} />
//       </Helmet>

//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
//         <img src={product.image} alt={product.title} className="w-full rounded-lg" />
//         <div>
//           <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
//           <p className="text-xl font-semibold mb-4">₹{product.price}</p>
//           <p className="text-gray-700 mb-4">{product.description}</p>
//           <button className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600 transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://namdevshivlingart.vercel.app/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img 
    //   src={product.image} 
     src={`http://namdevshivlingart.vercel.app${product.image}`} 
      alt={product.title} 
      className="w-full max-w-md rounded-lg shadow-md" />
      <p className="mt-4">{product.created_at}</p>
    </div>
  );
};

export default ProductDetails;
