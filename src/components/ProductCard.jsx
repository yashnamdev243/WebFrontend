

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
          {formatCategoryTitle(product.name)} 

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
