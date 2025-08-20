import Navbar from "../components/Navbar";

export default function RefundPolicy() {
  return (
    <>    
      <Navbar />
      <main style={{ maxWidth: 700, margin: "2rem auto", padding: "2rem" }}>
        <h1>Refund Policy</h1>
        <p>
          If you aren't happy within 30 days, just ask for a refund and keep the product.
        </p>
        <p>
          We believe in our products and want you to be fully satisfied. Reach out by email or phone and we’ll process your refund—no return required.
        </p>
      </main>
    </>
  );
}