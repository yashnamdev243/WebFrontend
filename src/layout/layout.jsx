// import React from "react";
// import Header from "../components/header";
// import Footer from "../components/footer";

// const Layout = ({ children }) => {
//   return (
//     <div className="min-h-screen w-full flex flex-col bg-light-900 ">
//       {/* <div className="fixed top-0 left-0 z-10"> */}
//         <Header />
//       {/* </div> */}
//       <main className="flex-1 w-full p-0">{children}</main>

//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-light-900">
      {/* Header - Sticky on top for better UX */}
      <header className="w-full sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </header>

      {/* Main Content - Responsive Padding */}
      <main className="flex-1 w-full sm:p-4 md:p-6 lg:p-0 xl:p-0">
        {children}
      </main>

      {/* Footer - Stays at Bottom */}
      <footer className="w-full bg-gray-200">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
