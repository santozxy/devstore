"use client"
import { useCart } from "@/context/cart-context";
import React from "react";

interface AddToCartButtonProps {
  productId: string;
}
export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  return (
    <button
      type="button"
      className="mt-8 hover: flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={() => addToCart(productId)}
    >
      <span>Adicionar ao carrinho</span>
    </button>
  );
}
