import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
//import About from "./pages/about";
import Contact from "./pages/contact";
import Layout from "./layout/layout";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./Admin/AdminDashboard";
import ProtectedRoute from "./Admin/ProtectedRoute";
import AdminLogin from "./Admin/AdminLogin";
const AppWrapper = () => {
  const location = useLocation();

  // Paths where layout should be hidden
  const isAdminPath = location.pathname.startsWith("/admin");
// const App = () => {
  return (
    <>
      <ScrollToTop />
            <Routes>

            {!isAdminPath && (
                        <Route
                         path="*"
            element={


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
   }
          />
              )}
               <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
              
            }
          />
          
                </Routes>

    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper/>
    </Router>
  );
};

export default App;
