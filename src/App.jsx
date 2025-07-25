import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
// import BookNow from "./pages/booknow";
import Contact from "./pages/contact";
import Layout from "./layout/layout";
import TourDetails from "./components/Tour_Dropdown_Details";
import Content from "./pages/Content";
// import BlogDetails from "./components/BlogDetails";
import FloatingButtons from "./components/FloatingButtons";
import BlogPage from "./pages/blog";
// import BlogDetail from "./components/BlogDetail";
import ManimaheshKailash from "./Blog/manimahesh-kailash";
import ShrikhandKailash from "./Blog/shrikhand-kailash";
import KinnaurKailash from "./Blog/kinnaur-kailash";
import AdiKailash from "./Blog/adi-kailash";
import KedarnathDham from "./Blog/kedarnath-dham";
import MansarovarKailash from "./Blog/mansarovar-kailash";
import CharDhamYatra from "./Blog/chardham-yatra";
import UjjainMahakaleshwar from "./Blog/ujjain-mahakaleshwar";
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/about" element={<About />} />
          {/* <Route path="/booknow" element={<BookNow />} /> */}

          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* <Route path="/blog/:route" element={<BlogDetail />} /> */}

          <Route path="/content" element={<Content />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}

          <Route
            path="/blog/manimahesh-kailash"
            element={<ManimaheshKailash />}
          />
          <Route
            path="/blog/shrikhand-kailash"
            element={<ShrikhandKailash />}
          />
          <Route path="/blog/kinnaur-kailash" element={<KinnaurKailash />} />
          <Route path="/blog/adi-kailash" element={<AdiKailash />} />
          <Route path="/blog/kedarnath-dham" element={<KedarnathDham />} />
          <Route
            path="/blog/mansarovar-kailash"
            element={<MansarovarKailash />}
          />
          <Route path="/blog/chardham-yatra" element={<CharDhamYatra />} />
          <Route
            path="/blog/ujjain-mahakaleshwar"
            element={<UjjainMahakaleshwar />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
