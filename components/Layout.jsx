import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      { children }
    </div>
  );
};

export default Layout;
