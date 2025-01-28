"use client"; // Correct placement of the directive

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type CartProduct = {
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    setCartItems(Object.values(storedCart));
  }, []);

  const updateQuantity = (productName: string, amount: number) => {
    const updatedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (updatedCart[productName]) {
      const updatedQuantity = Math.max(1, updatedCart[productName].quantity + amount);
      updatedCart[productName].quantity = updatedQuantity;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(Object.values(updatedCart));
    }
  };

  const removeItem = (productName: string) => {
    // Retrieve the cart object from localStorage
    const updatedCart = JSON.parse(localStorage.getItem("cart") || "{}");

    // Delete the item with the given productName
    if (updatedCart[productName]) {
      delete updatedCart[productName];

      // Update localStorage and state
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(Object.values(updatedCart));
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Cart Items Section */}
      <div className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold my-4">Bag</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.productName} className="flex items-start border-b py-6">
              <Image
                src={item.imageUrl || "/fallback-image.jpg"} // Fallback if imageUrl is empty
                alt={item.productName}
                width={96} // Adjusted for the image size
                height={96}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.productName}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-900 font-semibold mt-2">
                  MRP: ₹ {item.price.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.productName, -1)}
                    className="bg-gray-200 px-3 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.productName, 1)}
                    className="bg-gray-200 px-3 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.productName)}
                className="text-gray-500 hover:text-red-500"
              >
                🗑️ Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Summary Section */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal</span>
          <span>₹ {totalPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t pt-4">
          <span>Total</span>
          <span>₹ {totalPrice.toLocaleString()}</span>
        </div>
        <Link href="/Checkout">
          <button className="mt-6 w-full bg-black text-white py-3 rounded-lg text-center text-lg font-semibold">
            Member Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
