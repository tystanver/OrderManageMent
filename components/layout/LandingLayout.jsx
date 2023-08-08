import React from "react";

import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const LandingLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
