
import React from "react";
import Image from "next/image";

const UtilityBar = () => {
  return (
    <div className="bg-gray-100 text-sm text-gray-600">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // Ensure the correct path to your logo image
            alt="Nike Logo"
            width={40} // Adjusted size for better visibility
            height={40}
            className="object-contain"
          />
        </div>

        {/* Utility Links on the Right */}
        <div className="flex space-x-4 font-medium">
        <a href="/Home" className="hover:underline">
            Home
          </a>
        <span>|</span>
          <a href="/Allproducts" className="hover:underline">
            Find a Store
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Help
          </a>
          <span>|</span>
          <a href="/Joinus" className="hover:underline">
            Join Us
          </a>
          <span>|</span>
          <a href="/Login" className="hover:underline">
            Sign In
          </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
