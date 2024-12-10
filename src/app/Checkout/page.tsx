import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 bg-white">
      <h1 className="text-lg font-semibold mb-6">What&apos;s your contact information?</h1>
      <form>
        {/* State Selection */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium mb-1">
            State/Territory
          </label>
          <select
            id="state"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          >
            <option value="India">India</option>
          </select>
        </div>

        {/* Save to Profile */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="saveToProfile" className="mr-2 rounded" />
          <label htmlFor="saveToProfile" className="text-sm">
            Save this address to my profile
          </label>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* PAN */}
        <div className="mb-4">
          <label htmlFor="pan" className="block text-sm font-medium mb-1">
            PAN
          </label>
          <input
            type="text"
            id="pan"
            placeholder="Enter your PAN"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <div className="flex items-center mt-2">
            <input type="checkbox" id="savePan" className="mr-2 rounded" />
            <label htmlFor="savePan" className="text-sm">
              Save PAN details to my profile
            </label>
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" className="mr-2 rounded" />
          <label htmlFor="terms" className="text-sm">
            I consent to the processing of my information.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <Image src="/image10.png" alt="Nike Logo" width={50} height={32} />
        <div className="flex space-x-4">
          <span className="text-gray-600">000 800 100 9538</span>
          <div className="flex items-center space-x-4">
            <Image src="/13.png" alt="Chat" width={24} height={24} />
            <Image src="/14.png" alt="Bag" width={24} height={24} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-6">
            How would you like to get your order?
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Customs regulation for India requires a copy of the recipient&apos;s KYC.
            The address on the KYC needs to match the shipping address. For more
            details,{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </p>

          {/* Delivery Option */}
          <button className="flex items-center justify-between w-full p-4 border rounded-lg hover:shadow-md mb-6">
            <span className="flex items-center space-x-3">
              <Image src="/group.png" alt="Deliver" width={24} height={24} />
              <span>Deliver It</span>
            </span>
          </button>

          {/* Address Form */}
          <h2 className="text-xl font-medium mb-4">Enter your name and address:</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded-lg w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Address Line 1"
              className="border p-3 rounded-lg w-full"
            />
            <p className="text-xs text-gray-500">We do not ship to P.O. boxes</p>
            <input
              type="text"
              placeholder="Address Line 2"
              className="border p-3 rounded-lg w-full"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Locality"
                className="border p-3 rounded-lg w-full"
              />
            </div>
          </form>

          {/* Contact Form */}
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        {/* Right Section */}
        <div>
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Subtotal</p>
              <p>₹ 20,890.00</p>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t pt-6 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex justify-between ">
          <p className="text-sm text-gray-600">&copy; 2024 Nike, Inc. All Rights Reserved.</p>
          <div className="space-x-4 flex items-center">
            <Image src="/17.png" alt="Visa" width={40} height={24} />
            <Image src="/18.png" alt="MasterCard" width={40} height={24} />
            <Image src="/19.png" alt="PayPal" width={40} height={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
