import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      padding: "1rem 2rem",
      background: "#184932",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Nature's Way Soil
        </Link>
      </div>
      <div style={{ display: "flex", gap: "1.2rem" }}>
        <Link href="/products" style={{ color: "#fff" }}>Products</Link>
        <Link href="/cart" style={{ color: "#fff" }}>Cart</Link>
        <Link href="/kb" style={{ color: "#fff" }}>Knowledge Base</Link>
        <Link href="/privacy-policy" style={{ color: "#fff" }}>Privacy Policy</Link>
        <Link href="/refund-policy" style={{ color: "#fff" }}>Refund Policy</Link>
      </div>
    </nav>
  );
}