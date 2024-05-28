import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured");
  const products = await response.json();
  return products;
}

export default async function Home() {
  const [highlightProduct, ...otherProducts] = await getFeaturedProducts();
  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/products/${highlightProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          src="/moletom-never-stop-learning.png"
          alt="Moletom Never Stop Learning"
          width={920}
          height={920}
          quality={100}
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-start"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
            src={product.image}
            alt="Moletom Never Stop Learning"
            width={920}
            height={920}
            quality={100}
          />
          <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </Link>
      ))}
    </main>
  );
}
