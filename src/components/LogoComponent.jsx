

import Logo from "/Logo.png";
import { Link } from "react-router-dom";

function LogoComponent() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/">
        <img 
          src={Logo} 
          alt="Company official logo" 
          className="w-20 sm:w-24 md:w-30 h-auto object-contain"
        />
      </Link>
    </div>
  );
}

export default LogoComponent;
