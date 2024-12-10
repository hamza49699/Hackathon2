import React from "react";
import Image from "next/image";

const NikeLoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 w-full max-w-md">
        {/* Nike Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/image10.png" // Replace with the path to your Nike logo
            alt="Nike Logo"
            className="h-8"
            width={32} // Adjust width and height as needed
            height={32}
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Keep me signed in
            </label>
            <a href="#" className="underline">
              Forgotten your password?
            </a>
          </div>

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-600 mt-2">
            By logging in, you agree to Nike&apos;s{" "}
            <a href="#" className="text-black underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-black underline">
              Terms of Use
            </a>.
          </p>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800"
          >
            SIGN IN
          </button>
        </form>

        {/* Join Us Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Not a Member?{" "}
          <a href="#" className="text-black underline">
            Join Us
          </a>
        </p>
        
      </div>
      
    </div>
  );
  
};


export default NikeLoginForm;

