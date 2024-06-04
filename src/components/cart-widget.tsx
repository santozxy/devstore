"use client";
import { useCart } from "@/context/cart-context";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CardWidget() {
  const { items } = useCart();
  return (
    <Link href="/" className="flex items-center gap-2 hover:underline">
      <ShoppingCart className="w-6 h-6" />
      <span className="text-sm">Cart ({items.length})</span>
    </Link>
  );
}
