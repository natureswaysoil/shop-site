import Navbar from "../components/Navbar";
import Cart from "../components/Cart";

export default function CartPage() {
  return (
    <>    
      <Navbar />
      <main style={{ maxWidth: 600, margin: "2rem auto" }}>
        <Cart />
      </main>
    </>
  );
}