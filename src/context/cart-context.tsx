"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
  product: string;
  quantity: number;
}

interface CartContext {
  items: CartItem[];
  addToCart: (productId: string) => void;
}
const CartContext = createContext({} as CartContext);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: string) {
    setCartItems((items) => {
      const productInCart = items.some((item) => item.product === productId);
      if (productInCart) {
        return items.map((item) => {
          if (item.product === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
      return [...items, { product: productId, quantity: 1 }];
    });
  }
  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => 
  useContext(CartContext);

