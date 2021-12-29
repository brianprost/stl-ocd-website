import React, { useEffect, useState } from "react";

function Navbar() {
  // make the navigation titles icons instead
  const [show, setShow] = useState(false);
  return (
    <nav className="w-full">
      <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
        <div aria-label="Home. logo" role="img">
          <img
            className="w-auto h-20"
            src="./img/stl-ocd-nav-logo.png"
            alt="logo"
          />
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
