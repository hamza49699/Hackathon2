import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-screen bg-gray-100 font-sans">
      <div className="bg-gray-100 py-4 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Hello Nike App</h2>
        <p className="text-gray-600 text-sm">
          Download the app to access everything Nike.{" "}
          <a href="#" className="text-black font-bold underline">
            Get Your Great
          </a>
        </p>
      </div>
      {/* Fullscreen Sneaker Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/sneaker.png" // Replace with your actual image path
          alt="Sneaker"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center text-center bg-white py-12">
        {/* Section Title */}
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          NIKE AIR MAX PULSE
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="bg-white px-6 py-8 relative">
        {/* Title and Shop Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center font-bold">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="grid grid-cols-3 gap-4">
          {/* Product 1 */}
          <div className="border border-gray-200 rounded-md p-4">
            <Image
              src="/image1.png" // Replace with your actual image path
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4">
              <h3 className="font-medium text-lg">Nike Air Max Pulse</h3>
              <p className="text-gray-500 text-sm">Women&apos;s Shoes</p>
              <p className="font-bold mt-1">₹ 13,995</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border border-gray-200 rounded-md p-4">
            <Image
              src="/image2.png"
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4">
              <h3 className="font-medium text-lg">Nike Air Max Pulse</h3>
              <p className="text-gray-500 text-sm">Men&apos;s Shoes</p>
              <p className="font-bold mt-1">₹ 13,995</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border border-gray-200 rounded-md p-4">
            <Image
              src="/image3.png"
              alt="Nike Air Max 97 SE"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4">
              <h3 className="font-medium text-lg">Nike Air Max 97 SE</h3>
              <p className="text-gray-500 text-sm">Men&apos;s Shoes</p>
              <p className="font-bold mt-1">₹ 16,995</p>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Essentials Section */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold underline">FLIGHT ESSENTIALS</h1>
          <p className="mt-4 text-lg text-gray-700">
            Built to last all week—wears with style only Jordan Brand can deliver.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Links Columns */}
          <div>
            <h3 className="font-bold mb-4">Icons</h3>
            <ul className="space-y-2">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Shoes</h3>
            <ul className="space-y-2">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Clothing</h3>
            <ul className="space-y-2">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies &amp; Pullovers</li>
              <li>Shirts &amp; Tops</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Kids&apos;</h3>
            <ul className="space-y-2">
              <li>Infant &amp; Toddler Shoes</li>
              <li>Kids&apos; Shoes</li>
              <li>Kids&apos; Jordan Shoes</li>
              <li>Kids&apos; Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
