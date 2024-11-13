import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="px-4 bg-red-300 text-black py-4 ">
        <ul className="flex justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          {/* <li>Home</li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
