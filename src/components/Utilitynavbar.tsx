import React from "react";
import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";

const UtilityBar = () => {
  return (
    <div className="bg-gray-100 text-sm text-gray-600">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // Ensure the correct path to your logo image
            alt="Nike Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Utility Links + Sign In Button on the Right */}
        <div className="flex space-x-4 font-medium items-center">
          <a href="/Home" className="hover:underline">Home</a>
          <span>|</span>
          <a href="/Allproducts" className="hover:underline">Find a Store</a>
          <span>|</span>
          <a href="Contactus" className="hover:underline">Help</a>
          <span>|</span>
          <a href="/Joinus" className="hover:underline">Join Us</a>
          <span>|</span>

          {/* Authentication Section */}
          <SignedOut>
            <SignInButton>
              <button className="bg-black text-white px-4 py-1 rounded-md font-semibold shadow-md hover:bg-gray-800 transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
