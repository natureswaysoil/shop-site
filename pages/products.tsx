import Navbar from "../components/Navbar";
import ProductGallery from "../components/ProductGallery";

export default function ProductsPage() {
  return (
    <>    
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
        <ProductGallery />
      </main>
    </>
  );
}