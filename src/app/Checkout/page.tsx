"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClient } from "@sanity/client";

// Initialize Sanity Client
const sanityClient = createClient({
  projectId: "47crgxk1", // Replace with your Sanity Project ID
  dataset: "production", // or your dataset name
  useCdn: true,
  apiVersion: "2023-01-01",
  token: "skknR3jZcTJYma4jBdwe4ozcHUIrni3mZrfneq8EacitMHYSKNJRtIMtgIRXlgkxj9LPGOsbPWHf1igjszIZxMNFmxPOsOdk6OhG3p4FdVHqcMfxeK46dV1KUtYActlAnZenN1zPwb1UikoAPs1wLy7dT2eNARmnyB4d8ziKt6ZgNyVsdDBm", // Replace with your token
});

type CartProduct = {
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    const items = Object.values(storedCart) as CartProduct[];
    setCartItems(items);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  const handleOrderConfirm = async (event: React.FormEvent) => {
    event.preventDefault();

    const firstNameInput = document.getElementById("first-name") as HTMLInputElement;
    const lastNameInput = document.getElementById("last-name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const addressInput = document.getElementById("address") as HTMLInputElement;
    const postalCodeInput = document.getElementById("postal-code") as HTMLInputElement;
    const localityInput = document.getElementById("locality") as HTMLInputElement;

    const orderData = {
      _type: "order",
      _id: `${firstNameInput.value}-${lastNameInput.value}-${Date.now()}`,
      customerFirstName: firstNameInput.value,
      customerLastName: lastNameInput.value,
      customerEmail: emailInput.value,
      customerPhone: phoneInput.value,
      address: addressInput.value,
      postalCode: postalCodeInput.value,
      locality: localityInput.value,
      items: cartItems.map((item) => ({
        _key: `${item.productName}-${Date.now()}`,
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
        imageUrl: item.imageUrl, // Store image URL as string
      })),
      totalAmount: totalPrice,
    };

    try {
      await sanityClient.create(orderData);
      toast.success("🎉 Order Confirmed & Saved to Sanity!", { position: "top-right", autoClose: 3000 });

      // Clear cart and reset state after successful order
      localStorage.removeItem("cart");
      setCartItems([]);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("❌ Failed to save order. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer />
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <Image src="/image10.png" alt="Nike Logo" width={50} height={32} />
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-semibold mb-6">How would you like to get your order?</h1>
          <button className="flex items-center justify-between w-full p-4 border rounded-lg hover:shadow-md mb-6">
            <span className="flex items-center space-x-3">
              <Image src="/group.png" alt="Deliver" width={24} height={24} />
              <span>Deliver It</span>
            </span>
          </button>

          <h2 className="text-xl font-medium mb-4">Enter your name and address:</h2>
          <form className="space-y-4" onSubmit={handleOrderConfirm}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input id="first-name" type="text" placeholder="First Name" className="border p-3 rounded-lg w-full" required />
              <input id="last-name" type="text" placeholder="Last Name" className="border p-3 rounded-lg w-full" required />
            </div>
            <input id="address" type="text" placeholder="Address Line 1" className="border p-3 rounded-lg w-full" required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input id="postal-code" type="text" placeholder="Postal Code" className="border p-3 rounded-lg w-full" required />
              <input id="locality" type="text" placeholder="Locality" className="border p-3 rounded-lg w-full" required />
            </div>

            <div className="mt-6">
              <h1 className="text-lg font-semibold mb-4">What&apos;s your contact information?</h1>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input id="email" type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input id="phone" type="tel" placeholder="Enter your phone number" className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>
            </div>

            <button type="submit" className="w-full p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
              Confirm Order
            </button>
          </form>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.productName} className="flex items-center justify-between mb-4">
                <div className="flex-shrink-0">
                  {/* Display the product image */}
                  <Image
                    src={item.imageUrl || "/fallback-image.jpg"} // Fallback image if URL is invalid
                    alt={item.productName}
                    width={48}
                    height={48}
                    className="object-cover rounded-md"
                  />
                </div>
                <span className="text-gray-600">{item.productName} (x{item.quantity})</span>
                <span>₹ {item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p>₹ {totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
