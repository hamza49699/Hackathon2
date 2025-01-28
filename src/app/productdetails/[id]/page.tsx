// "use client"; // Indicating this is a client component
// import { sanityFetch } from "@/sanity/lib/fetch";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react"; // Import useState

// // Type for the product data
// type Product = {
//   _id: string;
//   productName: string;
//   description: string;
//   price: number;
//   category: string;
//   inventory: number;
//   colors: string;
//   status: string;
//   imageUrl: string;
// };

// export default async function ProductDetailPage({ params }: { params: { id: string } }) {
//   const { id } = params;

//   const productQuery = `*[_type == "product" && _id == $id][0] {
//     _id,
//     productName,
//     description,
//     price,
//     category,
//     inventory,
//     colors,
//     status,
//     "imageUrl": image.asset->url
//   }`;

//   const allProductsQuery = `*[_type == "product"] {
//     _id,
//     productName,
//     price,
//     "imageUrl": image.asset->url
//   }`;

//   const product: Product | null = await sanityFetch({ query: productQuery, params: { id } });
//   const allProducts: Product[] = await sanityFetch({ query: allProductsQuery });

//   if (!product) {
//     return <div className="p-6 text-center text-red-500">Product not found!</div>;
//   }

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
//           <div className="flex justify-center items-center">
//             <Image
//               src={product.imageUrl}
//               alt={product.productName}
//               width={500}
//               height={500}
//               className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div className="flex flex-col justify-between">
//             <h1 className="text-4xl font-bold text-gray-900">{product.productName}</h1>
//             <p className="text-2xl text-gray-600 mt-2">₹ {product.price}</p>
//             <p className="text-lg text-gray-700 mt-6">{product.description}</p>
//             <p className="mt-4 text-gray-600">
//               <span className="font-medium">Category:</span> {product.category}
//             </p>
//             <p className="mt-2 text-gray-600">
//               <span className="font-medium">Inventory:</span> {product.inventory}
//             </p>
//             <p className="mt-2 text-gray-600">
//               <span className="font-medium">Colors:</span> {product.colors}
//             </p>
//             <p className="mt-2 text-gray-600">
//               <span className="font-medium">Status:</span> {product.status}
//             </p>
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//         <div>
//           <h2 className="text-3xl font-semibold mb-6">Explore More Products</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {allProducts.map((prod) => (
//               <Link
//                 href={`/productdetails/${prod._id}`}
//                 key={prod._id}
//                 className="bg-white p-4 rounded-md shadow hover:shadow-lg"
//               >
//                 <div>
//                   <Image
//                     src={prod.imageUrl}
//                     alt={prod.productName}
//                     width={300}
//                     height={300}
//                     className="w-full h-48 object-cover rounded-md cursor-pointer"
//                   />
//                   <div className="mt-4">
//                     <h2 className="font-semibold text-lg">{prod.productName}</h2>
//                     <p className="font-bold mt-1 text-green-600">₹ {prod.price}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AddToCartButton({ product }: { product: Product }) {
//   const [showNotification, setShowNotification] = useState(false);

//   const handleClick = (product: Product) => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "{}");
//     cart[product.productName] = cart[product.productName]
//       ? { ...cart[product.productName], quantity: cart[product.productName].quantity + 1 }
//       : { ...product, quantity: 1 };
//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Show the notification
//     setShowNotification(true);
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 2000); // Notification disappears after 2 seconds
//   };

//   return (
//     <div>
//       {/* Add to Cart Button */}
//       <button
//         className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300"
//         onClick={() => handleClick(product)}
//       >
//         Add to Cart
//       </button>

//       {/* Notification */}
//       {showNotification && (
//         <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow">
//           Product added to cart!
//         </div>
//       )}

//       {/* Total Products Button with Link */}
//       <Link href="/CartPage">
//         <button
//           className="mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-transform duration-300"
//         >
//           Total Products
//         </button>
//       </Link>
//     </div>
//   );
// }



// src/app/productdetails/[id]/page.tsx

import { sanityFetch } from "@/sanity/lib/fetch";
import ProductDetailsClient from "./ProductDetailsClient"; // Client component
import { notFound } from "next/navigation";

// Type for the product data
type Product = {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  colors: string;
  status: string;
  imageUrl: string;
};

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const productQuery = `*[_type == "product" && _id == $id][0] {
    _id,
    productName,
    description,
    price,
    category,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url
  }`;

  const allProductsQuery = `*[_type == "product"] {
    _id,
    productName,
    price,
    "imageUrl": image.asset->url
  }`;

  const product: Product | null = await sanityFetch({ query: productQuery, params: { id } });
  const allProducts: Product[] = await sanityFetch({ query: allProductsQuery });

  if (!product) {
    notFound(); // Show a 404 page if the product is not found
  }

  return (
    <ProductDetailsClient product={product} allProducts={allProducts} />
  );
}

