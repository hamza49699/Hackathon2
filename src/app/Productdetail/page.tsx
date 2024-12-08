import Image from "next/image";

const ImageWithText = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 lg:flex-row lg:py-20 lg:px-24">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src="/rectangle.png" // Replace with your image path
          alt="Nike Air Force 1"
          width={500} // Adjust width as per your image dimensions
          height={300} // Adjust height as per your image dimensions
          className="object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="mt-8 lg:mt-0 lg:ml-12 lg:w-1/2 text-left">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
          Nike Air Force 1
        </h2>
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
          PLT.AF.ORM
        </h2>
        <p className="text-base lg:text-lg text-gray-700 mb-6">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid.
          Its &quot;inside-out&quot;-inspired construction, including unique layering and
          exposed foam accents, ups the ante on this timeless Jordan Brand
          silhouette. Details like the deco stitching on the Swoosh add coveted
          appeal, while the unexpected shading, rich mixture of materials, and
          aged midsole aesthetic give this release an artisan finish.
        </p>
        <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">₹ 8,695.00</p>
        <button className="px-6 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ImageWithText;
