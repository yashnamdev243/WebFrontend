// // src/components/ProtectedRoute.jsx
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   return isAdmin ? children : <Navigate to="/admin-login" />;
// }
// // 
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/admin-login" />;
}
