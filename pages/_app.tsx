import type { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import AIChatWidget from "../components/AIChatWidget";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <AIChatWidget />
    </CartProvider>
  );
}