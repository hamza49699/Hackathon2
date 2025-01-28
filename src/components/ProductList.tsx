// "useClient";
// import IProduct from '@/types/product';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// interface CartItem extends IProduct {
//   quantity: number;
// }

// export default function ProductList({ products }: { products: IProduct[] }) {
//   const [cartCount, setCartCount] = useState(0);

//   // Update the cart count from localStorage whenever the cart is modified
//   useEffect(() => {
//     const cart: Record<string, CartItem> = JSON.parse(localStorage.getItem('cart') || '{}');
//     const totalItems = Object.values(cart).reduce(
//       (count: number, item: CartItem) => count + item.quantity,
//       0
//     );
//     setCartCount(totalItems);
//   }, []); // Only run once, on mount

//   const handleClick = (product: IProduct) => {
//     const cart: Record<string, CartItem> = JSON.parse(localStorage.getItem('cart') || '{}');
//     if (cart[product.productName]) {
//       cart[product.productName] = {
//         ...cart[product.productName],
//         quantity: cart[product.productName].quantity + 1,
//       };
//     } else {
//       cart[product.productName] = { ...product, quantity: 1 };
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Update cart count after adding the product
//     const totalItems = Object.values(cart).reduce(
//       (count: number, item: CartItem) => count + item.quantity,
//       0
//     );
//     setCartCount(totalItems);
//   };

//   return (
//     <div>
//       {/* Top Section: Total Products Button */}
//       <div className="flex justify-end mb-6">
//         <button>
//           <Link href="/CartPage">
//             <a className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//               Total Products ({cartCount})
//             </a>
//           </Link>
//         </button>
//       </div>

//       {/* Product List */}
//       <div className="flex justify-center gap-4 flex-wrap">
//         {products.map((product) => (
//           <div
//             key={product.productName}
//             className="border rounded shadow-lg p-4 w-64 flex flex-col items-center"
//           >
//             <Image
//               src={product.image}
//               alt={product.productName}
//               width={200}
//               height={200}
//               className="object-cover rounded-md"
//             />
//             <p className="mt-4 font-semibold text-lg">{product.productName}</p>
//             <p className="text-gray-600">₹{product.price}</p>
//             <button
//               onClick={() => handleClick(product)}
//               className="mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
'use client'; // Enables client-side functionality

import Image from "next/image";
import Link from "next/link";

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

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            href={`/productdetails/${product._id}`}
            key={product._id}
            className="bg-white p-4 rounded-md shadow hover:shadow-lg"
          >
            <div>
              <Image
                src={product.imageUrl || "/fallback-image.jpg"} // Fallback image if imageUrl is missing
                alt={product.productName}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md cursor-pointer"
              />
              <div className="mt-4">
                <h2 className="font-semibold text-lg">{product.productName}</h2>
                <p className="font-bold mt-1 text-green-600">₹ {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
