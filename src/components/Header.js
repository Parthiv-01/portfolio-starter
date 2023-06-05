import React from "react";
//images
import Logo from "../assets/logo-no-background.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-centre">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="logo" className="w-80" />
          </a>
          {/* button */}
          <button
            className="btn btn-sm h-10"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/parthivsadhukhan",
                "_blank"
              )
            }
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
