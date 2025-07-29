import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
//import About from "./pages/about";
import Contact from "./pages/contact";
import Layout from "./layout/layout";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <div className="w-full flex justify-end sm:p-4 md:p-6 lg:p-0">
          <FloatingButtons />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
