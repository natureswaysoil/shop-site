import Navbar from "../components/Navbar";
import Cart from "../components/Cart";

export default function CartPage() {
  return (
    <>    
      <Navbar />
      <main className="max-w-xl mx-auto py-8">
        <Cart />
      </main>
    </>
  );
}