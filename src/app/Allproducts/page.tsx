import Image from "next/image";
import React from "react";

const ProductListing = () => {
  const products = [
    {
      id: 1,
      image: "/20.png",
      title: "Nike Air Force 1 Mid '07",
      tag: "Just In",
      price: "₹ 10,795.00",
    },
    {
      id: 2,
      image: "/21.png",
      title: "Nike Court Vision Low Next Nature",
      tag: "Just In",
      price: "₹ 4,995.00",
    },
    {
      id: 3,
      image: "/22.png",
      title: "Nike Air Force 1 PLT.AF.ORM",
      tag: "Just In",
      price: "₹ 6,895.00",
    },
    {
      id: 4,
      image: "/23.png",
      title: "Nike Air Force 1 React",
      tag: "Just In",
      price: "₹ 12,001.00",
    },
    {
      id: 5,
      image: "/24.png",
      title: "Air Jordan 1 Elevate Low",
      tag: "Promo Exclusion",
      price: "₹ 11,895.00",
    },
    {
      id: 6,
      image: "/25.png",
      title: "Nike Standard Issue",
      tag: "Just In",
      price: "₹ 2,895.00",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Category</h3>
          <ul className="space-y-2">
            {["Shoes", "Sports Bras", "Tops & T-Shirts", "Jackets"].map(
              (category) => (
                <li key={category}>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded" />
                    <span className="ml-2">{category}</span>
                  </label>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Gender Filters */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Gender</h3>
          {["Men", "Women", "Unisex"].map((gender) => (
            <label key={gender} className="block">
              <input type="checkbox" className="rounded" />
              <span className="ml-2">{gender}</span>
            </label>
          ))}
        </div>

        {/* Price Filters */}
        <div>
          <h3 className="text-lg font-medium mb-2">Shop by Price</h3>
          <div className="space-y-2">
            <label className="block">
              <input type="radio" name="price" className="rounded" />
              <span className="ml-2">Under ₹ 2,500</span>
            </label>
            <label className="block">
              <input type="radio" name="price" className="rounded" />
              <span className="ml-2">₹ 2,501.00 - ₹ 10,000.00</span>
            </label>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">New (500)</h1>
          <button className="text-blue-600 underline">Hide Filters</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-md shadow hover:shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <span className="text-sm text-gray-600">{product.tag}</span>
                <h2 className="font-semibold text-lg mt-1">{product.title}</h2>
                <p className="font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
      </main>
      
    </div>
    
  );
};

export default ProductListing;
