import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import ProductGallery from "../components/ProductGallery";

export default function Home() {
  return (
    <>    
      <Navbar />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
        <HeroBanner />
        <section id="featured">
          <h2 style={{ marginTop: "3rem" }}>Featured Products</h2>
          <ProductGallery featuredOnly />
        </section>
      </main>
    </>
  );
}