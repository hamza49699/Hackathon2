
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike Logo"
              width={60}
              height={20}
              className="object-contain"
            />
          </div>

          {/* Menu */}
          
             
            
            
           
          

          {/* Right Section (Search Bar and Icons) */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <div className="relative w-[180px]">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/26.png" 
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-5 py-2 bg-slate-100 rounded-full text-sm font-['Helvetica Neue']"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <Image
                src="/27.png" // Replace with your actual icon path
                alt="Icon 27"
                width={20}
                height={20}
                className="object-contain"
              />
              <Image
                src="/28.png" // Replace with your actual icon path
                alt="Icon 28"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
