// import React from "react";
// import { Button, Card } from "antd";
// import { useNavigate } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/products/${product.category}`);
//   };

//   return (
//         <div className="container mx-auto px-4 py-4">
    
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               <div
                
//                 className="group bg-white shadow-lg rounded-lg overflow-hidden relative h-[400px] cursor-pointer"
//                  onClick={handleClick}

//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div
//                   className="h-full absolute inset-0 bg-black/35 backdrop-blur-[2.5px] p-4 text-left mt-85 
//       -translate-y-5
//       md:translate-y-0 md:group-hover:-translate-y-5
//       duration-300"
//                 >
//                   <h3
//                     className="lg:text-xl text-lg pb-0.5 font-italic text-white transition relative inline-block font-semibold 
//         before:absolute before:-bottom-[1px] before:left-0 before:h-[1px] md:before:w-0 before:bg-white 
//         before:transition-all before:duration-500 before:w-full md:group-hover:before:w-full"
//                   >
//                     {product.title}
//                   </h3>
//                 </div>
    
//                 {/* Price & Book Now (Revealed on Further Hover) */}
//                 <div
//                   className="absolute bottom-4 left-0 w-full  text-white px-4 md:opacity-0 transition-all duration-300 md:translate-y-[120%]
//                   translate-y-[40%] 
//                 md:group-hover:translate-y-[40%] opacity-100 md:group-hover:opacity-100"
//                 >
//                   <span className="text-left flex text-sm md:text-md fira-sans ">
//                     Starting Price {product.price}/- | {product.duration}
//                   </span>
//                 </div>
//               </div>
            
//           </div>
//        </div>

//     // <Card
//     //   hoverable
//     //   className="rounded-xl shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 cursor-default w-full max-w-full flex flex-col"
//     //   cover={
//     //     <div className="h-64 overflow-hidden rounded-t-xl">
//     //       <img
//     //         alt={product.name}
//     //         src={product.image}
//     //         className="h-full w-full object-cover"
//     //       />
//     //     </div>
//     //   }
//     // >
        
//     //   <div className="flex flex-col justify-between h-full px-2  space-y-2">
//     //     <h3 className="text-lg font-bold text-[#b84d1c]">{product.name}</h3>
//     //     <p className="text-gray-700 font-medium">{product.price}</p>
//     //     <Button
//     //       className="!bg-[#1f1300] !text-[#ffcc70] !border-[#ffcc70] transition hover:!bg-[#f0d39e] hover:!border-[#1f1300] hover:!text-[#1f1300] w-full"
//     //       onClick={handleClick}
//     //     >
//     //       View Details
//     //     </Button>
//     //   </div>
//     // </Card>
//   );
// };

// export default ProductCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.category}`);
  };
  const formatCategoryTitle = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      className="group bg-white shadow-lg rounded-lg overflow-hidden relative h-[400px] cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />
      <div className="h-full absolute inset-0 bg-black/35 backdrop-blur-[2.5px] p-4 text-left mt-85 
        -translate-y-5
        md:translate-y-0 md:group-hover:-translate-y-5
        duration-300"
      >
        <h3
          className="lg:text-xl text-lg pb-0.5 font-italic text-white transition relative inline-block font-semibold 
            before:absolute before:-bottom-[1px] before:left-0 before:h-[1px] md:before:w-0 before:bg-white 
            before:transition-all before:duration-500 before:w-full md:group-hover:before:w-full"
        >
          {formatCategoryTitle(product.name)} Products

        </h3>
      </div>

       <div
        className="absolute bottom-4 left-0 w-full text-white px-4 md:opacity-0 transition-all duration-300 md:translate-y-[120%]
          translate-y-[40%] 
          md:group-hover:translate-y-[40%] opacity-100 md:group-hover:opacity-100"
      >
        {/* <span className="text-left flex text-sm md:text-md fira-sans ">
          Starting Price {product.price}/- | {product.duration}
        </span> */}
              <span className="text-left flex text-sm md:text-md fira-sans">Namdev Narmadeshwar Shivling Arts</span>

      </div> 
    </div>
  );
};

export default ProductCard;
