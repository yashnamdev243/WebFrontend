import { useNavigate } from "react-router-dom";
import { blogs } from "../Data/Blogs_data";
const Blog_cards = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="lg:text-4xl text-xl font-bold text-center mb-10 text-[#1f84a6] [text-shadow:_0_4px_4px_rgb(255_255_255_/_0.8)]">
        Embark on a Sacred Journey with Spiritual Hikes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.route}`)} //  Navigate to tour details
            className="group bg-white shadow-lg rounded-lg overflow-hidden relative h-[400px] cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div
              className="h-full absolute inset-0 bg-black/35 backdrop-blur-[2.5px] p-4 text-left mt-85 
  -translate-y-5
  md:translate-y-0 md:group-hover:-translate-y-5
  duration-300"
            >
              <h3
                className="lg:text-xl text-lg pb-0.5 font-italic text-white transition relative inline-block font-semibold 
    before:absolute before:-bottom-[1px] before:left-0 before:h-[1px] md:before:w-0 before:bg-white 
    before:transition-all before:duration-500 before:w-full md:group-hover:before:w-full"
              >
                {blog.title}
              </h3>
            </div>

            {/* Price & Book Now (Revealed on Further Hover) */}
            <div
              className="absolute bottom-4 left-0 w-full  text-white px-4 md:opacity-0 transition-all duration-300 md:translate-y-[120%]
              translate-y-[40%] 
            md:group-hover:translate-y-[40%] opacity-100 md:group-hover:opacity-100"
            >
              <span className="text-left flex text-sm md:text-md fira-sans ">
                Starting Price {blog.price}/- | {blog.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog_cards;
