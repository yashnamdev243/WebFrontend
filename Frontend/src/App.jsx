import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";

import Home from "./pages/home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./layout/layout";
import ScrollToTopButton from "./component/ScrollToTopButton";
import Clientele from "./pages/Clientele";
import ProjectGallery from "./pages/ProjectGallery";
import Blog from "./pages/Blog";
//import CareerPage from "./pages/CareerPage";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import BlogDetail from "./pages/BlogDetail";
import Audit from "./Services/Audit";
import QMSConsulting from "./Services/QMSConsulting";
import GMPCertificationServices from "./Services/GMPCertificationServices";
import RegulatoryServices from "./Services/RegulatoryServices";
import TechnologyTransfer from "./Services/TechnologyTransfer";
import RegulatedMarketAccess from "./Services/RegulatedMarketAccess";
import Trainings from "./Services/Trainings";
function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/admin-login", "/admin-dashboard"];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  const token = localStorage.getItem("authToken");

  return (
    <>
      <ScrollToTopButton />
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin-login"
          element={token ? <Navigate to="/admin-dashboard" /> : <AdminLogin />}
        />
        <Route
          path="/admin-dashboard"
          element={token ? <AdminDashboard /> : <Navigate to="/admin-login" />}
        />

        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                {/* <Route path="/blog/:id/:slug" element={<BlogDetail />} /> */}

                <Route path="/clientele" element={<Clientele />} />
                <Route path="/gallery" element={<ProjectGallery />} />
                {/* <Route path="/career" element={<CareerPage />} /> */}
                <Route path="/service/api-audit" element={<Audit />} />
                <Route
                  path="/service/qms-consult-implement"
                  element={<QMSConsulting />}
                />
                <Route
                  path="/service/gmp-certificat-service"
                  element={<GMPCertificationServices />}
                />
                <Route
                  path="/service/regulatory-service"
                  element={<RegulatoryServices />}
                />
                <Route
                  path="/service/technology-transfer"
                  element={<TechnologyTransfer />}
                />
                <Route
                  path="/service/regulated-market-access"
                  element={<RegulatedMarketAccess />}
                />
                <Route path="/service/trainings" element={<Trainings />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default function Root() {
  ReactGA.initialize("G-4MPTDKCBVY");

  return (
    <Router>
      <App />
    </Router>
  );
}
