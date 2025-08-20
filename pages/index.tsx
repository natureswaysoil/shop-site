import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import ProductGallery from "../components/ProductGallery";

export default function Home() {
  return (
    <>    
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <HeroBanner />
        <section id="featured">
          <h2 className="mt-12 text-2xl font-bold">Featured Products</h2>
          <ProductGallery featuredOnly />
        </section>
      </main>
    </>
  );
}