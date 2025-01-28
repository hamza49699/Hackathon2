// import { sanityFetch } from "@/sanity/lib/fetch";
// import { Allproducts } from "@/sanity/lib/query";
// import Image from "next/image";
// import Link from "next/link";

// type Product = {
//   _id: string;
//   productName: string;
//   description: string;
//   price: number;
//   category: string;
//   inventory: number;
//   colors: string;
//   status: string;
//   imageUrl: string; // Changed from `any` to `string`
// };

// export default async function Home() {
//   const products: Product[] = await sanityFetch({ query: Allproducts });

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-1/4 bg-white shadow-lg p-4">
//         <h2 className="text-xl font-semibold mb-4">Filters</h2>

//         {/* Category Filters */}
//         <div className="mb-6">
//           <h3 className="text-lg font-medium mb-2">Category</h3>
//           <ul className="space-y-2">
//             {["imported Shoes"].map((category) => (
//               <li key={category}>
//                 <label className="inline-flex items-center">
//                   {category === "imported Shoes" ? (
//                     <Link href="/Categories" className="text-blue-500 hover:text-blue-700 ml-2">
//                       {category}
//                     </Link>
//                   ) : (
//                     <>
//                       <input type="checkbox" className="rounded" />
//                       <span className="ml-2">{category}</span>
//                     </>
//                   )}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>

//       {/* Product Grid */}
//       <main className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Products</h1>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <Link
//               href={`/productdetails/${product._id}`}
//               key={product._id}
//               className="bg-white p-4 rounded-md shadow hover:shadow-lg"
//             >
//               <div>
//                 <Image
//                   src={product.imageUrl || "/fallback-image.jpg"} // Fallback image if imageUrl is missing
//                   alt={product.productName}
//                   width={300}
//                   height={300}
//                   className="w-full h-48 object-cover rounded-md cursor-pointer"
//                 />
//                 <div className="mt-4">
//                   <h2 className="font-semibold text-lg">{product.productName}</h2>
//                   <p className="font-bold mt-1 text-green-600">₹ {product.price}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
// Server Component
import { sanityFetch } from "@/sanity/lib/fetch";
import { Allproducts } from "@/sanity/lib/query";
import Link from "next/link";
import ProductList from "@/components/ProductList"; // Create a separate Client Component

export default async function Home() {
  const products = await sanityFetch({ query: Allproducts });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Category</h3>
          <ul className="space-y-2">
            {["imported Shoes"].map((category) => (
              <li key={category}>
                <label className="inline-flex items-center">
                  {category === "imported Shoes" ? (
                    <Link href="/Categories" className="text-blue-500 hover:text-blue-700 ml-2">
                      {category}
                    </Link>
                  ) : (
                    <>
                      <input type="checkbox" className="rounded" />
                      <span className="ml-2">{category}</span>
                    </>
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Pass products to Client Component */}
      <main className="flex-1 p-6">
        <ProductList products={products} />
      </main>
    </div>
  );
}

