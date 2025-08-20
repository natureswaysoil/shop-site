import React, { createContext, useContext, useState } from "react";

export type CartItem = {
  slug: string;
  title: string;
  price: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: any) => {
    setCart(prev => {
      const found = prev.find(i => i.slug === product.slug);
      if (found) {
        return prev.map(i => i.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { slug: product.slug, title: product.title, price: product.price, quantity: 1 }];
    });
  };

  const removeFromCart = (slug: string) => setCart(prev => prev.filter(i => i.slug !== slug));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};