import { products } from "../lib/products";
import { useCart } from "../context/CartContext";

export default function ProductGallery({ featuredOnly = false }) {
  const { addToCart } = useCart();
  const list = featuredOnly ? products.filter(p => p.featured) : products;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "2rem",
      padding: "2rem 0",
    }}>
      {list.map((product) => (
        <div key={product.slug} style={{
          boxShadow: "0 2px 8px #0001",
          borderRadius: "12px",
          background: "#fafcf9",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", objectFit: "cover", aspectRatio: "1.2", minHeight: "180px" }}
          />
          <div style={{ padding: "1rem" }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", color: "#184932", cursor: "pointer" }}>
              {product.title}
            </h3>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.95rem", color: "#444" }}>
              {product.description}
            </p>
            <div style={{ fontWeight: "bold", color: "#d18122", fontSize: "1rem", marginBottom: "0.75rem" }}>
              {product.price}
            </div>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "0.75rem 1.5rem",
                background: "#184932",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}