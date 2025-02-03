
import { sanityFetch } from "@/sanity/lib/fetch";
import { categories } from "@/sanity/lib/query";
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
  imageUrl: string; // Use any because it will be processed by urlFor
};

export default async function Home() {
  // Fetch all products
  const products: Product[] = await sanityFetch({ query: categories });

  // Filter the products to only get those at the indices 6, 13, 20, 26
  const selectedProducts = [5, 13, 20, 23, 24, 30].map(index => products[index]).filter(Boolean); // .filter(Boolean) to remove any undefined values

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-6">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">Nike Shirts</h1>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {selectedProducts.map((product) => (
          <Link
            href={`/productdetails/${product._id}`}
            key={product._id}
            className="bg-white p-4 rounded-md shadow hover:shadow-lg"
          >
            <div>
              <Image
                src={product.imageUrl}
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

