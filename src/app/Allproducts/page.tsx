import { sanityFetch } from "@/sanity/lib/fetch";
import { Allproducts } from "@/sanity/lib/query";
import Link from "next/link";
import ProductList from "@/components/ProductList"; // Create a separate Client Component

export default async function Home() {
  const products = await sanityFetch({ query: Allproducts });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar: Make it smaller */}
      <aside className="w-1/6 bg-white shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Category</h3>
          <ul className="space-y-2">
            {["Nike Shirts"].map((category) => (
              <li key={category}>
                <label className="inline-flex items-center">
                  {category === "Nike Shirts" ? (
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

      {/* Main Content: Make the product section bigger */}
      <main className="flex-1 p-6">
        <ProductList products={products} />
      </main>
    </div>
  );
}
