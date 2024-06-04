import React from "react";
import Image from "next/image";
import { Product } from "@/data/types/product";
import { api } from "@/data/api";
import { Metadata } from "next";
import {AddToCartButton} from "@/components/add-to-cart-button";

interface ProductProps {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const product = await response.json();
  return product;
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return { title: `${product.title} | devstore` };
}

export async function generateStaticParams() {
  const response = await api("/products/featured");
  const products: Product[] = await response.json();
  return products.map((product) => {
    slug: product.slug;
  });
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug);
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt={product.slug}
          width={860}
          height={860}
          quality={90}
          priority
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="px-5 rounded-full font-semibold bg-violet-500 py-2.5">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span className="text-zinc-400 text-sm">
            Em 12x s/ juros de{" "}
            {(product.price / 12).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              P
            </button>
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              M
            </button>
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              G
            </button>
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              GG
            </button>
          </div>
        </div>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}
