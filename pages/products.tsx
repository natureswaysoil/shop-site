import Navbar from "../components/Navbar";
import ProductGallery from "../components/ProductGallery";

export default function ProductsPage() {
  return (
    <>    
      <Navbar />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
        <h1>All Products</h1>
        <ProductGallery />
      </main>
    </>
  );
}