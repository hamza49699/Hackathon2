
import React from "react";
import Image from "next/image";

const Joinus = () => {
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
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <select
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="India">Pakistan</option>
            {/* Add more country options here if needed */}
          </select>

          {/* Gender Selection */}
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input type="radio" name="gender" value="Male" className="mr-2" />
              Male
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="Female" className="mr-2" />
              Female
            </label>
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" id="email-updates" className="mr-2" />
            <label htmlFor="email-updates" className="text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </label>
          </div>

          {/* Privacy Policy */}
          <p className="text-xs text-gray-600 mt-2">
            By creating an account, you agree to Nike&apos;s{" "}
            <a href="#" className="text-black underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-black underline">
              Terms of Use
            </a>.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800"
          >
            JOIN US
          </button>
        </form>

        {/* Sign-In Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already a Member?{" "}
          <a href="/Login" className="text-black underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Joinus;
